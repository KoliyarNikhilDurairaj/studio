'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, Send, User, X, MessageCircle } from 'lucide-react';
import { chat, type ChatInput } from '@/ai/flows/chat-flow';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

type Message = {
  role: 'user' | 'model';
  content: string;
};

const sectionGradients: Record<string, string> = {
  home: 'from-primary via-accent to-pink-500',
  about: 'from-green-400 via-cyan-500 to-blue-600',
  projects: 'from-yellow-400 via-orange-500 to-red-600',
  achievements: 'from-indigo-500 via-purple-500 to-pink-500',
  specializations: 'from-teal-400 via-emerald-500 to-lime-600',
  'ai-tech': 'from-red-500 via-rose-500 to-pink-500',
  goals: 'from-sky-400 via-blue-500 to-indigo-600',
  services: 'from-amber-400 via-yellow-500 to-orange-600',
  connect: 'from-violet-500 via-fuchsia-600 to-purple-700',
  contact: 'from-cyan-400 via-sky-500 to-blue-600',
};

const messageGradients = [
  'bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600',
  'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600',
  'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
  'bg-gradient-to-r from-teal-400 via-emerald-500 to-lime-600',
  'bg-gradient-to-r from-red-500 via-rose-500 to-pink-500',
  'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600',
  'bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600',
  'bg-gradient-to-r from-violet-500 via-fuchsia-600 to-purple-700',
  'bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600',
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();


  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
  
  useEffect(() => {
    if (isOpen) {
        setTimeout(() => scrollToBottom(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (pathname === '/') {
      const options = { root: null, rootMargin: '0px', threshold: 0.5 };
      const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      observerRef.current = new IntersectionObserver(handleIntersect, options);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => observerRef.current?.observe(section));

      return () => {
        sections.forEach(section => observerRef.current?.unobserve(section));
      };
    } else {
      const pageKey = pathname.substring(1);
      if (sectionGradients[pageKey]) {
        setActiveSection(pageKey);
      } else {
        setActiveSection('home');
      }
    }
  }, [pathname]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const chatHistory = messages.map(m => ({
            role: m.role,
            content: [{ text: m.content }]
        })) as ChatInput['history'];

        const response = await chat({
            history: chatHistory,
            message: input,
        });
      
      const botMessage: Message = { role: 'model', content: response.message };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        role: 'model',
        content: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const titleGradient = sectionGradients[activeSection] || sectionGradients.home;

  const lastUserMessageIndex = messages.map(m => m.role).lastIndexOf('user');
  const sendButtonGradient = lastUserMessageIndex > -1
    ? messageGradients[lastUserMessageIndex % messageGradients.length]
    : 'bg-primary';

  return (
    <div className="relative">
      {isOpen && (
         <div className="absolute bottom-0 right-full mr-4">
            <Card className="w-[340px] h-[450px] flex flex-col shadow-2xl rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar className={cn("h-8 w-8 bg-gradient-to-r", titleGradient)}>
                      <AvatarFallback className="bg-transparent"><Bot className="text-primary-foreground"/></AvatarFallback>
                    </Avatar>
                    <CardTitle className={cn("text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r", titleGradient)}>
                      Proteciot Assistant
                    </CardTitle>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex-1 overflow-hidden p-4">
                <ScrollArea className="h-full" ref={scrollAreaRef}>
                    <div className="space-y-4 pr-4">
                    {messages.length === 0 && (
                        <div className="flex items-start gap-3 justify-start">
                             <Avatar className="h-8 w-8 bg-gradient-to-r from-primary via-accent to-pink-500">
                                <AvatarFallback className="bg-transparent"><Bot className="text-primary-foreground"/></AvatarFallback>
                            </Avatar>
                            <div className="rounded-lg p-3 text-sm bg-gradient-to-r from-primary via-accent to-pink-500 text-primary-foreground">
                                <p className="whitespace-pre-wrap">Hello! I'm the Proteciot Assistant. Ready to dive into the world of IoT? I'm here to help!</p>
                            </div>
                        </div>
                    )}
                    {messages.map((message, index) => {
                      const userMessageGradient = messageGradients[index % messageGradients.length];
                      return (
                      <div
                        key={index}
                        className={cn(
                          'flex items-start gap-3',
                          message.role === 'user' ? 'justify-end' : 'justify-start'
                        )}
                      >
                        {message.role === 'model' && (
                          <Avatar className="h-8 w-8 bg-gradient-to-r from-primary via-accent to-pink-500">
                            <AvatarFallback className="bg-transparent"><Bot className="text-primary-foreground"/></AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={cn(
                            'rounded-lg p-3 text-sm max-w-[80%] text-primary-foreground',
                            message.role === 'user'
                              ? userMessageGradient
                              : 'bg-gradient-to-r from-primary via-accent to-pink-500'
                          )}
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        </div>
                        {message.role === 'user' && (
                            <Avatar className={cn("h-8 w-8", userMessageGradient)}>
                                <AvatarFallback className="bg-transparent"><User className="text-primary-foreground"/></AvatarFallback>
                            </Avatar>
                        )}
                      </div>
                    )})}
                    {isLoading && (
                        <div className="flex items-start gap-3 justify-start">
                            <Avatar className="h-8 w-8 bg-gradient-to-r from-primary via-accent to-pink-500">
                                <AvatarFallback className="bg-transparent"><Bot className="text-primary-foreground"/></AvatarFallback>
                            </Avatar>
                            <div className="rounded-lg p-3 text-sm bg-muted flex items-center gap-1">
                               <span className="h-2 w-2 rounded-full bg-foreground/30 animate-pulse delay-0"></span>
                               <span className="h-2 w-2 rounded-full bg-foreground/30 animate-pulse delay-150"></span>
                               <span className="h-2 w-2 rounded-full bg-foreground/30 animate-pulse delay-300"></span>
                            </div>
                        </div>
                    )}
                    </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="p-4 border-t">
                <div className="flex items-center gap-2 w-full">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1"
                    disabled={isLoading}
                    aria-label="Chat input"
                  />
                  <Button 
                    onClick={handleSend} 
                    disabled={isLoading} 
                    size="icon" 
                    aria-label="Send message"
                    className={cn(
                        'text-white transition-all', 
                        sendButtonGradient,
                        isLoading ? 'opacity-50' : 'hover:opacity-90'
                    )}
                   >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
        </div>
      )}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "text-white rounded-full transition-all duration-300 animate-pulse-glow border-0 h-10 w-10",
          "hover:scale-110 hover:opacity-90",
          'bg-gradient-to-r from-primary via-accent to-pink-500'
        )}
        aria-label={isOpen ? "Close Chatbot" : "Open Chatbot"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}
