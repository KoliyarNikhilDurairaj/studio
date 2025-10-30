import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'project-1',
    title: 'Threat-Intel AI',
    description: 'An advanced AI platform that proactively identifies and neutralizes cyber threats by analyzing global data streams in real-time.',
    tags: ['AI', 'Cybersecurity', 'SaaS'],
  },
  {
    id: 'project-2',
    title: 'Privacy Guardian',
    description: 'A comprehensive data privacy suite that uses machine learning to automatically classify sensitive data and enforce compliance policies.',
    tags: ['Data Privacy', 'Machine Learning', 'Compliance'],
  },
  {
    id: 'project-3',
    title: 'Secure-Dev Copilot',
    description: 'An intelligent assistant for developers that identifies security vulnerabilities during the coding process, preventing issues before deployment.',
    tags: ['DevSecOps', 'AI', 'Code Analysis'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We transform complex challenges into elegant, intelligent solutions. Here’s a glimpse of our impactful projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {projectImage && (
                  <div className="aspect-w-3 aspect-h-2">
                    <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      width={600}
                      height={400}
                      data-ai-hint={projectImage.imageHint}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow" />
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
