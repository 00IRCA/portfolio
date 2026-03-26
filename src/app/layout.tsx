import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  subsets: ['latin'],
});

const BASE_URL = 'https://ismaelruizcarlin.dev'; // TODO: replace with your actual domain

export const metadata: Metadata = {
  title: 'Ismael Ruiz - Full Stack Developer',
  description:
    'Full Stack developer specializing in React, TypeScript, and Node.js. Building fast, accessible, and polished web applications.',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: 'Ismael Ruiz - Full Stack Developer',
    description:
      'Full Stack developer specializing in React, TypeScript, and Node.js. Building fast, accessible, and polished web applications.',
    url: BASE_URL,
    siteName: 'Ismael Ruiz Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ismael Ruiz - Full Stack Developer',
    description:
      'Full Stack developer specializing in React, TypeScript, and Node.js. Building fast, accessible, and polished web applications.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        <ThemeProvider attribute="data-theme">{children}</ThemeProvider>
      </body>
    </html>
  );
}
