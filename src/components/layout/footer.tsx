
"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background/80 py-6 mt-12">
      <div className="container text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Proteciot. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
