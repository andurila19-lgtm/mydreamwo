import type { Metadata } from 'next';
import UndanganClient from './UndanganClient';

export const metadata: Metadata = {
  title: 'Undangan Digital Premium | My Dream Digital Invitation Jember',
  description:
    'Bagikan momen bahagia Anda dengan undangan digital yang elegan, personal, dan mudah dibagikan kepada keluarga serta kerabat. Layanan eksklusif dari My Dream Organizer Jember.',
  keywords: [
    'undangan digital premium',
    'undangan digital jember',
    'My Dream Digital Invitation',
    'undangan pernikahan online jember',
    'wedding invitation digital',
    'My Dream Organizer Jember',
  ],
  openGraph: {
    title: 'Undangan Digital Premium | My Dream Digital Invitation Jember',
    description:
      'Undangan digital premium berdesain editorial elegan, live countdown, Google Maps, galeri foto, dan RSVP terintegrasi.',
    url: 'https://mydreamorganizer.com/undangan',
    siteName: 'My Dream Organizer',
    images: [
      {
        url: '/images/hero-portrait.webp',
        width: 1200,
        height: 630,
        alt: 'Undangan Digital Premium My Dream Organizer',
      },
    ],
  },
};

export default function UndanganPage() {
  return <UndanganClient />;
}
