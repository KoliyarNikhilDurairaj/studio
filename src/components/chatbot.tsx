'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, Send, User, X } from 'lucide-react';
import { chat, type ChatInput } from '@/ai/flows/chat-flow';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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

  const handleSend = async () => {
    if (input.trim() === '') return;

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

  return (
    <div className="relative">
      {isOpen && (
         <div className="absolute bottom-0 right-full mr-4">
            <Card className="w-[340px] h-[450px] flex flex-col shadow-2xl rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 bg-primary">
                      <AvatarFallback><Bot className="text-primary-foreground"/></AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">Proteciot Assistant</CardTitle>
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
                            <Avatar className="h-8 w-8">
                                <AvatarFallback><Bot /></AvatarFallback>
                            </Avatar>
                            <div className="rounded-lg p-3 text-sm bg-muted">
                                <p className="whitespace-pre-wrap">Hello! I'm the Proteciot Assistant. Ready to dive into the world of IoT? I'm here to help!</p>
                            </div>
                        </div>
                    )}
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={cn(
                          'flex items-start gap-3',
                          message.role === 'user' ? 'justify-end' : 'justify-start'
                        )}
                      >
                        {message.role === 'model' && (
                          <Avatar className="h-8 w-8">
                            <AvatarFallback><Bot /></AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={cn(
                            'rounded-lg p-3 text-sm max-w-[80%]',
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          )}
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        </div>
                        {message.role === 'user' && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback><User /></AvatarFallback>
                            </Avatar>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-3 justify-start">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback><Bot /></AvatarFallback>
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
                  <Button onClick={handleSend} disabled={isLoading} size="icon" aria-label="Send message">
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
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>
    </div>
  );
}
