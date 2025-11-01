"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SpecializationsSection from "@/components/sections/specializations";
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper";

export default function SpecializationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ScrollAnimationWrapper>
          <SpecializationsSection />
        </ScrollAnimationWrapper>
      </main>
      <Footer />
    </div>
  );
}
