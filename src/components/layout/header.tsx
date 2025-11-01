
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const gradients = [
  'from-pink-500 to-purple-600',
  'from-sky-500 to-indigo-600',
  'from-green-400 to-blue-500',
  'from-yellow-400 to-orange-500',
  'from-red-500 to-pink-600',
  'from-purple-500 to-indigo-600',
  'from-blue-400 to-teal-500',
  'from-lime-400 to-green-500',
  'from-amber-500 to-red-600',
  'from-fuchsia-500 to-rose-600',
];

const Header = () => {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="p-1.5 rounded-lg bg-gradient-to-r from-primary via-accent to-pink-500">
             <ShieldCheck className="h-7 w-7 text-white" />
          </div>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500 group-hover:opacity-90 transition-opacity">Proteciot</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative px-3 py-2 text-sm font-medium transition-colors text-foreground/80 hover:text-foreground",
                )}
              >
                <span className="relative z-10">{link.name}</span>

                <span
                  className={cn(
                    "absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    `bg-gradient-to-r ${gradients[index % gradients.length]}`
                  )}
                />
                
                {isActive && (
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 w-full",
                      `bg-gradient-to-r ${gradients[index % gradients.length]}`
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
