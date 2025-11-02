
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const AboutSection = () => {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-12 sm:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Link href="/about" className="group inline-block">
              <h2 className="text-4xl lg:text-5xl font-bold font-headline mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
                About
              </h2>
            </Link>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed text-left max-w-prose hyphens-auto">
              Proteciot is a free educational platform founded by <span className="font-bold text-transparent bg-clip-text animate-cycle-gradients text-outline">Koliyar Nikhil Durairaj</span>, who currently leads the initiative as Founder and IoT Systems Engineer. The platform mentors engineering students in IoT projects through live Zoom sessions, offering guidance on project ideas, circuit diagrams, presentations, and teamwork. 
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed text-left max-w-prose hyphens-auto">
              Proteciot empowers students to build real-world solutions while making tech education accessible to all.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            {aboutImage && (
              <Card className="overflow-hidden rounded-2xl shadow-2xl w-full max-w-md bg-card/50 transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={600}
                    data-ai-hint={aboutImage.imageHint}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
