"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { navLinks } from '@/lib/nav-links';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex flex-col sm:flex-row h-auto sm:h-20 items-center justify-between px-4 py-2 sm:py-0">
        <Link href="#home" className="flex items-center gap-2 text-primary transition-transform hover:scale-105 mb-2 sm:mb-0">
          <ShieldCheck className="h-8 w-8" />
          <span className="text-2xl font-bold font-headline">Proteciot</span>
        </Link>

        <nav>
          <ul className="flex items-center gap-1 flex-wrap justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Button variant="ghost" asChild>
                  <Link href={link.href} className="px-3 py-2 text-xs sm:text-sm font-medium text-foreground/80 hover:text-primary">
                    {link.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
