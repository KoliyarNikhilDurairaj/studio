
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import AchievementsSection from "@/components/sections/achievements";
import SpecializationsSection from "@/components/sections/specializations";
import AiTechnologiesSection from "@/components/sections/ai-technologies";
import GoalsSection from "@/components/sections/goals";
import ServicesSection from "@/components/sections/services";
import SocialSection from "@/components/sections/social";
import ContactSection from "@/components/sections/contact";
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ScrollAnimationWrapper>
          <HeroSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <AboutSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <ProjectsSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <AchievementsSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <SpecializationsSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <AiTechnologiesSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <GoalsSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <ServicesSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <SocialSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <ContactSection />
        </ScrollAnimationWrapper>
      </main>
      <Footer />
    </div>
  );
}
