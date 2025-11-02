
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
    'from-primary via-accent to-pink-500',
    'from-green-400 via-cyan-500 to-blue-600',
    'from-yellow-400 via-orange-500 to-red-600',
    'from-indigo-500 via-purple-500 to-pink-500',
    'from-teal-400 via-emerald-500 to-lime-600',
    'from-red-500 via-rose-500 to-pink-500',
    'from-sky-400 via-blue-500 to-indigo-600',
    'from-amber-400 via-yellow-500 to-orange-600',
    'from-violet-500 via-fuchsia-600 to-purple-700',
    'from-cyan-400 via-sky-500 to-blue-600'
  ];

  const gradientText = [
    'text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500',
    'text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600',
    'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600',
    'text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
    'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-500 to-lime-600',
    'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-pink-500',
    'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600',
    'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600',
    'text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-600 to-purple-700',
    'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600',
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
            const gradientTextClass = gradientText[index % gradientText.length];

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-white" : "text-foreground/80 hover:text-white"
                )}
              >
                <span className={cn(
                  "relative z-10",
                  !isActive && "group-hover:text-white",
                  isActive ? "text-white font-semibold" : cn("font-semibold", gradientTextClass)
                )}>
                  {link.name}
                </span>

                <span
                  className={cn(
                    "absolute inset-0 rounded-md bg-gradient-to-r transition-opacity duration-300",
                    gradientClass,
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                />
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
                {navLinks.map((link, index) => {
                   const isActive = pathname === link.href;
                   const gradientTextClass = gradientText[index % gradientText.length];
                  return (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className={cn(
                        'text-lg font-medium hover:text-foreground',
                        isActive ? 'text-primary' : '',
                        !isActive && gradientTextClass
                      )}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                )})}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
};

export default Header;
