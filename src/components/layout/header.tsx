
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { navLinks } from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map((link) => {
        const el = document.getElementById(link.href.substring(1));
        return el;
      });
      
      let currentSection = '#home';

      sections.forEach((section) => {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="#home" className="flex items-center gap-2 text-primary transition-transform hover:scale-105">
          <ShieldCheck className="h-8 w-8" />
          <span className="text-2xl font-bold font-headline">Proteciot</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group relative px-3 py-2 text-sm font-medium transition-colors",
                      activeLink === link.href ? "text-primary" : "text-foreground/70 hover:text-primary",
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                      activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
