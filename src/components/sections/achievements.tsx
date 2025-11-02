
"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollAnimationWrapper from '../scroll-animation-wrapper';

const achievements = [
  { value: '6', label: 'Projects as Team Leader', href: 'https://www.linkedin.com/in/koliyarnikhildurairaj/details/projects/' },
  { value: '100%', label: 'Free of Cost', href: '/goals' },
  { value: '8', label: 'Awards Won', href: 'https://www.linkedin.com/in/koliyarnikhildurairaj/details/honors/' },
];

const AchievementsSection = () => {
  return (
    <section 
      id="achievements" 
      className="py-20 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-12 sm:px-16 lg:px-24">
        <div className="text-center mb-12">
          <Link href="/achievements" className="group inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
              Achievements
            </h2>
          </Link>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Ready to mentor Students for IoT Projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 150}>
              <div className="h-full">
                {achievement.href ? (
                  <Link href={achievement.href} target={achievement.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="h-full block">
                    <Card className="text-center shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 bg-card/50 h-full">
                      <CardHeader>
                        <CardTitle className="text-5xl lg:text-6xl font-extrabold text-accent">
                          {achievement.value}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg font-medium text-foreground">{achievement.label}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <Card className="text-center shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 bg-card/50 h-full">
                    <CardHeader>
                      <CardTitle className="text-5xl lg:text-6xl font-extrabold text-accent">
                        {achievement.value}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-medium text-foreground">{achievement.label}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
