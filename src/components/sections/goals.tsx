
"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const GoalsSection = () => {

  return (
    <section 
      id="goals" 
      className="py-20 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-12 sm:px-16 lg:px-24">
        <div className="text-center mb-12">
          <Link href="/goals" className="group inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
              Goals
            </h2>
          </Link>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Our approach is designed for accessibility and personalized learning, offered completely free of charge.
          </p>
        </div>
        <Card className="shadow-xl bg-card/50">
            <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-accent mb-4">Personalized Mentoring</h3>
                        <p className="text-foreground/80 leading-relaxed text-left max-w-prose hyphens-auto">
                            We offer one-on-one and group mentoring sessions via online platforms like Zoom. This allows for tailored guidance that meets you where you are, whether you're just starting or deep into a project.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-accent mb-4">Commitment to Open Education</h3>
                        <p className="text-foreground/80 leading-relaxed text-left max-w-prose hyphens-auto">
                            Proteciot is a non-profit initiative. All mentorship and resources are provided for free. Our mission is to break down financial barriers and make hands-on tech education available to every passionate student.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GoalsSection;
