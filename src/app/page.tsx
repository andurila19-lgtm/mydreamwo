'use client';

import React, { useState, useEffect } from 'react';
import { packagesData } from '@/data/packages';
import { galleryData } from '@/data/gallery';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/images/mantu-team-hero.webp',
      alt: 'My Dream Organizer Jember',
      badge: 'Wedding • Event • Birthday',
      title: 'Pasti Nikahmu BEDA!',
      subtitle: 'My Dream Organizer membantu mewujudkan wedding dan event yang berkesan, terkonsep matang, dan sesuai kebutuhan Anda.',
    },
    {
      image: '/images/ballroom-candid.webp',
      alt: 'Grand Wedding & Event Celebration',
      badge: 'Solusi Lengkap Satu Pintu',
      title: 'Momen Berkesan yang Tak Terlupakan',
      subtitle: 'Bukan sekadar mengatur acara, kami hadir menciptakan kenangan indah penuh ketenangan bagi Anda dan keluarga tercinta.',
    },
    {
      image: '/images/hero-portrait.webp',
      alt: 'Sentuhan Elegan & Personal',
      badge: 'Wedding Organizer Jember',
      title: 'Konsep Eksklusif & Penuh Makna',
      subtitle: 'Dari akad sakral hingga pesta spektakuler, setiap detail dieksekusi dengan dedikasi tinggi oleh tim profesional.',
    },
    {
      image: '/images/joglo-pendopo.webp',
      alt: 'Intimate Gathering & Special Moment',
      badge: 'Part of My Dream Group',
      title: 'Wujudkan Impian Tanpa Beban',
      subtitle: 'Koordinasi vendor terpadu, rundown presisi, dan pendampingan personal agar Anda menikmati setiap detik perayaan.',
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
      pillar: 'Birthday Event',
      badge: 'Sweet 17th & Party',
      icon: 'cake',
      image: '/images/mantu-team-hero.webp',
      desc: 'Perayaan ulang tahun spesial, Sweet Seventeen bertema glamor, milestone anniversary, hingga intimate party dengan dekorasi fotogenik dan MC interaktif.',
      ctaText: 'Rencanakan Birthday',
      ctaLink: 'https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%2C%20saya%20ingin%20konsultasi%20acara%20Birthday',
      isExternal: true,
    },
    {
      title: 'Digital',
      pillar: 'Undangan Digital Premium',
      badge: 'Digital Invitation',
      icon: 'mark_email_read',
      image: '/images/wedding-artifacts.webp',
      desc: 'Undangan digital eksklusif berdesain editorial haute-couture, live countdown, Google Maps, RSVP terintegrasi, galeri foto, dan alunan musik romantis.',
      ctaText: 'Explore Undangan Digital',
      ctaLink: '/undangan',
      isExternal: false,
    },
  ];

  const testimonials = [
    {
      name: 'Aditya & Clarissa',
      event: 'Wedding Reception • Aston Jember',
      quote: 'Tagline "Pasti Nikahmu BEDA!" benar-benar terbukti. Konsep wedding kami terasa sangat fresh, tamu-tamu memuji alur acara yang rapi dan tim My Dream yang sangat sigap sejak pagi.',
    },
    {
      name: 'dr. Amanda & Farhan',
      event: 'Akad & Intimate Wedding • Rembangan',
      quote: 'Sebagai sesama dokter dengan jadwal padat, kami sangat terbantu dengan keterbukaan dan kepraktisan tim My Dream Organizer. Semua vendor terkoordinasi sempurna tanpa bikin stres.',
    },
    {
      name: 'Ibu Ratna & Bpk. Hendra',
      event: 'Sweet 17th Kiara • Grand Hall Jember',
      quote: 'Pesta ulang tahun putri kami ke-17 terselenggara spektakuler! Lighting, backdrop foto, photobooth, dan games-nya seru banget. Anak muda dan keluarga sama-sama happy!',
    },
    {
      name: 'PT Mitra Jember Perkasa',
      event: 'Annual Gala Dinner & Awarding',
      quote: 'Manajemen acara sangat profesional, mulai dari panggung videotron, tata suara, sampai alur VIP. Komunikasi cepat dan solusi selalu tepat sasaran. Sukses selalu untuk My Dream Group.',
    },
  ];

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
            
            {/* Elegant Luxury Brand Line - Pure Editorial Typography */}
            <div className="space-y-1">
              <p className="font-label-md text-xs sm:text-sm tracking-[0.35em] uppercase text-gold-shimmer font-semibold drop-shadow-sm">
                MY DREAM ORGANIZER &bull; JEMBER
              </p>
              <div className="w-12 h-px bg-gold-shimmer/60 mx-auto"></div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.2] tracking-tight">
              {heroSlides[currentSlide].title}
            </h1>

            {/* Supporting Copy */}
            <p className="font-body text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* CTAs: WhatsApp (Primary), Portfolio (Secondary), & Explore Digital Invitation */}
            <div className="pt-2.5 sm:pt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 max-w-lg mx-auto">
              <a
                href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi%20wedding%20%26%20event"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 sm:py-3 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-wider uppercase transition-all rounded-full sm:rounded-sm font-bold shadow-md hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Konsultasi via WhatsApp
              </a>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                <a
                  href="/galeri"
                  className="inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-none px-4 py-2 sm:py-3 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm font-label-md text-[11px] sm:text-xs tracking-wider uppercase transition-all rounded-full sm:rounded-sm font-medium hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-sm sm:text-base">photo_library</span>
                  Portfolio
                </a>
                <a
                  href="/undangan"
                  className="inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-none px-4 py-2 sm:py-3 bg-black/40 hover:bg-black/60 text-gold-shimmer border border-gold-shimmer/40 backdrop-blur-sm font-label-md text-[11px] sm:text-xs tracking-wider uppercase transition-all rounded-full sm:rounded-sm font-medium hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-sm sm:text-base">mail</span>
                  Digital Invitation
                </a>
              </div>
            </div>

            {/* Brand Sub-Badge */}
            <p className="text-xs text-white/60 pt-2 tracking-wider">
              Part of <strong className="text-white/80">My Dream Group</strong> • Melayani Jember &amp; Sekitarnya
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
            My Dream Organizer adalah mitra tepercaya di bawah naungan <strong>My Dream Group</strong> yang berfokus memberikan solusi terpadu untuk Wedding, Corporate Event, dan Birthday Celebration di Jember, Jawa Timur. Kami memastikan setiap momen Anda terkonsep matang, santun, transparan, dan pastinya berkesan.
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
              4 Pilar Layanan My Dream
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant font-light">
              Solusi terkonsep untuk setiap skala perayaan istimewa Anda, mulai dari persiapan fisik hingga sentuhan digital premium.
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

      {/* FEATURED PACKAGES SECTION */}
      <section id="paket" className="py-12 sm:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-8 sm:mb-12">
            <div>
              <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
                Katalog Pilihan
              </span>
              <h2 className="font-display text-2xl sm:text-4xl text-primary font-semibold">
                Paket &amp; Penawaran Eksklusif
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
                className="border border-outline-variant/30 bg-white hover:bg-white rounded-sm shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gold-shimmer/70 group"
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

      {/* DEDICATED PREMIUM SECTION: UNDANGAN DIGITAL PREMIUM */}
      <section id="undangan-digital" className="py-16 sm:py-24 bg-gradient-to-br from-[#090e1a] via-[#0f172a] to-[#060a12] text-white border-y border-white/10 relative overflow-hidden">
        {/* Ambient subtle light circles */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold-shimmer/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Brand Copy & 11 Benefits */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold-shimmer/15 border border-gold-shimmer/40 rounded-full text-gold-shimmer text-xs font-semibold tracking-wider uppercase">
                  <span className="material-symbols-outlined text-sm">stars</span>
                  <span>PREMIUM DIGITAL SERVICE</span>
                </div>
                <p className="text-xs sm:text-sm text-gold-shimmer/90 italic font-light tracking-wide">
                  “Dibuat khusus untuk momen yang tidak terlupakan.”
                </p>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-[1.25] tracking-tight">
                Undangan Digital Premium untuk Hari Istimewa
              </h2>

              <p className="font-body text-base sm:text-lg text-white/85 font-light leading-relaxed">
                Bagikan momen bahagia Anda dengan undangan digital yang elegan, personal, dan mudah dibagikan kepada keluarga serta orang-orang terdekat.
              </p>

              <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                My Dream Organizer tidak hanya membantu mempersiapkan acara di hari-H, tetapi juga menyediakan undangan digital premium sebagai bagian dari ekosistem <strong>My Dream Digital Invitation</strong>. Pilihan tema dirancang khusus berstandar haute-couture modern, bukan template murahan.
              </p>

              {/* 11 Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  { icon: 'palette', text: 'Desain premium & elegan' },
                  { icon: 'badge', text: 'Custom nama dan detail pasangan' },
                  { icon: 'calendar_month', text: 'Informasi akad & resepsi' },
                  { icon: 'timer', text: 'Countdown menuju hari pernikahan' },
                  { icon: 'pin_drop', text: 'Google Maps lokasi acara' },
                  { icon: 'photo_library', text: 'Galeri foto pasangan' },
                  { icon: 'how_to_reg', text: 'RSVP / konfirmasi kehadiran' },
                  { icon: 'favorite', text: 'Love story / kisah pasangan' },
                  { icon: 'chat', text: 'Integrasi WhatsApp' },
                  { icon: 'music_note', text: 'Musik/background ambience' },
                  { icon: 'share', text: 'Mudah dibagikan melalui WhatsApp & media sosial' },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-white/90">
                    <span className="material-symbols-outlined text-gold-shimmer text-base shrink-0">
                      check_circle
                    </span>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <a
                  href="/undangan"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-wider uppercase rounded-full sm:rounded-sm font-bold shadow-md transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">visibility</span>
                  Lihat Contoh Undangan
                </a>
                <a
                  href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%2C%20saya%20tertarik%20dengan%20layanan%20Undangan%20Digital%20Premium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-label-md text-xs tracking-wider uppercase rounded-full sm:rounded-sm font-semibold transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Pesan Undangan Digital
                </a>
              </div>
            </div>

            {/* Right Column: Visual Device Mockup Previews */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Secondary Phone Mockup tilted behind (Minimalist Theme) */}
              <div className="hidden sm:block absolute -right-4 top-4 w-[240px] opacity-40 blur-[0.5px] rotate-6 scale-95 pointer-events-none">
                <div className="bg-[#111827] rounded-[36px] p-2.5 border-2 border-white/20 shadow-2xl">
                  <div className="bg-[#f9fafb] rounded-[28px] overflow-hidden p-3 text-center space-y-2">
                    <span className="text-[8px] uppercase tracking-widest text-gray-500 font-mono">EDITORIAL MINIMALIST</span>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black/10">
                      <img src="/images/ballroom-candid.webp" alt="Minimalist Theme" className="w-full h-full object-cover grayscale" />
                    </div>
                    <p className="font-display text-xs text-gray-900 font-bold">Farhan &amp; Amanda</p>
                  </div>
                </div>
              </div>

              {/* Primary Smartphone Mockup (Center) */}
              <div className="relative w-full max-w-[320px] sm:max-w-[340px] z-10">
                <div className="bg-[#0b101b] rounded-[46px] p-3 shadow-2xl border-4 border-[#243048] ring-1 ring-white/15">
                  {/* Dynamic Island Pill */}
                  <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-between px-2.5">
                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Phone Screen */}
                  <div className="bg-[#fdfbf7] rounded-[36px] overflow-hidden text-gray-900 p-4 space-y-3 shadow-inner">
                    
                    {/* Header Monogram */}
                    <div className="text-center space-y-0.5">
                      <div className="w-10 h-10 mx-auto rounded-full border border-amber-700/40 flex items-center justify-center bg-amber-50">
                        <span className="font-display text-amber-900 text-sm font-bold tracking-widest">A &amp; C</span>
                      </div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-amber-800 font-semibold pt-1">
                        THE WEDDING OF
                      </p>
                      <h4 className="font-display text-xl font-bold text-gray-900">
                        Aditya &amp; Clarissa
                      </h4>
                      <p className="text-[10px] text-gray-600">
                        Sabtu, 28 November 2026 • Jember
                      </p>
                    </div>

                    {/* Prewedding Photo */}
                    <div className="aspect-[16/11] rounded-xl overflow-hidden shadow-xs border border-amber-900/10 relative">
                      <img
                        src="/images/hero-portrait.webp"
                        alt="Preview Undangan Digital"
                        className="w-full h-full object-cover"
                      />
                      {/* Audio simulation badge */}
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] text-amber-300 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">music_note</span>
                        <span>Playing</span>
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

                    {/* Quick Interactive Button simulation */}
                    <a
                      href="/undangan"
                      className="block text-center py-2 bg-gray-900 hover:bg-black text-white text-[11px] font-semibold rounded-lg uppercase tracking-wider transition-colors shadow-xs"
                    >
                      Buka Undangan Lengkap →
                    </a>

                    {/* Bottom Indicator */}
                    <div className="w-20 h-1 bg-gray-300 rounded-full mx-auto" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PORTFOLIO & DOKUMENTASI SHOWCASE */}
      <section id="portfolio" className="py-12 sm:py-20 bg-ivory-surface border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-8 sm:mb-12">
            <div>
              <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
                Dokumentasi Nyata
              </span>
              <h2 className="font-display text-2xl sm:text-4xl text-primary font-semibold">
                Portfolio My Dream Organizer
              </h2>
            </div>
            <a
              href="/galeri"
              className="inline-flex items-center gap-1.5 text-xs font-label-md uppercase tracking-wider text-primary hover:text-gold-shimmer font-semibold"
            >
              Buka Galeri Lengkap <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {galleryData.slice(0, 8).map((item) => (
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
              Jelajahi Seluruh Dokumentasi
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / REALISTIC TESTIMONIALS */}
      <section className="py-12 sm:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
            <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block">
              Cerita Bahagia
            </span>
            <h2 className="font-display text-2xl sm:text-4xl text-primary font-semibold">
              Apa Kata Klien My Dream?
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

      {/* INSTAGRAM SECTION */}
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
            Diskusikan tanggal acara, konsep tematik, dan estimasi anggaran bersama wedding planner &amp; event consultant My Dream Organizer.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi%20wedding%20%26%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-widest uppercase transition-all rounded-sm font-bold shadow-lg"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Konsultasi via WhatsApp (0812-3377-9967)
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
