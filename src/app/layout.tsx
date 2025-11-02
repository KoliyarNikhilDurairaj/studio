
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import ScrollToTop from '@/components/scroll-to-top';

export const metadata: Metadata = {
  metadataBase: new URL('https://proteciot.web.app'),
  title: 'Proteciot - Free IoT Project Mentorship for Engineering Students',
  description: 'Proteciot offers free, expert-led IoT project mentorship for engineering students. Get guidance on embedded programming, circuit design, and build real-world systems. Start your project today!',
  keywords: [
    'IoT mentorship',
    'free IoT projects',
    'engineering students',
    'embedded systems',
    'Arduino projects',
    'Raspberry Pi',
    'LoRaWAN',
    'Koliyar Nikhil Durairaj',
    'Proteciot',
    'IoT training'
  ],
  authors: [{ name: 'Koliyar Nikhil Durairaj', url: 'https://www.linkedin.com/in/koliyarnikhildurairaj/' }],
  openGraph: {
    title: 'Proteciot - Free IoT Project Mentorship for Innovators',
    description: 'Empowering the next generation of engineers with free, hands-on mentorship for building real-world IoT solutions.',
    url: 'https://proteciot.web.app',
    siteName: 'Proteciot',
    images: [
      {
        url: 'https://live.staticflickr.com/65535/54891928270_2d40222a5a_b.jpg',
        width: 1024,
        height: 683,
        alt: 'Mentorship for IoT Innovators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proteciot - Free IoT Project Mentorship',
    description: 'Get free, expert guidance for your IoT projects. From idea to implementation, Proteciot helps engineering students succeed.',
    images: ['https://live.staticflickr.com/65535/54891928270_2d40222a5a_b.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="iPlEn4puXOjYqg1jFQqaEBlsCj4JB-AkCYJGBtTmOtE" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <div className="fixed bottom-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
