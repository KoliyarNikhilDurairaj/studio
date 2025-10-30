
"use client";

import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[], rootMargin = '-20% 0px -80% 0px') {
  const [activeSection, setActiveSection] = useState<string | null>('home');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    const { current: currentObserver } = observer;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        currentObserver.observe(el);
      }
    });

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}
