import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, DatabaseZap, BrainCircuit, Code } from 'lucide-react';

const specializations = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    name: 'AI-Powered Cybersecurity',
    description: 'Proactive threat detection and response using advanced machine learning models.',
  },
  {
    icon: <DatabaseZap className="h-10 w-10 text-primary" />,
    name: 'Intelligent Data Privacy',
    description: 'Automated solutions for data classification, anonymization, and compliance.',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    name: 'Threat Intelligence',
    description: 'Aggregating and analyzing threat data to predict and prevent attacks.',
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    name: 'Secure Development Lifecycle',
    description: 'Integrating security into every phase of software development with AI tools.',
  },
];

const SpecializationsSection = () => {
  return (
    <section id="specializations" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
            Our Expertise
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We specialize in the most critical areas where AI and security intersect, delivering unparalleled protection and insight.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <Card key={index} className="flex items-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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
