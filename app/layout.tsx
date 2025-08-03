import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Navigation } from '@/components/navigation';
import { CommandPalette } from '@/components/command-palette';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PaletteUI - Modern Tailwind CSS Color Tool',
  description: 'Discover, copy, and organize Tailwind CSS colors with a beautiful, modern interface.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon"  href="/ico.svg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <CommandPalette />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}