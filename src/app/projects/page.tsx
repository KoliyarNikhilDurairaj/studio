"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProjectsSection from "@/components/sections/projects";
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ScrollAnimationWrapper>
          <ProjectsSection />
        </ScrollAnimationWrapper>
      </main>
      <Footer />
    </div>
  );
}
