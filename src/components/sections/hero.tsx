
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-background via-secondary/50 to-background">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-2 relative z-10 p-4 text-center lg:text-left animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tighter mb-4 text-primary">
            Mentorship for IoT Innovators
          </h1>
          <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8">
            Get free, one-on-one guidance for your IoT projects through live video calls with experienced mentors.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 transition-transform hover:scale-105">
            <Link href="/contact">
              Start Your Project
            </Link>
          </Button>
        </div>
        <div className="lg:col-span-3 flex justify-center items-center p-4">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={800}
                height={800}
                priority
                data-ai-hint={heroImage.imageHint}
                className="object-contain w-full h-auto"
              />
            )}
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.2s;
          animation-fill-mode: backwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
