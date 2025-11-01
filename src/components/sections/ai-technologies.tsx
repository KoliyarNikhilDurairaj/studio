
"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, Presentation, MessageCircle, Group } from 'lucide-react';
import ScrollAnimationWrapper from '../scroll-animation-wrapper';

const technologies = [
  {
    icon: <GitBranch className="h-10 w-10 text-accent" />,
    name: 'Project Ideation',
    description: 'Helping you brainstorm and refine your project ideas to ensure they are impactful and achievable.',
  },
  {
    icon: <Presentation className="h-10 w-10 text-accent" />,
    name: 'Presentation Support',
    description: 'Guiding you on how to structure and deliver a compelling project presentation.',
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-accent" />,
    name: 'Circuit Diagrams',
    description: 'Assisting with the creation of clear and accurate circuit diagrams for your hardware.',
  },
  {
    icon: <Group className="h-10 w-10 text-accent" />,
    name: 'Teamwork Strategies',
    description: 'Providing strategies for effective collaboration, communication, and project management.',
  },
];

const AiTechnologiesSection = () => {
  return (
    <section 
      id="ai-tech"
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto px-12 sm:px-16 lg:px-24">
        <div className="text-center mb-12">
          <Link href="/ai-tech" className="group inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
              AI Tech
            </h2>
          </Link>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We support more than just code. Our mentorship covers the full spectrum of skills needed for successful project delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 150}>
              <Card className="text-center flex flex-col items-center p-6 shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 bg-card/50 h-full">
                <CardHeader className="p-0 mb-4">
                  {tech.icon}
                </CardHeader>
                <CardContent className="p-0 flex flex-col items-center">
                  <CardTitle className="text-xl font-bold mb-2">{tech.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiTechnologiesSection;
