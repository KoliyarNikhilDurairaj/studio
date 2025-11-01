
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
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
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary via-accent to-pink-500"
                  />
                ) : (
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary via-accent to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center"
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
