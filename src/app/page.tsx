import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import AchievementsSection from "@/components/sections/achievements";
import SpecializationsSection from "@/components/sections/specializations";
import AiTechnologiesSection from "@/components/sections/ai-technologies";
import BusinessModelSection from "@/components/sections/business-model";
import ServicesSection from "@/components/sections/services";
import SocialSection from "@/components/sections/social";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <SpecializationsSection />
        <AiTechnologiesSection />
        <BusinessModelSection />
        <ServicesSection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
