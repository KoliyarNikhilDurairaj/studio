"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServicesSection from "@/components/sections/services";
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ScrollAnimationWrapper>
          <ServicesSection />
        </ScrollAnimationWrapper>
      </main>      
      <Footer />
    </div>
  );
}
