'use client';

import React, { useState, useEffect } from 'react';

interface TemplateItem {
  id: string;
  name: string;
  category: 'Elegant' | 'Minimalist' | 'Luxury';
  tagline: string;
  price: string;
  normalPrice: string;
  badge?: string;
  image: string;
  colors: string[];
  description: string;
  couple: string;
  date: string;
  venue: string;
}

export default function UndanganClient() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Elegant' | 'Minimalist' | 'Luxury'>('All');
  const [activeTemplate, setActiveTemplate] = useState<string>('royal-botanical');
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const [rsvpStatus, setRsvpStatus] = useState<'idle' | 'submitted'>('idle');
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpAttend, setRsvpAttend] = useState('hadir');
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Countdown demo state
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 14,
    minutes: 32,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const concept = params.get('concept');
      if (concept === 'Elegant' || concept === 'Minimalist' || concept === 'Luxury') {
        setSelectedCategory(concept);
        const matched = templates.find((t) => t.category === concept);
        if (matched) setActiveTemplate(matched.id);
      }
    }
  }, []);

  const templates: TemplateItem[] = [
    {
      id: 'royal-botanical',
      name: 'The Royal Botanical',
      category: 'Elegant',
      tagline: 'Kemewahan Flora Klasik Nan Romantis',
      price: 'Rp 299.000',
      normalPrice: 'Rp 450.000',
      badge: 'Paling Diminati',
      image: '/images/hero-portrait.webp',
      colors: ['#D4AF37', '#1E3A2F', '#FDFBF7'],
      description: 'Perpaduan aksen botanical floral lembut berpadu tipografi kaligrafi elegan dan monogram emas. Sangat digemari untuk pernikahan indoor hotel maupun semi-outdoor.',
      couple: 'Aditya & Clarissa',
      date: 'Sabtu, 28 November 2026',
      venue: 'Grand Ballroom Hotel Aston Jember',
    },
    {
      id: 'monochrome-romance',
      name: 'Monochrome Romance',
      category: 'Minimalist',
      tagline: 'Estetika Editorial Vogue Kontemporer',
      price: 'Rp 249.000',
      normalPrice: 'Rp 399.000',
      badge: 'Modern Chic',
      image: '/images/ballroom-candid.webp',
      colors: ['#111827', '#E5E7EB', '#FFFFFF'],
      description: 'Menonjolkan keanggunan ruang negatif, layout majalah fesyen premium, serta fotografi hitam putih yang tak lekang oleh waktu.',
      couple: 'Farhan & Amanda',
      date: 'Minggu, 14 Februari 2027',
      venue: 'Rembangan Hill Sky Lounge, Jember',
    },
    {
      id: 'gilded-heritage',
      name: 'Gilded Heritage',
      category: 'Luxury',
      tagline: 'Kemegahan Tradisi Bertabur Sentuhan Emas',
      price: 'Rp 399.000',
      normalPrice: 'Rp 599.000',
      badge: 'Ultra Luxury',
      image: '/images/joglo-pendopo.webp',
      colors: ['#D4AF37', '#0A251D', '#111827'],
      description: 'Didesain bagi perayaan royal wedding nan agung. Menghadirkan ornamen foil emas kustom, sambutan personal tamu VIP, dan transisi cinematic.',
      couple: 'Bagas & Nareswari',
      date: 'Sabtu, 12 Desember 2026',
      venue: 'Gedung Serbaguna New Sari Utama Jember',
    },
    {
      id: 'sunkissed-terracotta',
      name: 'Sunkissed Terracotta',
      category: 'Elegant',
      tagline: 'Kehangatan Romantis Nuansa Sunset',
      price: 'Rp 279.000',
      normalPrice: 'Rp 420.000',
      image: '/images/siraman-ceremony.webp',
      colors: ['#C86D51', '#E8C3B9', '#FAF6F0'],
      description: 'Nuansa warna earthy terracotta berpadu blush dan pampas grass. Pilihan tepat untuk konsep intimate garden wedding yang hangat dan personal.',
      couple: 'Kevin & Michelle',
      date: 'Sabtu, 10 Oktober 2026',
      venue: 'Dira Park Grand Hall Jember',
    },
    {
      id: 'midnight-velvet',
      name: 'Midnight Velvet',
      category: 'Luxury',
      tagline: 'Pesona Glamor Gala Night Starry Sky',
      price: 'Rp 399.000',
      normalPrice: 'Rp 599.000',
      badge: 'Eksklusif VIP',
      image: '/images/wedding-artifacts.webp',
      colors: ['#0B132B', '#D4AF37', '#1C2541'],
      description: 'Dramatis dan memukau dengan latar dark velvet beraksen taburan bintang emas. Cocok untuk resepsi malam bertabur tata cahaya megah.',
      couple: 'Daniel & Jessica',
      date: 'Minggu, 20 Desember 2026',
      venue: 'Luminor Hotel Ballroom Jember',
    },
    {
      id: 'zenith-serenity',
      name: 'Zenith Serenity',
      category: 'Minimalist',
      tagline: 'Kesederhanaan Murni Nan Syahdu',
      price: 'Rp 249.000',
      normalPrice: 'Rp 399.000',
      image: '/images/team-hero.webp',
      colors: ['#3A5A40', '#A3B18A', '#DAD7CD'],
      description: 'Sentuhan sage green yang tenang dengan tata letak minimalis terstruktur. Sangat cocok untuk akad nikah khidmat dan intimate blessing.',
      couple: 'Reza & Nadya',
      date: 'Jumat, 18 September 2026',
      venue: 'Masjid Jami’ Al-Baitul Amien & Private Hall',
    },
  ];

  const filteredTemplates = selectedCategory === 'All'
    ? templates
    : templates.filter((t) => t.category === selectedCategory);

  const currentTemplate = templates.find((t) => t.id === activeTemplate) || templates[0];

  const benefits = [
    {
      icon: 'palette',
      title: 'Desain Premium & Elegan',
      desc: 'Tipografi haute-couture, komposisi visual berkelas, dan tata letak modern yang dirancang khusus oleh Senior Designer.',
    },
    {
      icon: 'badge',
      title: 'Custom Nama & Detail Pasangan',
      desc: 'Setiap link undangan dapat memuat nama tamu personal secara otomatis (contoh: Kepada Yth. Bpk. Fajar & Keluarga).',
    },
    {
      icon: 'calendar_month',
      title: 'Informasi Akad & Resepsi Lengkap',
      desc: 'Rincian waktu, protokol kehadiran, jadwal sesi, serta panduan dresscode yang tertata rapi dan mudah dibaca.',
    },
    {
      icon: 'timer',
      title: 'Live Countdown Menuju Hari-H',
      desc: 'Hitung mundur presisi menit ke menit menuju momen sakral pengikatan janji suci kedua mempelai.',
    },
    {
      icon: 'pin_drop',
      title: 'Integrasi Google Maps Presisi',
      desc: 'Satu klik tombol langsung membuka navigasi penunjuk arah Google Maps akurat ke lokasi gedung perayaan di Jember.',
    },
    {
      icon: 'photo_library',
      title: 'Galeri Foto Editorial Prewedding',
      desc: 'Tampilkan kolase momen terindah Anda dalam galeri lightbox resolusi tinggi yang responsif dan cepat dibuka.',
    },
    {
      icon: 'how_to_reg',
      title: 'RSVP & Konfirmasi Kehadiran',
      desc: 'Formulir konfirmasi kehadiran tamu beserta jumlah pendamping yang langsung terdata rapi untuk estimasi katering.',
    },
    {
      icon: 'favorite',
      title: 'Love Story Perjalanan Pasangan',
      desc: 'Bagikan narasi manis awal pertemuan, masa pacaran, hingga keputusan menuju pelaminan yang menyentuh hati tamu.',
    },
    {
      icon: 'chat',
      title: 'Integrasi WhatsApp & Buku Tamu',
      desc: 'Tamu undangan dapat menuliskan untaian doa dan ucapan selamat yang terhubung langsung ke WhatsApp Anda.',
    },
    {
      icon: 'music_note',
      title: 'Background Ambience Musik Pilihan',
      desc: 'Diringi alunan lagu romantis favorit pasangan dengan tombol kontrol audio play/pause yang elegan dan tidak berisik.',
    },
    {
      icon: 'share',
      title: 'Mudah Disebar via WhatsApp & Medsos',
      desc: 'Dilengkapi thumbnail preview WhatsApp beresolusi tajam sehingga tautan undangan Anda terlihat sangat prestisius.',
    },
    {
      icon: 'verified',
      title: 'Ekosistem Resmi My Dream Organizer',
      desc: 'Terkoneksi langsung dengan tim rundown dan registrasi lapangan My Dream Organizer untuk sinkronisasi hari-H.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Pilih Tema & Desain',
      desc: 'Pilih dari katalog desain Elegant, Minimalist, atau Luxury yang paling selaras dengan konsep pesta pernikahan Anda.',
    },
    {
      number: '02',
      title: 'Kirim Data Acara & Foto',
      desc: 'Isi formulir data nama mempelai, info akad & resepsi, foto prewedding terbaik, serta pilihan lagu pengiring.',
    },
    {
      number: '03',
      title: 'Proses Desain & Preview',
      desc: 'Tim digital My Dream memproses undangan Anda dalam 1-2 hari kerja. Anda mendapatkan tautan preview untuk revisi jika ada.',
    },
    {
      number: '04',
      title: 'Undangan Siap Disebar!',
      desc: 'Link resmi aktif dan siap dikirimkan kepada seluruh sanak keluarga, sahabat, dan relasi kehormatan.',
    },
  ];

  const faqs = [
    {
      q: 'Berapa lama proses pembuatan undangan digital?',
      a: 'Proses pengerjaan normal membutuhkan waktu 1 hingga 2 hari kerja setelah seluruh data acara dan foto prewedding kami terima. Jika butuh layanan ekspres kilat (same day), tim kami siap membantu.',
    },
    {
      q: 'Apakah bisa mencantumkan nama tamu yang berbeda untuk setiap undangan?',
      a: 'Tentu saja! Sistem kami sudah dilengkapi fitur generator nama tamu otomatis tanpa batas. Anda cukup memasukkan nama tamu atau daftar nama, dan link personal akan langsung dibuat.',
    },
    {
      q: 'Apakah lagu latar belakang (background music) bisa dipilih sendiri?',
      a: 'Bisa. Anda bebas memilih lagu favorit Anda dan pasangan, baik lagu pop Indonesia, barat, instrumental piano, maupun nasyid rohani.',
    },
    {
      q: 'Berapa kali kesempatan revisi jika ada perubahan jadwal atau teks?',
      a: 'Kami memberikan revisi hingga Anda puas sebelum tautan resmi disebarluaskan, mencakup koreksi penulisan gelar nama keluarga, jam acara, hingga penggantian foto.',
    },
    {
      q: 'Berapa lama masa aktif link undangan digital?',
      a: 'Link undangan digital My Dream aktif selama minimal 12 bulan (1 tahun penuh) sejak tanggal acara, sehingga dokumentasi ucapan dan foto Anda tetap tersimpan abadi sebagai kenang-kenangan.',
    },
    {
      q: 'Apakah ada harga spesial jika digabung dengan paket Wedding Organizer My Dream?',
      a: 'Ya! Untuk pasangan yang mengambil paket Wedding Organizer My Dream (seperti Paket Mutiara All-In atau Paket Zamrud), layanan Undangan Digital Premium sudah termasuk secara gratis (complimentary VIP)!',
    },
  ];

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;
    setRsvpStatus('submitted');
  };

  const getWaOrderLink = (templateName: string) => {
    const text = encodeURIComponent(
      `Halo My Dream Organizer Jember, saya tertarik memesan Undangan Digital Premium dengan tema "${templateName}". Mohon info alur pemesanannya.`
    );
    return `https://wa.me/6281233779967?text=${text}`;
  };

  return (
    <main className="bg-surface text-on-surface selection:bg-gold-shimmer selection:text-primary">
      {/* UNIFIED COMPACT RESPONSIVE HERO SECTION */}
      <section className="pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 bg-gradient-to-b from-[#0b1220] via-[#0d1627] to-[#070b14] text-white relative overflow-hidden border-b border-white/10">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-shimmer/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-2 sm:mb-3">
            <ol className="flex items-center gap-1.5 text-[11px] sm:text-xs font-label-md uppercase tracking-wider text-white/60">
              <li><a href="/" className="hover:text-gold-shimmer transition-colors">Beranda</a></li>
              <li className="text-white/30">/</li>
              <li className="text-gold-shimmer font-semibold">Digital Invitation</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Positioning & Highlights */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-shimmer/15 border border-gold-shimmer/40 rounded-full text-gold-shimmer text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">
                  <span className="material-symbols-outlined text-xs sm:text-sm">stars</span>
                  PREMIUM DIGITAL SERVICE
                </span>
                <span className="text-[11px] text-white/60 font-light">
                  Mulai Rp 249.000 • Free Klien WO All-In
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-[1.24] tracking-tight">
                Undangan Digital Premium untuk Hari Istimewa
              </h1>

              <p className="font-body text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed max-w-xl">
                Bagikan momen bahagia Anda dengan undangan digital yang elegan, personal, dan mudah dibagikan kepada keluarga serta orang-orang terdekat.
              </p>

              <p className="text-xs sm:text-sm text-gold-shimmer/90 italic font-light tracking-wide">
                “Dibuat khusus untuk momen yang tidak terlupakan.”
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                {[
                  { icon: 'touch_app', text: 'Buka Undangan 3D' },
                  { icon: 'music_note', text: 'Musik Romantis' },
                  { icon: 'pin_drop', text: 'Google Maps Live' },
                  { icon: 'how_to_reg', text: 'RSVP Terdata' },
                  { icon: 'timer', text: 'Live Countdown' },
                  { icon: 'speed', text: 'Loading Cepat' },
                ].map((f, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-sm flex items-center gap-2 text-white/90">
                    <span className="material-symbols-outlined text-gold-shimmer text-base shrink-0">{f.icon}</span>
                    <span className="text-[11px] sm:text-xs font-medium">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#katalog-desain"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-widest uppercase rounded-sm font-bold shadow-md transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">visibility</span>
                  Lihat Contoh Undangan
                </a>
                <a
                  href={getWaOrderLink('Layanan Konsultasi Undangan Digital')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-label-md text-xs tracking-widest uppercase rounded-sm font-semibold transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Pesan Undangan Digital
                </a>
              </div>
            </div>

            {/* Right Column: Realistic Interactive Smartphone Mockup */}
            <div className="lg:col-span-5 flex justify-center pt-2 lg:pt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-[310px]">
                {/* Phone Frame Mockup */}
                <div className="relative bg-[#0d1117] rounded-[42px] p-3 shadow-2xl border-4 border-[#2b3547] ring-1 ring-white/10">
                  {/* Dynamic Island / Speaker */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#1c2438]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                  </div>

                  {/* Inner Phone Screen */}
                  <div className="relative bg-[#fdfbf7] rounded-[34px] overflow-hidden text-[#1e293b] pt-8 pb-4 px-3.5 flex flex-col min-h-[470px] max-h-[510px] shadow-inner select-none overflow-y-auto">
                    
                    {/* Floating Music Widget */}
                    <div className="absolute top-12 right-4 z-20">
                      <button
                        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                        className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md shadow-md border border-white/20 transition-transform hover:scale-105"
                        title={isPlayingMusic ? 'Jeda Musik' : 'Putar Musik'}
                      >
                        <span className="material-symbols-outlined text-base text-amber-300">
                          {isPlayingMusic ? 'music_note' : 'music_off'}
                        </span>
                      </button>
                    </div>

                    {/* Invitation Header Monogram */}
                    <div className="text-center space-y-1 pt-3">
                      <div className="w-12 h-12 mx-auto rounded-full border border-amber-600/40 flex items-center justify-center bg-amber-50">
                        <span className="font-display text-amber-800 text-lg font-bold tracking-widest">A &amp; C</span>
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-amber-800/80 font-semibold pt-1">
                        WEDDING INVITATION
                      </p>
                      <h3 className="font-display text-2xl font-bold text-gray-900 tracking-tight">
                        {currentTemplate.couple}
                      </h3>
                      <p className="text-[11px] text-gray-600 font-light">
                        {currentTemplate.date}
                      </p>
                    </div>

                    {/* Romantic Prewedding Photo */}
                    <div className="my-3.5 rounded-xl overflow-hidden shadow-sm aspect-[4/3] bg-black/5 border border-amber-900/10">
                      <img
                        src={currentTemplate.image}
                        alt="Preview Undangan"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Live Countdown in Phone Preview */}
                    <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-2.5 text-center mb-3">
                      <p className="text-[9px] uppercase tracking-widest text-amber-900 font-semibold mb-1">
                        Menuju Hari Bahagia
                      </p>
                      <div className="grid grid-cols-4 gap-1 text-center">
                        <div className="bg-white py-1 rounded shadow-xs">
                          <span className="font-display text-sm font-bold text-gray-900 block leading-tight">{timeLeft.days}</span>
                          <span className="text-[8px] text-gray-500 uppercase">Hari</span>
                        </div>
                        <div className="bg-white py-1 rounded shadow-xs">
                          <span className="font-display text-sm font-bold text-gray-900 block leading-tight">{timeLeft.hours}</span>
                          <span className="text-[8px] text-gray-500 uppercase">Jam</span>
                        </div>
                        <div className="bg-white py-1 rounded shadow-xs">
                          <span className="font-display text-sm font-bold text-gray-900 block leading-tight">{timeLeft.minutes}</span>
                          <span className="text-[8px] text-gray-500 uppercase">Menit</span>
                        </div>
                        <div className="bg-white py-1 rounded shadow-xs">
                          <span className="font-display text-sm font-bold text-amber-700 block leading-tight">{timeLeft.seconds}</span>
                          <span className="text-[8px] text-gray-500 uppercase">Detik</span>
                        </div>
                      </div>
                    </div>

                    {/* Venue & Maps Button */}
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-xs space-y-2 mb-3">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-amber-700 text-base mt-0.5">location_on</span>
                        <div>
                          <p className="text-[11px] font-bold text-gray-900">Lokasi Acara</p>
                          <p className="text-[10px] text-gray-600 leading-tight">{currentTemplate.venue}</p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <span className="inline-flex items-center justify-center gap-1 w-full py-1.5 bg-amber-800 text-white text-[10px] font-semibold rounded uppercase tracking-wider">
                          <span className="material-symbols-outlined text-xs">navigation</span> Buka Google Maps
                        </span>
                      </div>
                    </div>

                    {/* Mini RSVP Simulator */}
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-xs space-y-2 mb-2">
                      <p className="text-[11px] font-bold text-gray-900 text-center">Konfirmasi Kehadiran (RSVP)</p>
                      {rsvpStatus === 'submitted' ? (
                        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-2 rounded text-[10px] text-center">
                          ✓ Terima kasih, konfirmasi Anda telah tercatat!
                        </div>
                      ) : (
                        <form onSubmit={handleRsvpSubmit} className="space-y-1.5">
                          <input
                            type="text"
                            placeholder="Nama Lengkap Anda"
                            value={rsvpName}
                            onChange={(e) => setRsvpName(e.target.value)}
                            className="w-full text-[10px] px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:border-amber-600"
                          />
                          <div className="flex gap-2 text-[10px]">
                            <label className="flex items-center gap-1 cursor-pointer">
                              <input
                                type="radio"
                                name="rsvpAttend"
                                checked={rsvpAttend === 'hadir'}
                                onChange={() => setRsvpAttend('hadir')}
                              />
                              Hadir
                            </label>
                            <label className="flex items-center gap-1 cursor-pointer">
                              <input
                                type="radio"
                                name="rsvpAttend"
                                checked={rsvpAttend === 'tidak'}
                                onChange={() => setRsvpAttend('tidak')}
                              />
                              Maaf Berhalangan
                            </label>
                          </div>
                          <button
                            type="submit"
                            className="w-full py-1.5 bg-gray-900 text-white rounded text-[10px] font-semibold hover:bg-black transition-colors"
                          >
                            Kirim Konfirmasi
                          </button>
                        </form>
                      )}
                    </div>

                    {/* Bottom Indicator */}
                    <div className="w-24 h-1 bg-gray-300 rounded-full mx-auto mt-auto pt-0.5" />
                  </div>
                </div>

                {/* Subtitle note below phone */}
                <p className="text-center text-xs text-white/50 pt-3">
                  Interaktif: Coba tekan musik &amp; tombol form di layar simulasi di atas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION PILIHAN DESAIN / TEMPLATE (MINIMAL 3 KATEGORI: ELEGANT, MINIMALIST, LUXURY) */}
      <section id="katalog-desain" className="py-14 sm:py-20 md:py-24 bg-surface border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
            <span className="font-label-md text-secondary text-xs uppercase tracking-[0.25em] font-semibold block">
              Koleksi Desain Eksklusif
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-primary font-semibold leading-snug">
              Pilihan Tema Undangan Digital
            </h2>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant font-light">
              Desain modern, clean, dan romantis yang dirancang khusus untuk pasangan masa kini. Tanpa kesan template murahan.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            {[
              { id: 'All', label: 'Semua Desain' },
              { id: 'Elegant', label: 'Elegant Collection' },
              { id: 'Minimalist', label: 'Minimalist Editorial' },
              { id: 'Luxury', label: 'Luxury Heritage' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-label-md uppercase tracking-wider transition-all font-semibold ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-outline-variant/50 text-on-surface-variant hover:border-gold-shimmer hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTemplates.map((tpl) => (
              <div
                key={tpl.id}
                className="bg-white border border-outline-variant/40 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-gold-shimmer/80"
              >
                <div>
                  {/* Image Card Header with Category Tag */}
                  <div className="aspect-[16/11] overflow-hidden bg-black/5 relative">
                    <img
                      src={tpl.image}
                      alt={tpl.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {tpl.badge && (
                      <div className="absolute top-3 left-3 bg-primary/90 text-gold-shimmer backdrop-blur-md px-3 py-1 rounded-sm text-[10px] uppercase font-bold tracking-wider border border-gold-shimmer/30">
                        {tpl.badge}
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-black/60 text-white backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide">
                      {tpl.category}
                    </div>

                    {/* Color Swatch Circles */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
                      {tpl.colors.map((c, i) => (
                        <span
                          key={i}
                          className="w-3 h-3 rounded-full border border-white/40 shadow-xs"
                          style={{ backgroundColor: c }}
                          title={`Warna palet: ${c}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3.5">
                    <div>
                      <span className="text-[11px] font-label-md uppercase tracking-wider text-secondary font-semibold">
                        {tpl.tagline}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl text-primary font-bold group-hover:text-secondary transition-colors mt-0.5">
                        {tpl.name}
                      </h3>
                    </div>

                    <p className="font-body text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                      {tpl.description}
                    </p>

                    <div className="pt-2 border-t border-outline-variant/30 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Harga Spesial</span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-lg sm:text-xl font-bold text-primary">
                            {tpl.price}
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            {tpl.normalPrice}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                        Hemat 30%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => {
                      setActiveTemplate(tpl.id);
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 bg-ivory-surface hover:bg-gold-shimmer/15 text-primary border border-outline-variant/50 hover:border-gold-shimmer rounded-sm font-label-md text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base text-gold-shimmer">smartphone</span>
                    Lihat di Mockup Handphone
                  </button>
                  <a
                    href={getWaOrderLink(tpl.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-primary hover:bg-primary-container text-white rounded-sm font-label-md text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    Pesan Tema Ini via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION FITUR LENGKAP UNDANGAN DIGITAL */}
      <section className="py-14 sm:py-20 md:py-24 bg-ivory-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5">
            <span className="font-label-md text-secondary text-xs uppercase tracking-[0.25em] font-semibold block">
              Fitur Lengkap Tanpa Batas
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-primary font-semibold leading-snug">
              Semua yang Anda Butuhkan dalam Satu Tautan
            </h2>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant font-light">
              Dirancang dengan teknologi web modern responsif, cepat diakses oleh tamu dari berbagai smartphone tanpa perlu mengunduh aplikasi apa pun.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-sm border border-outline-variant/30 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-primary/5 text-primary flex items-center justify-center border border-gold-shimmer/30">
                    <span className="material-symbols-outlined text-xl text-gold-shimmer">{b.icon}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary">
                    {b.title}
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant font-light leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CARA KERJA PEMESANAN (HOW IT WORKS) */}
      <section className="py-14 sm:py-20 bg-white border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block">
              Alur Pemesanan Praktis
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-primary font-semibold leading-snug">
              Cara Kerja Cepat &amp; Mudah
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant font-light">
              Hanya butuh 4 langkah mudah untuk memiliki undangan digital berkelas untuk hari pernikahan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.number}
                className="relative p-6 bg-ivory-surface rounded-sm border border-outline-variant/30 space-y-3"
              >
                <span className="font-display text-3xl font-bold text-gold-shimmer block">
                  {st.number}
                </span>
                <h3 className="font-display text-lg font-bold text-primary">
                  {st.title}
                </h3>
                <p className="font-body text-xs text-on-surface-variant font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Banner Promo Bundle */}
          <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-primary to-[#0f231e] text-white rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-gold-shimmer/30">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] font-label-md uppercase tracking-[0.2em] text-gold-shimmer font-semibold block">
                SPECIAL CLIENT OFFER
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold">
                Mengambil Paket Wedding Organizer di My Dream?
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/80 font-light max-w-xl">
                Dapatkan Undangan Digital Premium secara <strong>GRATIS (Senilai Rp 399.000)</strong> sebagai bagian dari fasilitas koordinasi pernikahan My Dream Organizer Jember.
              </p>
            </div>
            <a
              href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%2C%20saya%20ingin%20tanya%20paket%20wedding%20sekaligus%20bonus%20Undangan%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-bold transition-colors whitespace-nowrap shadow-md"
            >
              <span className="material-symbols-outlined text-base">redeem</span>
              Klaim Bonus Wedding Bundle
            </a>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-14 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block">
              Tanya Jawab
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-primary font-semibold leading-snug">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-outline-variant/30 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-semibold text-primary text-sm sm:text-base hover:text-secondary transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-xl text-gold-shimmer shrink-0">
                    {activeFaq === idx ? 'remove' : 'add'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 font-body text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed border-t border-outline-variant/20 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA WHATSAPP */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#0d1627] to-[#080d18] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 relative z-10">
          <span className="font-label-md text-gold-shimmer text-xs tracking-[0.25em] uppercase font-semibold block">
            MY DREAM DIGITAL INVITATION
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Wujudkan Undangan Pernikahan yang Berkesan Hari Ini
          </h2>
          <p className="font-body text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Konsultasikan tema warna, lagu favorit, dan format nama tamu bersama tim konseptor My Dream Organizer Jember. Cepat, praktis, dan memukau.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%2C%20saya%20ingin%20pesan%20Undangan%20Digital%20Premium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs sm:text-sm tracking-widest uppercase font-bold rounded-sm shadow-xl transition-all"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Chat WhatsApp: 0812-3377-9967
            </a>
            <a
              href="/paket"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-label-md text-xs sm:text-sm tracking-widest uppercase font-semibold rounded-sm transition-all"
            >
              Lihat Paket WO Lengkap
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
