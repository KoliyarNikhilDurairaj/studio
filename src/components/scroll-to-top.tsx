
"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from 'next/navigation';
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionGradients: Record<string, string> = {
  home: 'bg-gradient-to-r from-primary via-accent to-pink-500',
  about: 'bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600',
  projects: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600',
  achievements: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
  specializations: 'bg-gradient-to-r from-teal-400 via-emerald-500 to-lime-600',
  'ai-tech': 'bg-gradient-to-r from-red-500 via-rose-500 to-pink-500',
  goals: 'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600',
  services: 'bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600',
  connect: 'bg-gradient-to-r from-violet-500 via-fuchsia-600 to-purple-700',
  contact: 'bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600',
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === '/') {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  const buttonGradient = sectionGradients[activeSection] || sectionGradients.home;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "text-white rounded-full transition-all duration-300 animate-nudge-up border-0",
        "hover:scale-110 hover:opacity-90",
        buttonGradient,
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
};

export default ScrollToTop;
