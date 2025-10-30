import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Wifi, Cpu, Code } from 'lucide-react';

const specializations = [
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    name: 'Embedded Systems',
    description: 'Mastering microcontrollers like ESP32 and applying them to solve real-world problems.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    name: 'MicroPython & C++',
    description: 'Writing clean and efficient code for resource-constrained devices.',
  },
  {
    icon: <Wifi className="h-10 w-10 text-primary" />,
    name: 'IoT Protocols',
    description: 'Understanding and implementing MQTT, HTTP, and other key communication protocols.',
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    name: 'Full Project Lifecycle',
    description: 'From brainstorming and circuit design to coding and final presentation.',
  },
];

const SpecializationsSection = () => {
  return (
    <section id="specializations" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
            Specializations
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We specialize in the fundamental skills and technologies that power the Internet of Things.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <Card key={index} className="flex items-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-card/50">
              <CardHeader className="p-0 pr-6">
                {spec.icon}
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-xl font-bold mb-2">{spec.name}</CardTitle>
                <p className="text-muted-foreground">{spec.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
