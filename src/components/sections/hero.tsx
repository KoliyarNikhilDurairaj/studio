
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  
  return (
    <section id="home" className="py-24 md:py-32 lg:py-40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1 text-left">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500"
            >
              Mentorship for IoT Innovators
            </h1>
            <p 
              className="max-w-xl text-lg md:text-xl lg:text-2xl text-foreground/90 mb-8 font-medium leading-relaxed text-left hyphens-auto"
            >
              Get free, one-on-one guidance for your IoT projects through live video calls with experienced mentors.
            </p>
            <Button asChild size="lg" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full transition-transform hover:scale-105 shadow-lg animate-pulse-glow">
              <Link href="/contact" className="w-full h-full bg-gradient-to-r from-[#FF69B4] to-[#8A2BE2] text-white rounded-full px-8 py-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                <span className="absolute w-full h-full bg-gradient-to-r from-[#00BFFF] to-[#1E90FF] rounded-full -inset-full top-0 group-hover:inset-0 group-hover:opacity-100 opacity-0 transition-all duration-300"></span>
                <span className="relative">Start Your Project</span>
              </Link>
            </Button>
          </div>
          <div className="order-2 lg:order-2 flex justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={600}
                priority
                data-ai-hint={heroImage.imageHint}
                className="rounded-2xl shadow-2xl object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
