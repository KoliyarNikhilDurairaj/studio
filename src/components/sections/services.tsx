import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'AI Security Audits',
    description: 'Comprehensive assessments of your existing systems to identify vulnerabilities and enhance your security posture with AI.',
  },
  {
    title: 'Custom AI Solutions',
    description: 'End-to-end development of bespoke AI models and platforms tailored to solve your specific business challenges.',
  },
  {
    title: 'Data Protection Consulting',
    description: 'Expert guidance to help you navigate the complex landscape of data privacy regulations and implement robust protection strategies.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Our services are crafted to provide comprehensive support for your security and innovation needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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
