"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AchievementsSection from "@/components/sections/achievements";
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper";

export default function AchievementsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ScrollAnimationWrapper>
          <AchievementsSection />
        </ScrollAnimationWrapper>
      </main>
      <Footer />
    </div>
  );
}
