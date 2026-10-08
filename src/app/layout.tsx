import type { Metadata, Viewport } from 'next';
import { Bodoni_Moda, Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollReveal from '@/components/ScrollReveal';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0f1d',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mydreamwo.reaksy.com'),
  title: "My Dream Organizer | Wedding, Event & Birthday Organizer Jember",
  description: "My Dream Organizer Jember melayani Wedding, Event, dan Birthday dengan konsep yang berkesan dan sesuai kebutuhan Anda. Pasti Nikahmu BEDA!",
  keywords: [
    "My Dream Organizer",
    "wedding organizer jember",
    "event organizer jember",
    "birthday organizer jember",
    "WO jember",
    "Pasti Nikahmu BEDA",
    "My Dream Group Jember",
    "paket pernikahan jember"
  ],
  authors: [{ name: "My Dream Organizer" }],
  openGraph: {
    title: "My Dream Organizer | Wedding, Event & Birthday Organizer Jember",
    description: "My Dream Organizer Jember melayani Wedding, Event, dan Birthday dengan konsep yang berkesan dan sesuai kebutuhan Anda. Pasti Nikahmu BEDA!",
    url: "https://mydreamorganizer.com",
    siteName: "My Dream Organizer",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        width: 600,
        height: 600,
        alt: "My Dream Organizer - Pasti Nikahmu BEDA!",
      },
    ],
  },
  icons: {
    icon: '/images/logo.webp',
    apple: '/images/logo.webp',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "My Dream Organizer",
              "alternateName": ["My Dream WO", "My Dream Event Organizer", "Part of My Dream Group"],
              "description": "My Dream Organizer Jember melayani Wedding, Event, dan Birthday dengan konsep yang berkesan dan sesuai kebutuhan Anda. Pasti Nikahmu BEDA!",
              "url": "https://mydreamorganizer.com",
              "telephone": "+6281233779967",
              "email": "organizermydream@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jember",
                "addressLocality": "Jember",
                "addressRegion": "Jawa Timur",
                "postalCode": "68121",
                "addressCountry": "ID"
              },
              "parentOrganization": {
                "@type": "Organization",
                "name": "My Dream Group"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+6281233779967",
                  "contactType": "customer service & wedding event consultation",
                  "areaServed": "ID",
                  "availableLanguage": ["Indonesian"]
                }
              ],
              "sameAs": [
                "https://instagram.com/mydreamorganizer",
                "https://wa.me/6281233779967"
              ]
            })
          }}
        />
      </head>
      <body className={`${bodoni.variable} ${openSans.variable} font-body bg-background text-on-surface`}>
        <Navbar />
        <ScrollReveal>
          <main className="min-h-screen">
            {children}
          </main>
        </ScrollReveal>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
