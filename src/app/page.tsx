'use client';

import React, { useState, useEffect } from 'react';
import { packagesData } from '@/data/packages';
import { galleryData } from '@/data/gallery';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeConcept, setActiveConcept] = useState<'elegant' | 'minimalist' | 'luxury'>('elegant');
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>('All');

  const heroSlides = [
    {
      image: '/images/team-hero.webp',
      alt: 'My Dream Organizer Jember - Pasti Nikahmu BEDA!',
      badge: 'Wedding • Event • Birthday',
      title: 'Pasti Nikahmu BEDA!',
      subtitle: 'My Dream Organizer Jember mewujudkan pernikahan dan momen istimewa yang berkesan, terkonsep matang, dan dipersiapkan dengan dedikasi penuh.',
    },
    {
      image: '/images/ballroom-candid.webp',
      alt: 'Grand Celebration My Dream Organizer',
      badge: 'Solusi Lengkap Satu Pintu',
      title: 'Momen Berkesan yang Tak Terlupakan',
      subtitle: 'Bukan sekadar mengatur acara, kami hadir menciptakan kenangan indah penuh ketenangan dan kehangatan bagi Anda serta keluarga tercinta.',
    },
    {
      image: '/images/hero-portrait.webp',
      alt: 'Sentuhan Elegan & Romantis',
      badge: 'Wedding Organizer Jember',
      title: 'Konsep Eksklusif & Penuh Makna',
      subtitle: 'Dari akad sakral, prosesi adat khidmat, hingga resepsi spektakuler, setiap detail dieksekusi presisi oleh tim profesional.',
    },
    {
      image: '/images/joglo-pendopo.webp',
      alt: 'Intimate Gathering & Special Moment',
      badge: 'Part of My Dream Group',
      title: 'Wujudkan Impian Tanpa Beban',
      subtitle: 'Koordinasi vendor terpadu, rundown presisi, dan pendampingan personal agar Anda menikmati setiap detik perayaan tanpa rasa cemas.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const serviceCategories = [
    {
      title: 'Wedding',
      pillar: 'Wedding Organizer',
      badge: 'Pernikahan Impian',
      icon: 'favorite',
      image: '/images/hero-portrait.webp',
      desc: 'Layanan menyeluruh untuk akad nikah, prosesi adat, intimate wedding, hingga resepsi grand ballroom dengan personal bride assistant dan master rundown presisi.',
      ctaText: 'Konsultasi Wedding',
      ctaLink: 'https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%2C%20saya%20ingin%20konsultasi%20paket%20Wedding',
      isExternal: true,
    },
    {
      title: 'Event',
      pillar: 'Event Organizer',
      badge: 'Corporate & Gathering',
      icon: 'business_center',
      image: '/images/ballroom-candid.webp',
      desc: 'Penyelenggaraan acara korporat, gala dinner, launching produk, seminar, wisuda, pameran, dan festival dengan stage production berstandar profesional.',
      ctaText: 'Konsultasi Event',
      ctaLink: 'https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%2C%20saya%20ingin%20konsultasi%20layanan%20Event',
      isExternal: true,
    },
    {
      title: 'Birthday',
      pillar: 'Birthday Celebration',
      badge: 'Sweet 17th & Party',
      icon: 'cake',
      image: '/images/team-hero.webp',
      desc: 'Perayaan ulang tahun spesial, Sweet Seventeen bertema glamor, milestone anniversary, hingga intimate party dengan dekorasi fotogenik dan MC interaktif.',
      ctaText: 'Rencanakan Birthday',
      ctaLink: 'https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%2C%20saya%20ingin%20konsultasi%20acara%20Birthday',
      isExternal: true,
    },
    {
      title: 'Digital',
      pillar: 'My Dream Digital Invitation',
      badge: 'Premium Invitation',
      icon: 'mark_email_read',
      image: '/images/wedding-artifacts.webp',
      desc: 'Undangan digital eksklusif berdesain editorial haute-couture, live countdown, Google Maps, RSVP WhatsApp terintegrasi, galeri foto, dan alunan musik romantis.',
      ctaText: 'Explore Undangan Digital',
      ctaLink: '/undangan',
      isExternal: false,
    },
  ];

  // 3 Digital Invitation Concepts for Showcase
  const digitalConcepts = {
    elegant: {
      id: 'elegant',
      name: 'Elegant Concept',
      tagline: 'Kemewahan Flora Klasik & Monogram Kaligrafi Emas',
      themeTitle: 'The Royal Botanical',
      badge: 'Paling Diminati',
      couple: 'Aditya & Clarissa',
      date: 'Sabtu, 28 November 2026',
      venue: 'Grand Ballroom Hotel Aston Jember',
      image: '/images/hero-portrait.webp',
      palette: ['#D4AF37', '#1E3A2F', '#FDFBF7'],
      paletteNames: ['Imperial Gold', 'Deep Emerald', 'Ivory Pearl'],
      desc: 'Perpaduan motif floral botani lembut berpadu tipografi kaligrafi emas dan monogram personal. Sangat digemari untuk resepsi hotel maupun pesta romantis semi-outdoor.',
      accentClass: 'border-amber-400/40 text-amber-300',
    },
    minimalist: {
      id: 'minimalist',
      name: 'Minimalist Concept',
      tagline: 'Estetika Editorial Vogue Kontemporer & Clean Space',
      themeTitle: 'Monochrome Romance',
      badge: 'Modern Chic',
      couple: 'Farhan & Amanda',
      date: 'Minggu, 14 Februari 2027',
      venue: 'Rembangan Hill Sky Lounge, Jember',
      image: '/images/ballroom-candid.webp',
      palette: ['#111827', '#E5E7EB', '#FFFFFF'],
      paletteNames: ['Obsidian Noir', 'Cool Platinum', 'Pure Studio White'],
      desc: 'Menonjolkan keanggunan ruang negatif, layout majalah fesyen modern, tipografi serif artistik, dan fotografi hitam putih atau sage yang abadi.',
      accentClass: 'border-slate-300/40 text-slate-200',
    },
    luxury: {
      id: 'luxury',
      name: 'Luxury Concept',
      tagline: 'Kemegahan Royal Velvet Bertabur Sentuhan Foil Emas',
      themeTitle: 'Gilded Heritage',
      badge: 'Ultra Luxury VIP',
      couple: 'Bagas & Nareswari',
      date: 'Sabtu, 12 Desember 2026',
      venue: 'Gedung Serbaguna New Sari Utama Jember',
      image: '/images/joglo-pendopo.webp',
      palette: ['#D4AF37', '#0A251D', '#111827'],
      paletteNames: ['Gilded Gold', 'Midnight Jade', 'Regal Velvet'],
      desc: 'Didesain bagi perayaan royal wedding nan agung. Menghadirkan ornamen foil emas kustom, sambutan personal tamu VIP, dan atmosfer malam megah bertabur bintang.',
      accentClass: 'border-yellow-400/50 text-yellow-300',
    },
  };

  const currentConceptData = digitalConcepts[activeConcept];

  const digitalBenefits = [
    { icon: 'palette', text: 'Desain premium & elegan (3 konsep tematik)' },
    { icon: 'badge', text: 'Custom nama dan detail pasangan' },
    { icon: 'calendar_month', text: 'Informasi akad & resepsi lengkap' },
    { icon: 'timer', text: 'Countdown menuju hari pernikahan' },
    { icon: 'pin_drop', text: 'Google Maps lokasi acara presisi' },
    { icon: 'photo_library', text: 'Galeri foto pasangan resolusi tinggi' },
    { icon: 'how_to_reg', text: 'RSVP / konfirmasi kehadiran tamu' },
    { icon: 'favorite', text: 'Love story / kisah perjalanan cinta' },
    { icon: 'chat', text: 'Integrasi WhatsApp konfirmasi cepat' },
    { icon: 'music_note', text: 'Musik / background ambience romantis' },
    { icon: 'share', text: 'Mudah dibagikan melalui WhatsApp & media sosial' },
  ];

  const trustPillars = [
    {
      icon: 'auto_awesome',
      title: 'Pasti Nikahmu BEDA!',
      desc: 'Kami menyusun konsep pernikahan tematik dan otentik yang mencerminkan karakter setiap pasangan, bukan template seragam yang membosankan.',
    },
    {
      icon: 'diversity_3',
      title: 'Tim Solid & Berpengalaman',
      desc: 'Didukung field crew berseragam resmi, terkoordinasi via radio HT, dan master rundown presisi yang mengawal sejak subuh hingga acara usai.',
    },
    {
      icon: 'payments',
      title: 'Transparansi Anggaran 100%',
      desc: 'Perencanaan budget yang jelas, fleksibel sesuai kebutuhan Anda, tanpa ada biaya tersembunyi (hidden costs) di kemudian hari.',
    },
    {
      icon: 'handshake',
      title: 'Jejaring Vendor Terbaik Jember',
      desc: 'Kemitraan erat dengan MUA terkemuka, fotografer cinematic, dekorator ternama, dan katering lezat berstandar higienis di wilayah Jember.',
    },
  ];

  const testimonials = [
    {
      name: 'Aditya & Clarissa',
      event: 'Wedding Reception • Aston Jember',
      quote: 'Tagline "Pasti Nikahmu BEDA!" benar-benar terbukti. Konsep wedding kami terasa sangat fresh, alur tamu tertata rapi, dan tim My Dream sangat sigap mendampingi kami sejak pagi.',
    },
    {
      name: 'dr. Amanda & Farhan',
      event: 'Akad & Intimate Wedding • Rembangan',
      quote: 'Sebagai sesama dokter dengan jadwal padat, kami sangat bersyukur memilih My Dream Organizer. Koordinasi vendor dan rundown pernikahan berjalan lancar tanpa membuat kami stres.',
    },
    {
      name: 'Ibu Ratna & Bpk. Hendra',
      event: 'Sweet 17th Kiara • Grand Hall Jember',
      quote: 'Pesta ulang tahun putri kami ke-17 terselenggara spektakuler! Lighting panggung, photo wall, dan MC sangat komunikatif. Tamu muda maupun keluarga besar merasa sangat terkesan.',
    },
    {
      name: 'PT Mitra Jember Perkasa',
      event: 'Annual Gala Dinner & Awarding Event',
      quote: 'Manajemen acara sangat profesional, mulai dari setting videotron LED, sound system, hingga penataan meja VIP. Komunikasi responsif dan eksekusi panggung tepat waktu.',
    },
  ];

  const filteredGallery = activeGalleryFilter === 'All'
    ? galleryData.slice(0, 8)
    : galleryData.filter((item) => item.category.toLowerCase().includes(activeGalleryFilter.toLowerCase())).slice(0, 8);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1d] pt-24 pb-14 sm:pt-28 sm:pb-20">
        {/* Background Crossfade Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image + index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}

        {/* Hero Overlay */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 text-center text-on-primary my-auto">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            
            {/* Elegant Luxury Brand Badge */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/40 border border-gold-shimmer/50 rounded-full backdrop-blur-sm shadow-md">
                <span className="material-symbols-outlined text-gold-shimmer text-sm">stars</span>
                <span className="font-label-md text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold-shimmer font-semibold">
                  JEMBER • WEDDING • EVENT • BIRTHDAY
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-white/70 tracking-widest uppercase">
                MY DREAM ORGANIZER &bull; PART OF MY DREAM GROUP
              </p>
            </div>

            {/* Main Headline: Tagline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.15] tracking-tight drop-shadow-md">
              {heroSlides[currentSlide].title}
            </h1>

            {/* Supporting Copy */}
            <p className="font-body text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* CTAs: WhatsApp Primary, Portfolio Secondary, and Digital Invitation */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
              <a
                href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi%20wedding%20%26%20event"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-wider uppercase transition-all rounded-sm font-bold shadow-lg hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Konsultasi
              </a>
              <a
                href="/galeri"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm font-label-md text-xs tracking-wider uppercase transition-all rounded-sm font-medium hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-base">photo_library</span>
                Portfolio
              </a>
              <a
                href="/undangan"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 bg-black/50 hover:bg-black/70 text-gold-shimmer border border-gold-shimmer/50 backdrop-blur-sm font-label-md text-xs tracking-wider uppercase transition-all rounded-sm font-medium hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-base">mark_email_read</span>
                Undangan Digital
              </a>
            </div>

            {/* Brand Sub-Badge */}
            <p className="text-xs text-white/60 pt-2 tracking-wider">
              Melayani Jember, Bondowoso, Lumajang, Banyuwangi &amp; Sekitarnya
            </p>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8 sm:mt-12">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all rounded-full ${
                  idx === currentSlide ? 'w-8 bg-gold-shimmer' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST HIGHLIGHTS BAR */}
      <section className="bg-primary text-on-primary py-5 border-b border-white/10">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-2 md:pt-0">
              <p className="font-display text-lg sm:text-xl font-bold text-gold-shimmer">“Pasti Nikahmu BEDA!”</p>
              <p className="text-[11px] text-white/70 uppercase tracking-wider font-label-md mt-0.5">Tagline &amp; Filosofi</p>
            </div>
            <div className="pt-2 md:pt-0">
              <p className="font-display text-lg sm:text-xl font-bold text-white">Wedding • Event • Birthday</p>
              <p className="text-[11px] text-white/70 uppercase tracking-wider font-label-md mt-0.5">3 Layanan Utama</p>
            </div>
            <div className="pt-2 md:pt-0">
              <p className="font-display text-lg sm:text-xl font-bold text-gold-shimmer">All-in-One Team</p>
              <p className="text-[11px] text-white/70 uppercase tracking-wider font-label-md mt-0.5">Satu Pintu Koordinasi</p>
            </div>
            <div className="pt-2 md:pt-0">
              <p className="font-display text-lg sm:text-xl font-bold text-white">Jember, Jawa Timur</p>
              <p className="text-[11px] text-white/70 uppercase tracking-wider font-label-md mt-0.5">Basis &amp; Jangkauan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE POSITIONING / ABOUT STATEMENT */}
      <section className="bg-white py-12 sm:py-16 border-b border-outline-variant/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="font-label-md text-secondary text-xs uppercase tracking-[0.25em] font-semibold block">
            Filosofi &amp; Dedikasi Kami
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-primary font-semibold leading-tight">
            “Bukan sekadar mengatur acara, tetapi membantu menciptakan momen yang berkesan.”
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto">
            My Dream Organizer adalah mitra tepercaya di bawah naungan <strong>My Dream Group</strong> yang berfokus memberikan solusi terpadu untuk Wedding, Corporate Event, Birthday Celebration, dan Digital Invitation di Jember, Jawa Timur. Kami memastikan setiap momen Anda terkonsep matang, santun, transparan, dan pastinya berkesan.
          </p>
          <div className="pt-2">
            <a
              href="/tentang"
              className="inline-flex items-center gap-1.5 text-xs font-label-md text-primary font-semibold tracking-wider uppercase border-b border-gold-shimmer pb-0.5 hover:text-gold-shimmer transition-colors"
            >
              Kenali Lebih Dekat Tentang Kami <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4 CORE SERVICE PILLARS (WEDDING, EVENT, BIRTHDAY, DIGITAL) */}
      <section id="layanan" className="py-12 sm:py-20 bg-ivory-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
            <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block">
              Ekosistem Layanan Terpadu
            </span>
            <h2 className="font-display text-2xl sm:text-4xl text-primary font-semibold">
              4 Pilar Layanan My Dream Organizer
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant font-light">
              Solusi terkonsep untuk setiap skala perayaan istimewa Anda, mulai dari persiapan fisik hari-H hingga sentuhan digital premium.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {serviceCategories.map((srv) => (
              <div
                key={srv.title}
                className="bg-white border border-outline-variant/30 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-gold-shimmer/70"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-black/5 relative">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm text-[10px] uppercase font-bold text-gold-shimmer tracking-wider border border-white/10">
                      {srv.badge}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 space-y-2.5">
                    <div>
                      <span className="text-[10px] font-label-md uppercase tracking-wider text-secondary font-semibold block">
                        {srv.pillar}
                      </span>
                      <div className="flex items-center gap-2 text-gold-shimmer mt-0.5">
                        <span className="material-symbols-outlined text-xl">{srv.icon}</span>
                        <h3 className="font-display text-xl text-primary font-semibold">
                          {srv.title}
                        </h3>
                      </div>
                    </div>
                    <p className="font-body text-xs text-on-surface-variant font-light leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <a
                    href={srv.ctaLink}
                    target={srv.isExternal ? '_blank' : undefined}
                    rel={srv.isExternal ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs tracking-wider uppercase rounded-sm font-semibold transition-colors"
                  >
                    <span>{srv.ctaText}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WEDDING PACKAGES SECTION */}
      <section id="paket" className="py-12 sm:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-8 sm:mb-12">
            <div>
              <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
                Katalog Paket Resmi Jember
              </span>
              <h2 className="font-display text-2xl sm:text-4xl text-primary font-semibold">
                Paket Pernikahan Pilihan
              </h2>
            </div>
            <a
              href="/paket"
              className="inline-flex items-center gap-1.5 text-xs font-label-md uppercase tracking-wider text-primary hover:text-gold-shimmer font-semibold"
            >
              Lihat Seluruh Paket ({packagesData.length}) <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {packagesData.filter((p) => p.category === 'Wedding').map((pkg) => (
              <article
                key={pkg.id}
                className="border border-outline-variant/30 bg-white rounded-sm shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gold-shimmer/70 group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-black/5 relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={pkg.image}
                      alt={pkg.name}
                      loading="lazy"
                    />
                    {pkg.badge && (
                      <span className="absolute top-3 right-3 bg-gold-shimmer text-primary text-[10px] px-2.5 py-1 uppercase tracking-wider font-bold rounded-sm shadow-md">
                        {pkg.badge}
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                      {pkg.venueIncluded && (
                        <span className="bg-black/75 text-emerald-300 text-[9px] px-2 py-0.5 rounded backdrop-blur-sm border border-emerald-400/30">
                          Venue Termasuk
                        </span>
                      )}
                      {pkg.cateringIncluded && (
                        <span className="bg-black/75 text-amber-300 text-[9px] px-2 py-0.5 rounded backdrop-blur-sm border border-amber-400/30">
                          Katering Termasuk
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-secondary font-semibold block">
                      Wedding Package
                    </span>
                    <h3 className="font-display text-lg sm:text-xl text-primary font-semibold leading-tight group-hover:text-secondary transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="font-body text-xs text-on-surface-variant line-clamp-2 font-light leading-relaxed">
                      {pkg.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase text-outline block font-medium">Investasi Paket</span>
                      <div className="flex items-baseline gap-1.5">
                        <p className="font-display text-base sm:text-lg text-primary font-bold">{pkg.price}</p>
                        {pkg.originalPrice && (
                          <p className="text-[11px] text-gray-400 line-through">{pkg.originalPrice}</p>
                        )}
                      </div>
                    </div>
                    <a
                      href={`/paket/${pkg.slug}`}
                      className="px-4 py-2 bg-primary text-on-primary text-xs uppercase font-label-md rounded-sm font-semibold tracking-wider hover:bg-primary-container transition-colors shadow-xs"
                    >
                      Detail
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM SHOWCASE SECTION: UNDANGAN DIGITAL DENGAN 3 KONSEP (ELEGANT, MINIMALIST, LUXURY) */}
      <section id="undangan-digital" className="py-16 sm:py-24 bg-gradient-to-br from-[#090e1a] via-[#0f172a] to-[#060a12] text-white border-y border-white/10 relative overflow-hidden">
        {/* Ambient subtle light circles */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold-shimmer/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold-shimmer/15 border border-gold-shimmer/40 rounded-full text-gold-shimmer text-xs font-semibold tracking-wider uppercase">
              <span className="material-symbols-outlined text-sm">stars</span>
              <span>LAYANAN PREMIUM &bull; MY DREAM DIGITAL INVITATION</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-white font-bold leading-tight">
              Undangan Digital Premium untuk Hari Istimewa
            </h2>
            <p className="font-body text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              Bagikan momen bahagia Anda dengan undangan digital yang elegan, personal, dan mudah dibagikan kepada keluarga serta orang-orang terdekat.
            </p>
            <p className="text-xs text-gold-shimmer/90 italic">
              “Dibuat khusus untuk momen yang tidak terlupakan.”
            </p>
          </div>

          {/* 3 KONSEP INTERACTIVE SHOWCASE TABS */}
          <div className="mb-10 sm:mb-12">
            <div className="text-center mb-4">
              <span className="font-label-md text-xs uppercase tracking-[0.25em] text-white/60 font-semibold">
                Pilih Konsep Desain:
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
              {[
                { id: 'elegant', label: '🌸 Konsep Elegant', subtitle: 'Floral & Monogram Emas' },
                { id: 'minimalist', label: '✨ Konsep Minimalist', subtitle: 'Editorial Vogue Chic' },
                { id: 'luxury', label: '👑 Konsep Luxury', subtitle: 'Royal Velvet & Gold Foil' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveConcept(c.id as any)}
                  className={`px-5 py-3 rounded-full text-xs sm:text-sm font-label-md uppercase tracking-wider transition-all duration-300 flex flex-col items-center gap-0.5 border ${
                    activeConcept === c.id
                      ? 'bg-gold-shimmer text-primary font-bold border-gold-shimmer shadow-lg scale-105'
                      : 'bg-white/5 text-white/80 border-white/20 hover:border-gold-shimmer/50 hover:bg-white/10'
                  }`}
                >
                  <span className="font-semibold">{c.label}</span>
                  <span className={`text-[10px] normal-case tracking-normal ${activeConcept === c.id ? 'text-primary/80 font-medium' : 'text-white/50'}`}>
                    {c.subtitle}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* SHOWCASE MAIN GRID: LEFT DETAIL CARD & RIGHT SMARTPHONE MOCKUP */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Concept Spotlight Details + 11 Benefits */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Concept Active Info Card */}
              <div className="p-6 bg-white/5 border border-white/15 rounded-xl backdrop-blur-sm space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-shimmer/20 text-gold-shimmer rounded-full text-xs font-semibold uppercase tracking-wider border border-gold-shimmer/40">
                    <span className="material-symbols-outlined text-sm">palette</span>
                    <span>{currentConceptData.name}</span>
                  </div>
                  <span className="text-[11px] text-white/60 font-mono">
                    Tema: {currentConceptData.themeTitle}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-white font-bold">
                    {currentConceptData.tagline}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-white/80 font-light leading-relaxed mt-2">
                    {currentConceptData.desc}
                  </p>
                </div>

                {/* Color Swatch Palette */}
                <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <span className="text-[11px] text-white/60 uppercase tracking-wider">Palet Warna Eksklusif:</span>
                  <div className="flex items-center gap-2">
                    {currentConceptData.palette.map((hex, i) => (
                      <div key={i} className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded border border-white/10 text-[10px] text-white/80">
                        <span className="w-3 h-3 rounded-full border border-white/40" style={{ backgroundColor: hex }} />
                        <span>{currentConceptData.paletteNames[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 11 Benefits Checklist */}
              <div className="space-y-2">
                <h4 className="font-label-md text-xs uppercase tracking-wider text-gold-shimmer font-semibold">
                  Fitur Unggulan Yang Disediakan:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {digitalBenefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-white/90">
                      <span className="material-symbols-outlined text-gold-shimmer text-base shrink-0">
                        check_circle
                      </span>
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <a
                  href="/undangan"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-wider uppercase rounded-full sm:rounded-sm font-bold shadow-md transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">visibility</span>
                  Lihat Katalog /undangan
                </a>
                <a
                  href={`https://wa.me/6281233779967?text=${encodeURIComponent('Halo My Dream Organizer Jember, saya tertarik dengan layanan Undangan Digital Premium konsep: ' + currentConceptData.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-label-md text-xs tracking-wider uppercase rounded-full sm:rounded-sm font-semibold transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Pesan Konsep Ini via WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Dynamic Smartphone Mockup Updating based on Active Concept */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              <div className="relative w-full max-w-[320px] sm:max-w-[340px] z-10">
                <div className="bg-[#0b101b] rounded-[46px] p-3 shadow-2xl border-4 border-[#243048] ring-1 ring-white/15">
                  {/* Dynamic Island Pill */}
                  <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-between px-2.5">
                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Phone Screen */}
                  <div className="bg-[#fdfbf7] rounded-[36px] overflow-hidden text-gray-900 p-4 space-y-3 shadow-inner transition-all duration-300">
                    
                    {/* Header Monogram */}
                    <div className="text-center space-y-0.5">
                      <div className="w-10 h-10 mx-auto rounded-full border border-amber-700/40 flex items-center justify-center bg-amber-50">
                        <span className="font-display text-amber-900 text-sm font-bold tracking-widest">
                          {currentConceptData.couple.split(' & ').map(n => n[0]).join(' & ')}
                        </span>
                      </div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-amber-800 font-semibold pt-1">
                        THE WEDDING OF &bull; {currentConceptData.name.toUpperCase()}
                      </p>
                      <h4 className="font-display text-xl font-bold text-gray-900">
                        {currentConceptData.couple}
                      </h4>
                      <p className="text-[10px] text-gray-600">
                        {currentConceptData.date} &bull; Jember
                      </p>
                    </div>

                    {/* Prewedding Photo */}
                    <div className="aspect-[16/11] rounded-xl overflow-hidden shadow-xs border border-amber-900/10 relative">
                      <img
                        src={currentConceptData.image}
                        alt={`Preview ${currentConceptData.name}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Audio simulation badge */}
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] text-amber-300 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">music_note</span>
                        <span>Sound: Canon in D</span>
                      </div>
                    </div>

                    {/* Countdown Banner */}
                    <div className="bg-amber-50 border border-amber-200/70 rounded-lg p-2 text-center">
                      <div className="grid grid-cols-4 gap-1 text-[9px] text-gray-700">
                        <div className="bg-white py-0.5 rounded"><span className="font-bold text-gray-900 block text-xs">48</span>Hari</div>
                        <div className="bg-white py-0.5 rounded"><span className="font-bold text-gray-900 block text-xs">14</span>Jam</div>
                        <div className="bg-white py-0.5 rounded"><span className="font-bold text-gray-900 block text-xs">32</span>Menit</div>
                        <div className="bg-white py-0.5 rounded"><span className="font-bold text-amber-700 block text-xs">18</span>Detik</div>
                      </div>
                    </div>

                    {/* Venue & Location simulation */}
                    <div className="bg-white border border-gray-200 rounded-lg p-2 text-left flex items-start gap-2">
                      <span className="material-symbols-outlined text-amber-600 text-base shrink-0 mt-0.5">location_on</span>
                      <div className="text-[10px] leading-tight">
                        <p className="font-semibold text-gray-900">{currentConceptData.venue}</p>
                        <p className="text-gray-500 text-[9px]">Google Maps Ready &bull; Petunjuk Rute</p>
                      </div>
                    </div>

                    {/* Quick Button to /undangan */}
                    <a
                      href="/undangan"
                      className="block text-center py-2 bg-gray-900 hover:bg-black text-white text-[11px] font-semibold rounded-lg uppercase tracking-wider transition-colors shadow-xs"
                    >
                      Buka Katalog 3 Konsep di /undangan →
                    </a>

                    {/* Bottom Indicator */}
                    <div className="w-20 h-1 bg-gray-300 rounded-full mx-auto" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* 3 CONCEPTS COMPARISON TILES */}
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {Object.values(digitalConcepts).map((concept) => (
              <div
                key={concept.id}
                onClick={() => setActiveConcept(concept.id as any)}
                className={`p-5 rounded-lg border transition-all cursor-pointer ${
                  activeConcept === concept.id
                    ? 'bg-white/10 border-gold-shimmer shadow-lg'
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-base font-bold text-white">{concept.name}</span>
                  <span className="text-[10px] text-gold-shimmer uppercase tracking-wider font-semibold bg-black/40 px-2 py-0.5 rounded">
                    {concept.badge}
                  </span>
                </div>
                <p className="text-xs text-white/70 font-light line-clamp-2 mb-3">
                  {concept.desc}
                </p>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-white/50">{concept.themeTitle}</span>
                  <span className="text-gold-shimmer font-semibold underline">Pilih Konsep &rarr;</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PORTFOLIO & DOKUMENTASI SHOWCASE */}
      <section id="portfolio" className="py-12 sm:py-20 bg-ivory-surface border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-8 sm:mb-10">
            <div>
              <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
                Dokumentasi Nyata Jember
              </span>
              <h2 className="font-display text-2xl sm:text-4xl text-primary font-semibold">
                Portfolio My Dream Organizer
              </h2>
            </div>
            
            {/* Gallery Category Quick Filters */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['All', 'Wedding', 'Event', 'Birthday'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveGalleryFilter(filter)}
                  className={`px-3 py-1 rounded-full text-xs font-label-md uppercase tracking-wider transition-all ${
                    activeGalleryFilter === filter
                      ? 'bg-primary text-white font-semibold'
                      : 'bg-white border border-outline-variant/40 text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {filteredGallery.map((item) => (
              <a
                key={item.id}
                href="/galeri"
                className="group relative block aspect-square overflow-hidden rounded-sm bg-surface-container border border-outline-variant/30 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 sm:p-4 text-white">
                  <span className="text-[10px] text-gold-shimmer uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                  <h4 className="font-display text-xs sm:text-sm font-semibold leading-tight mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-white/70 mt-0.5">
                    {item.client}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/galeri"
              className="inline-flex items-center justify-center min-h-[44px] px-8 bg-white border border-outline-variant/60 hover:border-gold-shimmer text-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold transition-colors"
            >
              Jelajahi Seluruh Dokumentasi Foto &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* TRUST PILLARS / WHY CHOOSE MY DREAM ORGANIZER */}
      <section className="py-14 sm:py-20 bg-surface border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
            <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block">
              Keunggulan Utama
            </span>
            <h2 className="font-display text-2xl sm:text-4xl text-primary font-semibold">
              Mengapa Memilih My Dream Organizer?
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant font-light">
              Kami menyatukan kreativitas, etos kerja profesional, dan dedikasi penuh untuk menghadirkan ketenangan bagi Anda dan keluarga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((tp, idx) => (
              <div
                key={idx}
                className="bg-white border border-outline-variant/30 p-6 rounded-sm shadow-xs hover:shadow-md transition-all space-y-3 hover:border-gold-shimmer/70"
              >
                <div className="w-11 h-11 rounded-sm bg-primary/5 flex items-center justify-center border border-gold-shimmer/30 text-gold-shimmer">
                  <span className="material-symbols-outlined text-2xl">{tp.icon}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-primary">
                  {tp.title}
                </h3>
                <p className="font-body text-xs text-on-surface-variant font-light leading-relaxed">
                  {tp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / REALISTIC TESTIMONIALS */}
      <section className="py-12 sm:py-20 bg-ivory-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
            <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block">
              Cerita Bahagia Klien
            </span>
            <h2 className="font-display text-2xl sm:text-4xl text-primary font-semibold">
              Apa Kata Mereka Tentang My Dream?
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant font-light">
              Kepercayaan Anda adalah amanah kehormatan yang kami jaga dengan sepenuh hati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-outline-variant/30 p-6 rounded-sm shadow-sm flex flex-col justify-between hover:border-gold-shimmer/70 transition-colors"
              >
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-gold-shimmer text-2xl">format_quote</span>
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant italic font-light leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-outline-variant/20">
                  <h4 className="font-display text-sm font-semibold text-primary">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-on-surface-variant/70">
                    {t.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM BANNER (@mydreamorganizer) */}
      <section className="py-12 sm:py-16 bg-[#0f172a] text-white text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-gold-shimmer text-xs">
            <span className="material-symbols-outlined text-base">photo_camera</span>
            <span>Instagram Resmi</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold">
            @mydreamorganizer
          </h2>
          <p className="font-body text-xs sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Dapatkan inspirasi dekorasi terkini, behind-the-scenes event, video highlight wedding, dan update penawaran terbaru setiap hari di Instagram kami.
          </p>
          <div className="pt-2">
            <a
              href="https://instagram.com/mydreamorganizer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-[46px] px-8 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-label-md text-xs tracking-widest uppercase rounded-sm font-bold shadow-md transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-base">photo_camera</span>
              Follow Instagram Kami
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CONVERSION BANNER (WHATSAPP CTA) */}
      <section className="bg-primary text-on-primary py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6 relative z-10">
          <span className="font-label-md text-gold-shimmer text-xs uppercase tracking-[0.25em] font-semibold block">
            Konsultasi Gratis Tanpa Komitmen
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-white font-semibold leading-tight">
            Siap Mewujudkan Acara Impian Anda?
          </h2>
          <p className="font-body text-xs sm:text-base text-white/80 font-light leading-relaxed max-w-lg mx-auto">
            Diskusikan tanggal acara, konsep tematik, dan estimasi anggaran bersama wedding planner &amp; event consultant My Dream Organizer Jember.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi%20wedding%20%26%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-widest uppercase transition-all rounded-sm font-bold shadow-lg"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Konsultasi Sekarang
            </a>
            <a
              href="/paket"
              className="inline-flex items-center justify-center min-h-[48px] px-6 border border-white/30 hover:bg-white/10 text-white font-label-md text-xs tracking-widest uppercase transition-colors rounded-sm font-semibold"
            >
              Lihat Pilihan Paket
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
