
"use client";

import { useState, useEffect } from 'react';
import { navLinks } from '@/lib/nav-links';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const navLink = navLinks.find(
              (link) => link.href === `/#${entry.target.id}`
            );
            if (navLink) {
              setActiveSection(navLink.name);
            }
          }
        });
      },
      {
        rootMargin: '-30% 0px -70% 0px',
      }
    );

    const sections = navLinks
      .map((link) => {
        const id = link.href.split('#')[1];
        return id ? document.getElementById(id) : null;
      })
      .filter(Boolean) as HTMLElement[];

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}
