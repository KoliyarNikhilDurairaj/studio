"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          data-ai-hint={heroImage.imageHint}
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-headline tracking-tighter mb-4 animate-fade-in-down">
          Innovate. Secure. Advance.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 animate-fade-in-up">
          Pioneering AI-driven solutions for a protected digital future.
        </p>
        <Button asChild size="lg" className="animate-fade-in-up animation-delay-300 bg-accent hover:bg-accent/90 transition-transform hover:scale-105">
          <Link href="#projects">
            Explore Our Work
          </Link>
        </Button>
      </div>
      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: backwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
