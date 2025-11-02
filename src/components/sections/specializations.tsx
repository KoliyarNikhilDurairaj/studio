
"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Presentation, Code, Share2 } from 'lucide-react';
import ScrollAnimationWrapper from '../scroll-animation-wrapper';

const specializations = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    name: 'IoT Project Ideas',
    description: 'Brainstorming innovative and practical IoT project concepts tailored to your interests and skill level.',
  },
  {
    icon: <Presentation className="h-10 w-10 text-primary" />,
    name: 'IoT Presentations',
    description: 'Crafting compelling presentations to showcase your project\'s features, architecture, and impact.',
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    name: 'IoT Programming',
    description: 'Writing efficient and reliable code for microcontrollers and connected devices in languages like C++ and MicroPython.',
  },
  {
    icon: <Share2 className="h-10 w-10 text-primary" />,
    name: 'IoT Circuit Diagrams',
    description: 'Designing and documenting clear and accurate circuit diagrams for your hardware implementation.',
  },
];

const SpecializationsSection = () => {

  return (
    <section 
      id="specializations" 
      className="py-20 lg:py-32 bg-secondary/30"
    >
      <div className="container">
        <div className="text-center mb-12">
          <Link href="/specializations" className="group inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-500 to-lime-600 drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
              Specializations
            </h2>
          </Link>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            We specialize in the fundamental skills and technologies that power the Internet of Things.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 150}>
              <Card className="flex items-center p-6 shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 bg-card/50 h-full">
                <CardHeader className="p-0 pr-6">
                  {spec.icon}
                </CardHeader>
                <CardContent className="p-0">
                  <CardTitle className="text-xl font-bold mb-2">{spec.name}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-left hyphens-auto">{spec.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
