"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/sections/contact";
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ScrollAnimationWrapper>
          <ContactSection />
        </ScrollAnimationWrapper>
      </main>
      <Footer />
    </div>
  );
}
