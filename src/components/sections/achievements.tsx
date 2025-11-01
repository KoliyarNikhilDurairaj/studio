
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const achievements = [
  { value: '6', label: 'Projects as Team Leader' },
  { value: '100%', label: 'Free of Cost' },
  { value: '8', label: 'Awards Won' },
];

const AchievementsSection = () => {
  return (
    <section 
      id="achievements" 
      className="py-20 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-12 sm:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Ready to mentor Students for IoT Projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-card/50">
              <CardHeader>
                <CardTitle className="text-5xl lg:text-6xl font-extrabold text-accent">
                  {achievement.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-foreground">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
