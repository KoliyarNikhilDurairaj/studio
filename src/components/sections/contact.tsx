
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestMentorship = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:proteciot@zohomail.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-32 bg-secondary/30 animate-fade-in-up"
    >
      <div className="container mx-auto px-12 sm:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Have a project idea or want to learn more? Reach out to schedule your first free mentorship session.
          </p>
          <div className="mt-8 flex justify-center items-center gap-2">
            <Mail className="h-5 w-5 text-accent" />
            <Link href="mailto:proteciot@zohomail.in" className="text-lg text-accent font-medium hover:underline">
              proteciot@zohomail.in
            </Link>
          </div>
        </div>
        <Card className="max-w-2xl mx-auto shadow-2xl bg-card/50">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g., IoT Project Idea" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project or what you want to learn..." rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <div className="text-right">
                <Button type="button" size="lg" className="bg-accent hover:bg-accent/90" onClick={handleRequestMentorship}>
                  Request Mentorship
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
