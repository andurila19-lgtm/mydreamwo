export interface GalleryItem {
  id: string;
  title: string;
  category: 'Wedding Ceremony' | 'Wedding Reception' | 'Engagement' | 'Birthday' | 'Corporate & Event' | 'Event Decoration' | 'Wedding Coordination';
  venue: string;
  client: string;
  image: string;
  description?: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 'p1',
    title: 'Akad Nikah Khidmat & Sakral',
    category: 'Wedding Ceremony',
    venue: 'Masjid Jami Al-Baitul Amien & Ballroom Jember',
    client: 'Aditya & Clarissa',
    image: '/images/hero-portrait.webp',
    description: 'Prosesi ijab qobul bernuansa sakral dengan busana pengantin elegan, pengawalan keluarga besar, dan suasana penuh haru yang tertata rapi.'
  },
  {
    id: 'p2',
    title: 'Grand Ballroom Wedding Reception',
    category: 'Wedding Reception',
    venue: 'Aston Hotel & Conference Center Jember',
    client: 'dr. Farhan & dr. Amanda',
    image: '/images/ballroom-candid.webp',
    description: 'Resepsi megah dengan tata pencahayaan panggung dramatis, dekorasi floral mewah, jamuan katering premium, dan tata urutan acara yang mengalir lancar.'
  },
  {
    id: 'p3',
    title: 'Intimate Garden Wedding Gathering',
    category: 'Wedding Ceremony',
    venue: 'Rembangan Hill Outdoor Jember',
    client: 'Reza & Nadine',
    image: '/images/joglo-pendopo.webp',
    description: 'Pernikahan outdoor berlatar pemandangan asri perbukitan, menghadirkan keintiman mendalam bersama keluarga dan para sahabat dekat.'
  },
  {
    id: 'p4',
    title: 'Warm Engagement & Seserahan Ceremony',
    category: 'Engagement',
    venue: 'D’Java Heritage Private Hall Jember',
    client: 'Bagas & Putri',
    image: '/images/wedding-artifacts.webp',
    description: 'Momen lamaran hangat dengan dekorasi backdrop modern floral, penataan baki seserahan estetik, serta tata cara pertemuan kedua keluarga.'
  },
  {
    id: 'p5',
    title: 'Sweet 17th Glamour Birthday Party',
    category: 'Birthday',
    venue: 'Lounge & Function Hall Jember',
    client: 'Valencia & Friends',
    image: '/images/team-hero.webp',
    description: 'Pesta ulang tahun ke-17 bernuansa youthful glamour dengan lighting effect spektakuler, photobooth 360 interaktif, live DJ, dan games meriah.'
  },
  {
    id: 'p6',
    title: 'Annual Corporate Gala Dinner & Awarding',
    category: 'Corporate & Event',
    venue: 'Grand Sevendream Convention Hall Jember',
    client: 'East Java Business Association',
    image: '/images/ballroom-candid.webp',
    description: 'Penyelenggaraan malam apresiasi perusahaan dengan tata panggung videotron modern, floor management presisi, dan koordinasi VIP berstandar tinggi.'
  },
  {
    id: 'p7',
    title: 'Floral Grand Stage & Lighting Production',
    category: 'Event Decoration',
    venue: 'Ballroom Dafam Fortuna Jember',
    client: 'Kurnia & Sheila',
    image: '/images/siraman-ceremony.webp',
    description: 'Kreasi dekorasi pelaminan modern bertema fairy garden dengan instalasi ribuan bunga segar, chandeliers kristal, dan pathway romantis.'
  },
  {
    id: 'p8',
    title: 'Professional On-Day Wedding Coordination',
    category: 'Wedding Coordination',
    venue: 'Royal Hotel Ballroom Jember',
    client: 'My Dream Field Crew',
    image: '/images/team-hero.webp',
    description: 'Tim solid My Dream Organizer berseragam resmi dan HT terkoneksi mengawal seluruh vendor, memandu orang tua, dan mendampingi pengantin sejak subuh.'
  }
];
