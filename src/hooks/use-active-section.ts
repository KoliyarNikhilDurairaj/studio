
"use client";

import { useState, useEffect } from 'react';
import { navLinks } from '@/lib/nav-links';

type SectionName = (typeof navLinks)[number]['name'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href.replace('/', '')));

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() - timeOfLastClick < 1000) {
          return;
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = navLinks.find(link => `#${link.name.toLowerCase().replace(' ', '-')}` === entry.target.id || (link.name === 'Home' && entry.target.id === 'home'))?.name;
            if (sectionName) {
              setActiveSection(sectionName);
            }
          }
        });
      },
      {
        rootMargin: "-40% 0px -60% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [timeOfLastClick]);

  return {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  };
}
