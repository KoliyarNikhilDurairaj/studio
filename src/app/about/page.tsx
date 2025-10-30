
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">About</h1>
        {/* Page content will go here */}
      </main>
      <Footer />
    </div>
  );
}
