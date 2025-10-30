import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BusinessModelSection = () => {
  return (
    <section id="business-model" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Our business model is designed for synergy, scalability, and sustained value, primarily focusing on a B2B SaaS framework.
          </p>
        </div>
        <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-accent mb-4">Subscription-Based Services</h3>
                        <p className="text-foreground/80">
                            We provide our cutting-edge AI security solutions through flexible subscription tiers. This ensures continuous protection, regular updates, and access to our latest innovations without a large upfront investment.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-accent mb-4">Consulting & Custom Solutions</h3>
                        <p className="text-foreground/80">
                            For organizations with unique requirements, we offer bespoke consulting services. Our team works closely with you to design, build, and integrate custom AI models and security frameworks tailored to your specific operational landscape.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BusinessModelSection;
