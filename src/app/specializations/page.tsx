
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SpecializationsSection from "@/components/sections/specializations";

export default function SpecializationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SpecializationsSection />
      </main>
      <Footer />
    </div>
  );
}
