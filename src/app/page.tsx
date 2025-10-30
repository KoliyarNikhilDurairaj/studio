
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
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Link href="/about"><AboutSection /></Link>
        <Link href="/projects"><ProjectsSection /></Link>
        <Link href="/achievements"><AchievementsSection /></Link>
        <Link href="/specializations"><SpecializationsSection /></Link>
        <Link href="/ai-tech"><AiTechnologiesSection /></Link>
        <Link href="/goals"><GoalsSection /></Link>
        <Link href="/services"><ServicesSection /></Link>
        <Link href="/connect"><SocialSection /></Link>
        <Link href="/contact"><ContactSection /></Link>
      </main>
      <Footer />
    </div>
  );
}
