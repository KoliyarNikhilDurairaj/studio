
"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionColors: Record<string, string> = {
  home: 'bg-accent',
  about: 'bg-cyan-500',
  projects: 'bg-orange-500',
  achievements: 'bg-purple-500',
  specializations: 'bg-emerald-500',
  'ai-tech': 'bg-rose-500',
  goals: 'bg-blue-500',
  services: 'bg-yellow-500',
  connect: 'bg-fuchsia-600',
  contact: 'bg-sky-500',
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      toggleVisibility();
      
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    toggleVisibility(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  if (!isMounted) {
    return null;
  }
  
  const buttonColor = sectionColors[activeSection] || 'bg-accent';

  return (
    <div className="fixed bottom-16 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className={cn(
          "text-accent-foreground rounded-full transition-all duration-300 animate-nudge-up",
          "hover:scale-110",
          buttonColor,
          `hover:${buttonColor}/90`,
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ScrollToTop;
