
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AiTechnologiesSection from "@/components/sections/ai-technologies";

export default function AiTechPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AiTechnologiesSection />
      </main>
      <Footer />
    </div>
  );
}
