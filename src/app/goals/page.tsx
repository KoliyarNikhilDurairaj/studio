"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GoalsSection from "@/components/sections/goals";
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper";

export default function GoalsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ScrollAnimationWrapper>
          <GoalsSection />
        </ScrollAnimationWrapper>
      </main>
      <Footer />
    </div>
  );
}
