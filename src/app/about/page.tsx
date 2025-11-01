
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
      <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
                About Proteciot
            </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Proteciot is an educational platform founded by Koliyar Nikhil Durairaj, dedicated to mentoring engineering students in the field of Internet of Things (IoT). Through free, personalized guidance delivered via live video sessions, Proteciot helps students transform academic concepts into real-world projects by offering support in embedded programming, circuit design, project ideation, and technical presentation. The platform emphasizes accessibility, clarity, and hands-on development, fostering a learning environment where aspiring engineers gain the skills, confidence, and mindset needed to lead in smart systems and connected technologies. Driven by a commitment to open education and technical excellence, Proteciot continues to shape the future of IoT innovation by empowering students to build impactful solutions with creativity and precision.
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
