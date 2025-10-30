import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const achievements = [
  { value: '10+', label: 'Years of Experience' },
  { value: '50+', label: 'Successful Projects' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '20+', label: 'AI Models Deployed' },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
            Milestones of Success
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Our journey is marked by significant achievements and a relentless pursuit of excellence. These numbers reflect our commitment and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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
