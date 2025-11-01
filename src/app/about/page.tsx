
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-12 sm:px-16 lg:px-24 py-8 md:py-16">
        <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
                About Proteciot
            </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Proteciot is an educational platform founded by Koliyar Nikhil Durairaj, the IoT Systems Engineer, with a mission to mentor and empower engineering students in the field of Internet of Things (IoT). Through free, personalized guidance delivered via live video sessions, Proteciot helps students bridge the gap between academic theory and practical innovation. The platform offers structured support in embedded programming, circuit design, project ideation, and technical presentation, fostering a hands-on learning environment that emphasizes clarity, accessibility, and professional growth. By cultivating technical excellence and creative problem-solving, Proteciot prepares aspiring engineers to lead in the evolving landscape of smart systems and connected technologies.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {aboutImage && (
              <Card className="overflow-hidden rounded-2xl shadow-2xl w-full max-w-md bg-card/50">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={600}
                    data-ai-hint={aboutImage.imageHint}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
