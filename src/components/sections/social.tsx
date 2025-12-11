
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-8 w-8" />,
    href: 'https://www.linkedin.com/in/koliyarnikhildurairaj/',
  },
];

const SocialSection = () => {

  return (
    <section 
      id="connect" 
      className="py-20 lg:py-32"
    >
      <div className="container">
        <div className="text-center">
          <Link href="/connect" className="group inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-600 to-purple-700 drop-shadow-sm transition-transform duration-300 group-hover:scale-105 mb-4">
              Connect
            </h2>
          </Link>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Follow our journey, get the latest updates, and join the conversation on our social media channels.
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" asChild className="h-20 w-20 rounded-full border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-110">
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
