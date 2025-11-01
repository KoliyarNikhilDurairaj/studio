
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import ScrollToTop from '@/components/scroll-to-top';

export const metadata: Metadata = {
  title: 'Proteciot - Free IoT Project Mentorship',
  description: 'An educational initiative providing free IoT project mentorship to engineering students to build real-world systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
