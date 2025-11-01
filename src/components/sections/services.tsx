
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'One-on-One Mentorship',
    description: 'Get personalized guidance on your IoT project via Zoom calls with an experienced mentor.',
  },
  {
    title: 'Group Learning Sessions',
    description: 'Collaborate with peers in group workshops to tackle common challenges and learn together.',
  },
  {
    title: 'Full Project Support',
    description: 'Receive help with everything from project ideas and circuit diagrams to code and final presentations.',
  },
];

const ServicesSection = () => {
  return (
    <section 
      id="services" 
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto px-12 sm:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
            Services
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Our services are designed to provide comprehensive support for your entire IoT project journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                    <p className="text-muted-foreground">{service.description}</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
