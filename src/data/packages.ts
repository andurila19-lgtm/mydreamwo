export interface VendorBreakdown {
  category: string;
  vendorName: string;
  items: string[];
}

export interface PackageItem {
  id: string;
  slug: string;
  name: string;
  category?: 'Wedding' | 'Event' | 'Birthday';
  badge?: string;
  price: string;
  priceRaw: number;
  originalPrice?: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  venueIncluded: boolean;
  cateringIncluded: boolean;
  features: string[];
  vendors?: VendorBreakdown[];
  freeBonuses?: string[];
  tiers?: { name: string; pax: string; price: string }[];
}

export const packagesData: PackageItem[] = [
  {
    id: 'nikah-yuk',
    slug: 'paket-nikah-yuk',
    name: 'Nikah Yuk Package',
    category: 'Wedding',
    badge: 'Terjangkau & Komplit',
    price: 'Rp 20.500.000',
    priceRaw: 20500000,
    shortDesc: 'Paket pernikahan komplit ekonomis dengan pendampingan WO My Dream (1 PM + 7 kru), MUA Ella Surya (lengkap busana pengantin & ortu/besan), dekorasi 6m Serasa Sewarna, DM Photography, MC Fidi, dan Free Video Cinematic.',
    longDesc: 'Nikah Yuk Package adalah solusi pernikahan impian tanpa beban finansial berlebih. Menghadirkan koordinasi menyeluruh oleh My Dream Organizer dari H-30 hingga hari-H, dekorasi pelaminan modern 6 meter, tata rias busana lengkap untuk pengantin dan orang tua, dokumentasi foto profesional, dan pemandu acara (MC) berpengalaman.',
    image: '/images/hero-portrait.webp',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Wedding Organizer My Dream: 1 Project Manager + 7 Kru Support on Duty (Persiapan H-1)',
      'Konsultasi Konsep, Tema Creative, Smart Budgeting, Rundown & Wedding Book',
      'Pendampingan Fitting Wardrobe, 1x Visit Venue, & 3x Meeting Koordinasi',
      'MUA & Attire by Ella Surya: Rias Pengantin Akad + Retouch Resepsi, Busana Pengantin, Rias & Busana Orang Tua/Besan',
      'Dekorasi by Serasa Sewarna: Pelaminan Maks 6 Meter Mix Flower, Lighting, Kursi Pelaminan, Welcome Sign, Janur/Penjor',
      'Fotografi by DM Photography: Unlimited Shoot, Max 200 Edited Files, Flashdisk, Fullday',
      'Master of Ceremony (MC) by Fidi untuk Akad & Resepsi',
      'FREE: Video Cinematic 2-5 Menit by Famous Picture (2 Videografer, Fullday)',
      'FREE: 5 Buku Panduan Wedding, 4 Pax Confetti, & 5 Doorprize Games'
    ],
    vendors: [
      {
        category: 'Wedding Organizer',
        vendorName: 'My Dream Organizer',
        items: [
          'Konsultasi konsep acara wedding (akad resepsi)',
          'Konsep wedding (tema creative & ide acara)',
          'Smart budgeting vendor & referensi vendor',
          'Membuat rundown wedding & wedding book',
          'Pendampingan prewedding (jika perlu)',
          '1x pendampingan fitting wardrobe',
          '1x visit venue',
          '3x meeting (client, keluarga, all vendor / final)',
          'Games, flow dokumentasi, & layout akad dan resepsi',
          'On The Day: 1 project manager + 7 crew support',
          'Preparation dimulai dari H-1',
          'Manage vendor installation (loading catering, sound, decoration)'
        ]
      },
      {
        category: 'MUA & Attire',
        vendorName: 'Ella Surya',
        items: [
          '1x makeup pengantin & retouch resepsi',
          'Sepasang busana akad pengantin',
          'Sepasang busana resepsi pengantin',
          'Melati akad nikah non adat',
          'Softlens normal',
          'Hijabdo / hairdo & fakenails',
          '1x makeup ibu dan besan',
          '2 pasang busana orang tua dan besan'
        ]
      },
      {
        category: 'Dekorasi',
        vendorName: 'Serasa Sewarna',
        items: [
          'Backdrop pelaminan maks 6 meter mix flower',
          'Aksesoris dekor & lighting standard',
          'Inisial nama kedua mempelai',
          'Set kursi pelaminan & dekorasi pintu masuk',
          'Kotak pundi 2 pax & penjor 1 pax',
          'FREE: Meja + kursi akad, welcome sign, & handbouquet fresh flower'
        ]
      },
      {
        category: 'Photo & Video',
        vendorName: 'DM Photography & Famous Picture',
        items: [
          'Photo unlimited shoot fullday',
          'Edited max 200 file resolusi tinggi',
          'File diserahkan dalam flashdisk',
          'FREE: Video cinematic 2-5 menit by Famous Picture (2 videografer, fullday)'
        ]
      },
      {
        category: 'Master of Ceremony',
        vendorName: 'MC Fidi',
        items: ['MC profesional untuk akad nikah dan resepsi']
      }
    ],
    freeBonuses: [
      'Video Cinematic 2-5 Menit by Famous Picture (2 Videografer, Fullday)',
      'Meja dan kursi akad nikah',
      'Welcome sign dekoratif',
      'Handbouquet fresh flower',
      '5 Buku panduan wedding',
      '4 Pax confetti perayaan',
      '5 Doorprize seru untuk sesi games'
    ]
  },
  {
    id: 'akad-aja',
    slug: 'paket-akad-aja',
    name: 'Akad Aja Package',
    category: 'Wedding',
    badge: 'Include Venue & Katering',
    price: 'Rp 25.000.000',
    priceRaw: 25000000,
    shortDesc: 'Paket prosesi akad nikah khidmat paripurna: SUDAH TERMASUK pilihan Venue (Masjid Roudlotul Muchlisin atau Masjid Bernady Land), Katering 100 pax by Sebuah Rasa, MUA FAFAHQ, dekorasi Serasa Sewarna, MC Fidi RRI, pengurusan KUA, dan Estoria Photo Video.',
    longDesc: 'Didesain bagi pasangan yang mendambakan prosesi akad nikah sakral, intim, dan tanpa repot. Paket ini sudah mencakup sewa masjid representatif ternama di Jember, hidangan jamuan katering untuk 100 tamu undangan, pengurusan administrasi KUA, serta dokumentasi artistik oleh Estoria.',
    image: '/images/siraman-ceremony.webp',
    venueIncluded: true,
    cateringIncluded: true,
    features: [
      'SUDAH TERMASUK VENUE: Masjid Roudlotul Muchlisin ATAU Masjid Bernady Land Jember',
      'SUDAH TERMASUK KATERING: Jamuan Katering untuk 100 Tamu by Sebuah Rasa',
      'Wedding Organizer by My Dream Wedding Organizer (Pendampingan Khidmat Penuh)',
      'MUA & Attire by FAFAHQ Makeup Artist (Rias Eksklusif & Busana Pengantin)',
      'Dekorasi Akad by Serasa Sewarna Decoration (Pelaminan & Meja Ijab Qabul Estetik)',
      'Master of Ceremony (MC) by FIDI RRI (Master of Ceremony Berpengalaman)',
      'Dokumentasi Foto & Video by Estoria (- Better Image Better Story -)',
      'FREE: Pengurusan Administrasi KUA',
      'FREE: 5 Buku Panduan Detail Pernikahan & 10 Pax Lepas Balon',
      'FREE: Handbouquet Mix Flower Segar'
    ],
    vendors: [
      {
        category: 'Pilihan Venue Masjid',
        vendorName: 'Masjid Roudlotul Muchlisin / Masjid Bernady Land',
        items: [
          'Izin dan sewa venue akad di Masjid Roudlotul Muchlisin atau Masjid Bernady Land Jember',
          'Kapasitas nyaman dan khidmat untuk keluarga besar'
        ]
      },
      {
        category: 'Katering Jamuan',
        vendorName: 'Sebuah Rasa Catering',
        items: [
          'Hidangan katering lezat siap santap untuk 100 porsi tamu',
          'Peralatan saji, meja buffet, dan staf pelayanan'
        ]
      },
      {
        category: 'MUA & Attire',
        vendorName: 'FAFAHQ Makeup Artist',
        items: [
          'Tata rias akad nikah pengantin wanita & pria',
          'Busana akad pengantin eksklusif',
          'Aksesoris, hijabdo / hairdo, dan melati ronce'
        ]
      },
      {
        category: 'Dekorasi Akad',
        vendorName: 'Serasa Sewarna Decoration',
        items: [
          'Dekorasi backdrop akad nikah tematik',
          'Meja & kursi ijab qabul berbalut kain mewah',
          'Handbouquet fresh flower'
        ]
      },
      {
        category: 'Master of Ceremony',
        vendorName: 'FIDI RRI (Master of Ceremony)',
        items: ['Pemandu prosesi akad nikah khidmat, sakral, dan tertib']
      },
      {
        category: 'Dokumentasi',
        vendorName: 'Estoria Photography & Video',
        items: ['Foto liputan akad nikah dan video highlight momen sakral penyerahan mahar']
      }
    ],
    freeBonuses: [
      'Gratis Pengurusan Berkas & Koordinasi KUA',
      'Katering 100 Tamu Undangan by Sebuah Rasa',
      '5 Buku panduan detail pernikahan',
      '10 Pax seremoni pelepasan balon ke udara',
      'Handbouquet mix flower pengantin'
    ]
  },
  {
    id: 'serayu',
    slug: 'paket-serayu',
    name: 'Serayu Package',
    category: 'Wedding',
    badge: 'Diskon Spesial',
    price: 'Rp 27.500.000',
    priceRaw: 27500000,
    originalPrice: 'Rp 31.700.000',
    shortDesc: 'Paket best-seller promo hemat! Didukung 1 PM + 9 kru WO My Dream, MUA Dinda Wijaya, dekorasi 6m Serasa Sewarna, MC Rian, live acoustic Starlight, foto & cinema video Vicolo, plus FREE Photobooth 3 jam dan 100 cup Beli Kopi Barista!',
    longDesc: 'Serayu Package adalah perpaduan sempurna antara kemegahan resepsi, kenyamanan koordinasi, dan bonus berlimpah. Anda mendapatkan tim WO dengan formasi 1 Project Manager + 9 kru on duty, tata rias busana lengkap dengan sepatu pengantin, dekorasi pelaminan 6 meter lengkap penjor, alunan musik live akustik, dokumentasi sinematik, serta fasilitas photobooth dan coffee booth untuk tamu.',
    image: '/images/ballroom-candid.webp',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Wedding Organizer My Dream: 1 Project Manager + 9 Kru Support on Duty (Persiapan H-1)',
      'MUA & Attire by Dinda Wijaya: Rias Pengantin + Retouch, Busana Akad & Resepsi, Sepasang Sepatu Akad & Sepatu Resepsi Wanita',
      'Dekorasi by Serasa Sewarna: Pelaminan 6m Mix Flowers, Gardening, Meja Akad, Welcome Sign, Kotak Uang 2, Penjor, & Free Dekor Pintu Masuk',
      'Photo & Video by Vicolo: Unlimited Photo, 30 Edited, Cetak 14RS + Frame, Video Cinema 2-3 Menit (1 Fotografer + 1 Videografer Fullday)',
      'Entertainment by Starlight: Live Acoustic (Gitar + Vocal)',
      'MC Akad & Resepsi by Rian',
      'FREE PHOTOBOOTH: Unlimited Photostrips Selama 3 Jam Penuh',
      'FREE BEVERAGE by Beli Kopi: 100 Pax Kopi Siap Saji dengan 1 Barista On-Site (Max 3 Varian Rasa)',
      'FREE: 10 Buku Panduan, 2 Buku Tamu, 25 Lepas Balon/2 Merpati, 4 Confetti, 5 Doorprize Games'
    ],
    vendors: [
      {
        category: 'Wedding Organizer',
        vendorName: 'My Dream Organizer',
        items: [
          'Konsultasi acara wedding resepsi & konsep creative',
          'Pendampingan visit vendor (test food, fitting busana)',
          'Pendampingan prewedding',
          '3x meeting client intensif',
          'Teks pamit nikah, teks ijab, & teks sambutan keluarga',
          'Layout wedding, games, flow dokumentasi, & VIP handling',
          'On The Day: 1 Project Manager + 9 Crew support on duty',
          'Preparation dimulai dari H-1 & loading kontrol vendor'
        ]
      },
      {
        category: 'MUA & Attire',
        vendorName: 'Dinda Wijaya',
        items: [
          'Makeup pengantin + retouch resepsi',
          '1 busana akad pengantin',
          '1 busana resepsi pengantin',
          'Include: Melati akad non adat & softlens normal',
          'Sepasang sepatu akad & sepatu resepsi pengantin wanita'
        ]
      },
      {
        category: 'Dekorasi Pelaminan',
        vendorName: 'Serasa Sewarna',
        items: [
          'Dekor pelaminan 6 meter mix flowers & gardening',
          'Set kursi pelaminan & set meja akad',
          'Standing kotak, welcome sign, & papan foto',
          'Kotak uang 2 unit & handbouquet fresh flower',
          'Penjor janur 1 unit',
          'FREE: Dekorasi pintu masuk'
        ]
      },
      {
        category: 'Photo & Video Cinema',
        vendorName: 'Vicolo Photography',
        items: [
          'Unlimited shoot foto & 30 file edited pilihan',
          'Cetak 14RS lengkap dengan frame',
          'File diserahkan via Google Drive & Flashdisk',
          '1 fotografer & 1 videografer fullday',
          'Video cinema teaser 2-3 menit'
        ]
      },
      {
        category: 'Master of Ceremony & Musik',
        vendorName: 'MC Rian & Starlight Acoustic',
        items: [
          'MC profesional untuk akad nikah dan resepsi',
          'Live music acoustic romantis (gitar akustik + vokal)'
        ]
      }
    ],
    freeBonuses: [
      'Photobooth: Unlimited Photostrips 3 Jam',
      'Beverage by Beli Kopi: 100 Pax Kopi Barista On-Site (Gula Aren, Matcha, Avocado, Chocolate, dll)',
      'Pelepasan 25 pcs Balon atau 2 ekor Merpati Putih',
      '10 Buku panduan wedding & 2 buku tamu eksklusif',
      'Dekorasi gerbang pintu masuk',
      '4 Pax confetti pesta',
      '5 Doorprize untuk sesi interactive games'
    ]
  },
  {
    id: 'romansa-rumahan',
    slug: 'paket-romansa-rumahan',
    name: 'Romansa Rumahan Package',
    category: 'Wedding',
    badge: 'Spesial Resepsi Rumahan',
    price: 'Rp 28.999.999',
    priceRaw: 28999999,
    shortDesc: 'Paket istimewa khusus perayaan pernikahan di kediaman/rumah: SUDAH TERMASUK Tenda Pernikahan Eksklusif by Aksara Wedding Jember, dekorasi Serasa Sewarna, MUA Robithoh Almaisy, DM Photography, MC Fidi RRI, plus video Famous Picture & photobooth 3 jam!',
    longDesc: 'Mengadakan pesta pernikahan di rumah pribadi kini terasa mewah dan teratur seperti di gedung. Romansa Rumahan Package menghadirkan vendor tenda dekorasi profesional Aksara Wedding Jember, dipadukan tata rias Robithoh Almaisy, dekorasi Serasa Sewarna, MC formal Fidi RRI, pengawalan WO My Dream, serta fasilitas photobooth dan video dokumentasi sinematik.',
    image: '/images/joglo-pendopo.webp',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Wedding Organizer by My Dream Wedding Organizer (Manajemen Alur Rumah & Jalan)',
      'SUDAH TERMASUK TENDA: Tenda Pernikahan by Aksara Wedding Jember',
      'MUA & Attire by Robithoh Almaisy Makeup Artist (Rias Pengantin Berkelas)',
      'Dekorasi Pelaminan by Serasa Sewarna Decoration (Disesuaikan Luas Kediaman)',
      'Photo by DM Photography (Best Results is Our Priority)',
      'Master of Ceremony by FIDI RRI (Pemandu Acara Santun & Khidmat)',
      'FREE: Video Cinematic by Famous Picture',
      'FREE PHOTOBOOTH: Free 3 Jam Unlimited Photobooth untuk Tamu'
    ],
    vendors: [
      {
        category: 'Tenda & Perlengkapan',
        vendorName: 'Aksara Wedding Jember',
        items: [
          'Instalasi tenda tratak plafon / dekoratif untuk area rumah',
          'Penataan tirai, penutup dinding, dan ventilasi kenyamanan tamu'
        ]
      },
      {
        category: 'Wedding Organizer',
        vendorName: 'My Dream Wedding Organizer',
        items: [
          'Perencanaan tata letak (lay out) panggung, katering, dan kursi tamu di rumah',
          'Manajemen alur keluar-masuk tamu dan koordinasi keamanan lingkungan',
          'Rundown acara akad dan resepsi rumah menit ke menit'
        ]
      },
      {
        category: 'MUA & Attire',
        vendorName: 'Robithoh Almaisy Makeup Artist',
        items: [
          'Rias wajah pengantin tahan lama & flawless',
          'Busana pengantin akad dan resepsi pilihan',
          'Aksesoris lengkap, melati, dan hijabdo / hairdo'
        ]
      },
      {
        category: 'Dekorasi',
        vendorName: 'Serasa Sewarna Decoration',
        items: [
          'Dekor pelaminan tematik menyesuaikan lebar ruang',
          'Mini garden fresh flower',
          'Karpet jalan dan standing flower'
        ]
      },
      {
        category: 'Photo & Video',
        vendorName: 'DM Photography & Famous Picture',
        items: [
          'Dokumentasi foto seluruh rangkaian acara',
          'FREE Video liputan & teaser by Famous Picture'
        ]
      },
      {
        category: 'Master of Ceremony',
        vendorName: 'FIDI RRI Master of Ceremony',
        items: ['MC profesional bersertifikat untuk memandu resepsi di rumah']
      }
    ],
    freeBonuses: [
      'Video Cinematic by Famous Picture',
      'Photobooth: Free 3 Jam Unlimited Photobooth',
      'Buku tamu dan panduan rundown keluarga'
    ]
  },
  {
    id: 'bermuara',
    slug: 'paket-bermuara',
    name: 'Bermuara Package',
    category: 'Wedding',
    badge: 'Flagship Terlengkap',
    price: 'Rp 32.999.999',
    priceRaw: 32999999,
    shortDesc: 'Paket pernikahan terlengkap kasta tertinggi! WO My Dream (1 PM + 7 kru), MUA Fafa By Team (rias pengantin, 2 ortu, & 6 petugas), dekorasi 6m Serasa Sewarna, Photo Video JF Frame, MC Triyoga, Live Music Starlight, Free 100 Souvenir Tumblr Kertas Lipat, Video Cinema Serayu, & Photobooth 3 jam!',
    longDesc: 'Bermuara Package adalah puncak perayaan cinta Anda. Seluruh elemen perhelatan dipersiapkan dengan standar tertinggi: rias busana tidak hanya untuk pengantin melainkan juga untuk kedua ibu dan 6 petugas keluarga, photobook album hardcover mewah, alunan live band lengkap, hadiah souvenir gelas tumblr kaca untuk 100 tamu, serta video highlight sinematik dan reels same day edit.',
    image: '/images/wedding-artifacts.webp',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Wedding Organizer My Dream: 1 Project Manager + 7 Kru Support (Persiapan H-1)',
      'MUA & Attire by Fafa By Team: Rias Pengantin, 2 Busana Pengantin, 2 Rias & Busana Ibu, 2 Busana Ayah, & 6 Rias Baju Petugas Standar',
      'Dekorasi by Serasa Sewarna: Pelaminan 6m Mix Flower, Kursi Ortu & Pengantin, Taman Fresh Flower, Karpet Jalan, Standing Foto 2, Lighting, Janur, Welcome Sign, Kotak Uang 2, Handbouquet',
      'Photo Video by JF Frame: Unlimited Shoot, 200 Editing, 2 Cetak 14RS + Frame 33x45cm, Sneak Peek, Photobook Hardcover & Folding Box, Flashdisk',
      'Master of Ceremony by Triyoga (MC Resepsi Maksimal 3 Jam)',
      'Entertainment by Starlight: Live Band (Vokal Wanita, Vokal Pria + Gitar, Keyboard/Elektone)',
      'FREE SOUVENIR: 100 Pax Gelas Tumblr Kaca by Kertas Lipat (Kemasan Standar + Hangtag)',
      'FREE VIDEO by Serayu: Highlight 4-5 Menit, Teaser 1 Menit, Reels Sameday Edit, File Flashdisk',
      'FREE PHOTOBOOTH: Unlimited Photobooth Selama 3 Jam Penuh',
      'FREE: Smart Budgeting, 5 Buku Panduan, 4 Pax Confetti, 5 Doorprize Games'
    ],
    vendors: [
      {
        category: 'Wedding Organizer',
        vendorName: 'My Dream Organizer',
        items: [
          'Konsultasi konsep acara wedding (akad resepsi)',
          'Konsep wedding (tema creative & ide acara)',
          'Membuat rundown wedding & wedding book',
          'Pendampingan prewedding (jika perlu)',
          '1x pendampingan fitting wardrobe & 1x visit venue',
          '3x meeting (client, keluarga, all vendor / final)',
          'Games interaktif, flow dokumentasi, & layout akad resepsi',
          'On The Day: 1 project manager + 7 crew support on duty',
          'Preparation dimulai dari H-1 & loading vendor management'
        ]
      },
      {
        category: 'MUA & Attire (Lengkap Keluarga)',
        vendorName: 'Fafa By Team',
        items: [
          '1x Makeup akad & retouch resepsi',
          '1 pasang busana pengantin akad & 1 pasang busana resepsi',
          '2 makeup & busana ibu pengantin standar',
          '2 busana ayah pengantin',
          '6 makeup & baju petugas standar',
          'Sepasang ronce melati, softlens normal, hijabdo / hairdo, henna & fakenails'
        ]
      },
      {
        category: 'Dekorasi Pelaminan Megah',
        vendorName: 'Serasa Sewarna',
        items: [
          'Dekor pelaminan 6 meter mix flower & taman pelaminan fresh flower',
          'Kursi pengantin dan orang tua',
          'Karpet jalan, bunga jalan minimalis, & janur 1 pax',
          'Standing foto 2 pax, lighting dekor, & kotak uang 2 pax',
          'FREE: Meja dan kursi akad, welcome sign, handbouquet, & survey lokasi Jember kota'
        ]
      },
      {
        category: 'Photo & Album Eksklusif',
        vendorName: 'JF Frame Photography',
        items: [
          '1 day full service (fotografer & assistant crew)',
          'Unlimited shoot & 200 edited files resolusi tinggi',
          '2 cetak foto 14RS + 2 frame elegan ukuran 33x45 cm',
          'Sneak peek express & softfile in flashdisk',
          'Photobook album hardcover eksklusif lengkap dengan folding box'
        ]
      },
      {
        category: 'Master of Ceremony',
        vendorName: 'MC Triyoga',
        items: ['MC resepsi pernikahan profesional (durasi maksimal 3 jam)']
      },
      {
        category: 'Live Music Entertainment',
        vendorName: 'Starlight Band',
        items: [
          'Vokal perempuan',
          'Vokal laki-laki + gitar akustik',
          'Keyboard / elektone dengan tata suara merdu'
        ]
      }
    ],
    freeBonuses: [
      'Souvenir by Kertas Lipat: 100 Pax Gelas Tumblr Kaca (Include Kemasan + Hangtag)',
      'Video by Serayu: 1 Day Service (Highlight 4-5 Menit, Teaser 1 Menit, Reels Sameday, File Flashdisk)',
      'Photobooth: Free 3 Hours Unlimited Photobooth',
      'Survey lokasi venue area Jember kota',
      'Meja dan kursi akad nikah',
      '5 Buku panduan wedding & 4 pax confetti',
      '5 Doorprize seru untuk sesi games'
    ]
  },
  {
    id: 'event-corporate',
    slug: 'paket-event-corporate-gathering',
    name: 'Corporate & Gala Event',
    category: 'Event',
    badge: 'Bisnis & Instansi',
    price: 'Mulai Rp 35.000.000',
    priceRaw: 35000000,
    shortDesc: 'Manajemen acara profesional untuk corporate gathering, gala dinner, product launch, seminar, wisuda, dan festival instansi di Jember.',
    longDesc: 'My Dream Organizer berpengalaman menangani berbagai event perusahaan, instansi BUMN/swasta, dan komunitas. Dari penyusunan konsep tema, tata panggung audiovisual mutakhir, registrasi tamu terstruktur, hingga eksekusi panggung yang memukau.',
    image: '/images/team-hero.webp',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Event Concept, Creative Theme, & Visual Branding Design',
      'Stage Production, LED Screen Backdrop, & Lighting System',
      'Sound System Concert Grade & Operator Audio Visual Profesional',
      'Master of Ceremony (MC) Bilingual & Rundown Director',
      'Kru Registrasi, Usher, Floor Management, & Liaison Officer (LO)',
      'Dokumentasi Foto Liputan & Aftermovie Video Highlight'
    ],
    tiers: [
      { name: 'Half-Day Seminar/Gathering', pax: '100 - 300 Peserta', price: 'Rp 35.000.000' },
      { name: 'Full-Day Corporate Gala', pax: '300 - 600 Peserta', price: 'Rp 55.000.000' },
      { name: 'Grand Exhibition & Festival', pax: 'Custom Scale', price: 'Custom Quote' }
    ]
  },
  {
    id: 'birthday-celebration',
    slug: 'paket-birthday-celebration',
    name: 'Sweet 17th & Birthday Party',
    category: 'Birthday',
    badge: 'Kreatif & Fun',
    price: 'Mulai Rp 22.500.000',
    priceRaw: 22500000,
    shortDesc: 'Pesta ulang tahun berkonsep kreatif, dekorasi fotogenik 3D, DJ/band live, photobooth 360, dan momen pesta yang tak terlupakan di Jember.',
    longDesc: 'Rayakan hari kelahiran istimewa Anda dengan konsep yang beda! My Dream Organizer menghadirkan dekorasi backdrop tematik 3D, photobooth kekinian, lighting pesta, interactive MC & games, serta sajian hiburan yang membuat seluruh tamu terpukau.',
    image: '/images/joglo-pendopo.webp',
    venueIncluded: false,
    cateringIncluded: false,
    features: [
      'Dekorasi Tematik 3D Backdrop, Balon Garland, & Neon Sign Kustom',
      'Photobooth 360 / Photobooth Cetak Kilat untuk Tamu',
      'MC Muda Interaktif, Party DJ / Live Acoustic Music',
      'Lighting Effect (Laser, Moving Beam, & Smoke Machine)',
      'Kru Event Organizer Pengatur Jalannya Acara & Doorprize',
      'Dokumentasi Foto Resolusi Tinggi & Reel Video Instagram'
    ],
    tiers: [
      { name: 'Silver Birthday Theme', pax: 'Hingga 100 Undangan', price: 'Rp 22.500.000' },
      { name: 'Gold Glamour Birthday', pax: '100 - 250 Undangan', price: 'Rp 34.000.000' }
    ]
  }
];
