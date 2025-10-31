
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt="Abstract background"
          fill
          priority
          data-ai-hint={heroImage.imageHint}
          className="object-cover w-full h-full blur-md scale-105"
        />
      )}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-headline tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
        >
          Mentorship for IoT Innovators
        </h1>
        <p 
          className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-foreground/90 mb-8 font-medium"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
        >
          Get free, one-on-one guidance for your IoT projects through live video calls with experienced mentors.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg">
          <Link href="/contact">
            Start Your Project
          </Link>
        </Button>
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
