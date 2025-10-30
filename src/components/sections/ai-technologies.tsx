import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, FileText, Eye, Puzzle } from 'lucide-react';

const technologies = [
  {
    icon: <Bot className="h-10 w-10 text-accent" />,
    name: 'Machine Learning',
    description: 'Developing predictive models and algorithms that learn from data to drive intelligent decisions.',
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    name: 'Natural Language Processing',
    description: 'Enabling machines to understand, interpret, and generate human language for advanced analysis.',
  },
  {
    icon: <Eye className="h-10 w-10 text-accent" />,
    name: 'Computer Vision',
    description: 'Training systems to interpret and understand the visual world from images and videos.',
  },
  {
    icon: <Puzzle className="h-10 w-10 text-accent" />,
    name: 'Reinforcement Learning',
    description: 'Building self-learning models that make a sequence of decisions to achieve a complex objective.',
  },
];

const AiTechnologiesSection = () => {
  return (
    <section id="ai-tech" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
            Technologies We Master
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We leverage a powerful stack of AI technologies to build robust and scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="text-center flex flex-col items-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="p-0 mb-4">
                {tech.icon}
              </CardHeader>
              <CardContent className="p-0 flex flex-col items-center">
                <CardTitle className="text-xl font-bold mb-2">{tech.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiTechnologiesSection;
