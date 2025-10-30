import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const AboutSection = () => {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold font-headline mb-6 text-primary">
              About
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              Proteciot is an educational initiative dedicated to making technology accessible for everyone. We provide free, high-quality IoT project mentorship to engineering students, empowering them to build innovative, real-world systems from the ground up.
            </p>
            <p className="text-lg text-foreground/80">
              We believe in learning by doing. Our goal is to bridge the gap between academic knowledge and practical skills, fostering a community of curious minds and future tech leaders through hands-on guidance and collaborative support.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            {aboutImage && (
              <Card className="overflow-hidden rounded-2xl shadow-2xl w-full max-w-md bg-card/50">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={600}
                    data-ai-hint={aboutImage.imageHint}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
