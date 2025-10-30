"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';
import { navLinks } from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="font-bold">Proteciot</span>
        </Link>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href ? "text-primary" : "text-foreground/70 hover:text-primary",
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
