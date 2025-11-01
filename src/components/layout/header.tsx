
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Header = () => {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const gradients = [
    'from-pink-500/40 via-fuchsia-500/40 to-purple-600/40',
    'from-green-400/40 via-cyan-500/40 to-blue-600/40',
    'from-yellow-400/40 via-orange-500/40 to-red-600/40',
    'from-indigo-500/40 via-purple-500/40 to-pink-500/40',
    'from-teal-400/40 via-emerald-500/40 to-lime-600/40',
    'from-red-500/40 via-rose-500/40 to-pink-500/40',
    'from-sky-400/40 via-blue-500/40 to-indigo-600/40',
    'from-amber-400/40 via-yellow-500/40 to-orange-600/40',
    'from-violet-500/40 via-fuchsia-600/40 to-purple-700/40',
    'from-cyan-400/40 via-sky-500/40 to-blue-600/40'
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-12 sm:px-16 lg:px-24 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="p-1.5 rounded-lg bg-gradient-to-r from-primary via-accent to-pink-500">
             <ShieldCheck className="h-7 w-7 text-white" />
          </div>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500 group-hover:opacity-90 transition-opacity">Proteciot</span>
        </Link>
        
        <nav className="hidden md:flex gap-1">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const gradientClass = gradients[index % gradients.length];
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative rounded-md px-3 py-2 text-sm font-medium transition-colors text-foreground/80 hover:text-foreground",
                  isActive ? "text-foreground" : ""
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive ? (
                  <span
                    className={cn("absolute inset-0 rounded-md bg-gradient-to-r", gradientClass)}
                  />
                ) : (
                  <span
                    className={cn(
                      "absolute inset-0 rounded-md bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      gradientClass
                    )}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className={cn(
                        'text-lg font-medium text-foreground/80 hover:text-foreground',
                        pathname === link.href && 'text-primary'
                      )}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
};

export default Header;
