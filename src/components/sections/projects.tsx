import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'project-1',
    title: 'Smart Home Automation',
    description: 'Build a system to control lights, temperature, and appliances in your home using an ESP32 and MicroPython.',
    tags: ['ESP32', 'MicroPython', 'IoT'],
  },
  {
    id: 'project-2',
    title: 'Weather Monitoring Station',
    description: 'Create a device that collects and displays real-time weather data, sending alerts based on environmental changes.',
    tags: ['Sensors', 'Data Logging', 'API'],
  },
  {
    id: 'project-3',
    title: 'Automated Plant Watering',
    description: 'Design an intelligent system that monitors soil moisture and waters plants automatically, ensuring they stay healthy.',
    tags: ['Embedded Systems', 'IoT', 'Automation'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
            IoT Projects
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Get inspired by what you can build. We guide you through projects like these, from concept to completion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-card/50">
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
