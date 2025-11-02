
"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-12 sm:px-16 lg:px-24 py-8 md:py-16">
        <div className="text-center mb-12">
            <Link href="/about" className="group inline-block">
              <h1 className="text-4xl lg:text-5xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
                  About
              </h1>
            </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-foreground/80 leading-relaxed text-justify max-w-prose hyphens-auto">
              Proteciot is an educational platform founded by <span className="font-bold text-transparent bg-clip-text animate-tab-gradient drop-shadow-sm">Koliyar Nikhil Durairaj</span>, the IoT Systems Engineer, with a mission to mentor and empower engineering students in the field of Internet of Things (IoT). Through free, personalized guidance delivered via live video sessions, Proteciot helps students bridge the gap between academic theory and practical innovation. The platform offers structured support in embedded programming, circuit design, project ideation, and technical presentation, fostering a hands-on learning environment that emphasizes clarity, accessibility, and professional growth. By cultivating technical excellence and creative problem-solving, Proteciot prepares aspiring engineers to lead in the evolving landscape of smart systems and connected technologies.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            {aboutImage && (
              <Card className="overflow-hidden rounded-2xl shadow-2xl w-full max-w-md bg-card/50 transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={600}
                    data-ai-hint={aboutImage.imageHint}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
