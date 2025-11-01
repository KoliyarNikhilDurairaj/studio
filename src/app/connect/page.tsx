"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialSection from "@/components/sections/social";

export default function ConnectPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}
