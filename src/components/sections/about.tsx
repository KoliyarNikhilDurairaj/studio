
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const AboutSection = () => {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <section 
      id="about" 
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold font-headline mb-6 text-primary">
              About
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              Proteciot is a free educational platform founded by Koliyar Nikhil Durairaj, who currently leads the initiative as Founder and IoT Systems Engineer. The platform mentors engineering students in IoT projects through live Zoom sessions, offering guidance on project ideas, circuit diagrams, presentations, and teamwork. 
            </p>
            <p className="text-lg text-foreground/80">
              Proteciot empowers students to build real-world solutions while making tech education accessible to all.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            {aboutImage && (
              <Card className="overflow-hidden rounded-2xl shadow-2xl w-full max-w-md bg-card/50">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={600}
                    data-ai-hint={aboutImage.imageHint}
                    className="object-cover w-full h-full"
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
