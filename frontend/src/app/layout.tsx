import type { Metadata } from 'next';
import { Poppins, Playfair_Display, Oldenburg } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navigation/Navbar';
import { DEFAULT_SEO_DATA } from '@/static/seo';

const oldenburg = Oldenburg({ weight: '400', subsets: ['latin'] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Trail Nepal',
  description: 'Discover and plan treks in Nepal',
  icons: {
    icon: [
      {
        url: '/icons/logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [{ url: 'icons/logo.png' }],
  },
  keywords: DEFAULT_SEO_DATA.META_KEYWORDS,
  openGraph: {
    title: 'Trail Nepal',
    description: 'Discover and plan treks in Nepal',
    url: 'http://trails.buildfornepal.org/',
    siteName: 'Trail Nepal',
    images: [
      {
        url: 'http://trails.buildfornepal.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trail Nepal Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trail Nepal',
    description: 'Discover and plan treks in Nepal',
    images: ['http://trails.buildfornepal.org/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
