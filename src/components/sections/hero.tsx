
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  
  return (
    <section id="home" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1 animate-fade-in-up text-left">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500"
            >
              Mentorship for IoT Innovators
            </h1>
            <p 
              className="max-w-2xl text-lg md:text-xl lg:text-2xl text-foreground/90 mb-8 font-medium"
            >
              Get free, one-on-one guidance for your IoT projects through live video calls with experienced mentors.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg">
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>
          </div>
          <div className="order-2 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
