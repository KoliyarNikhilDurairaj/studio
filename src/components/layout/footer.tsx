
"use client";
import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-background/80 py-6 mt-12">
      <div className="container mx-auto px-12 sm:px-16 lg:px-24 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Proteciot. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
