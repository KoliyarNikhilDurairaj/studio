import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-6 w-6" />,
    href: '#',
  },
  {
    name: 'Twitter',
    icon: <Twitter className="h-6 w-6" />,
    href: '#',
  },
  {
    name: 'GitHub',
    icon: <Github className="h-6 w-6" />,
    href: '#',
  },
];

const SocialSection = () => {
  return (
    <section id="social" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow our journey, get the latest updates, and join the conversation on our social media channels.
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" asChild className="h-14 w-14 rounded-full border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300">
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
