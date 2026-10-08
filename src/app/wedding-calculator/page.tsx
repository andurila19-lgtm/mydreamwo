'use client';

import React, { useState, useMemo } from 'react';
import PageHeader from '@/components/PageHeader';

export default function WeddingCalculatorPage() {
  const [guests, setGuests] = useState<number>(500);
  const [venueType, setVenueType] = useState<number>(15000000); // 15jt default
  const [cateringTier, setCateringTier] = useState<number>(65000); // per pax
  const [decorTier, setDecorTier] = useState<number>(18000000); // 18jt
  const [docTier, setDocTier] = useState<number>(8500000); // 8.5jt
  const [makeupTier, setMakeupTier] = useState<number>(9000000); // 9jt
  const [woService, setWoService] = useState<number>(12000000); // WO Day / Full

  const totalEstimate = useMemo(() => {
    const cateringTotal = guests * cateringTier;
    return venueType + cateringTotal + decorTier + docTier + makeupTier + woService;
  }, [guests, venueType, cateringTier, decorTier, docTier, makeupTier, woService]);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleConsult = () => {
    const msg = `*SIMULASI ESTIMASI BIAYA EVENT & WEDDING — MY DREAM ORGANIZER JEMBER*

*Jumlah Undangan:* ${guests} Pax
*Estimasi Katering:* ${formatRupiah(guests * cateringTier)} (@ ${formatRupiah(cateringTier)}/pax)
*Estimasi Venue:* ${formatRupiah(venueType)}
*Estimasi Dekorasi:* ${formatRupiah(decorTier)}
*Estimasi Dokumentasi:* ${formatRupiah(docTier)}
*Estimasi Rias & Busana:* ${formatRupiah(makeupTier)}
*Estimasi Organizer Service:* ${formatRupiah(woService)}

*TOTAL ESTIMASI:* ${formatRupiah(totalEstimate)}

_Mohon informasi ketersediaan tanggal dan rekomendasi vendor terbaik dari My Dream Organizer Jember._`;

    window.open(`https://wa.me/6281233779967?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <main>
      <PageHeader
        eyebrow="Simulasi Biaya Transparan"
        title="Kalkulator Estimasi Acara"
        description="Hitung perkiraan kebutuhan anggaran pernikahan dan event Anda di Jember secara transparan dan terukur bersama My Dream Organizer."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Wedding Calculator' },
        ]}
      />

      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-outline-variant/30 rounded-sm shadow-sm space-y-6">
              <div>
                <span className="font-label-md text-secondary uppercase tracking-[0.2em] text-xs font-semibold block mb-1">
                  Parameter Anggaran
                </span>
                <h2 className="font-display text-xl sm:text-2xl text-primary font-semibold">
                  Sesuaikan Komponen Acara Anda
                </h2>
              </div>

              {/* Guest Count Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-primary">
                  <span>Perkiraan Tamu / Pax Undangan:</span>
                  <span className="text-secondary text-sm font-bold">{guests} Orang</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="50"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full accent-gold-shimmer cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-on-surface-variant/70">
                  <span>100 Pax (Intimate)</span>
                  <span>500 Pax</span>
                  <span>1.000 Pax</span>
                  <span>1.500 Pax</span>
                </div>
              </div>

              {/* Catering Tier Select */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-primary">Menu Katering Per Pax:</label>
                <select
                  value={cateringTier}
                  onChange={(e) => setCateringTier(Number(e.target.value))}
                  className="w-full p-2.5 text-xs sm:text-sm border border-outline-variant/50 rounded-sm focus:outline-none focus:border-gold-shimmer"
                >
                  <option value={50000}>Prasmanan Hemat (Rp 50.000 / pax)</option>
                  <option value={65000}>Prasmanan Favorit + Stall (Rp 65.000 / pax)</option>
                  <option value={85000}>Prasmanan Premium + 4 Stall (Rp 85.000 / pax)</option>
                  <option value={110000}>Royal Grand Buffet + 6 Stall (Rp 110.000 / pax)</option>
                </select>
              </div>

              {/* Venue Budget */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-primary">Alokasi Venue / Gedung di Jember:</label>
                <select
                  value={venueType}
                  onChange={(e) => setVenueType(Number(e.target.value))}
                  className="w-full p-2.5 text-xs sm:text-sm border border-outline-variant/50 rounded-sm focus:outline-none focus:border-gold-shimmer"
                >
                  <option value={0}>Rumah Pribadi / Venue Sendiri (Rp 0)</option>
                  <option value={10000000}>Gedung Serbaguna (Rp 10.000.000)</option>
                  <option value={18000000}>Convention Hall / Outdoor Garden (Rp 18.000.000)</option>
                  <option value={30000000}>Ballroom Hotel Bintang 4 di Jember (Rp 30.000.000)</option>
                </select>
              </div>

              {/* Decor Tier */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-primary">Dekorasi &amp; Panggung:</label>
                <select
                  value={decorTier}
                  onChange={(e) => setDecorTier(Number(e.target.value))}
                  className="w-full p-2.5 text-xs sm:text-sm border border-outline-variant/50 rounded-sm focus:outline-none focus:border-gold-shimmer"
                >
                  <option value={12000000}>Dekorasi Minimalist Elegan (Rp 12.000.000)</option>
                  <option value={18000000}>Dekorasi Modern Tematik Florist (Rp 18.000.000)</option>
                  <option value={28000000}>Grand Pelaminan Full Fresh Flower &amp; Lighting (Rp 28.000.000)</option>
                </select>
              </div>

              {/* Documentation */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-primary">Dokumentasi Foto &amp; Video:</label>
                <select
                  value={docTier}
                  onChange={(e) => setDocTier(Number(e.target.value))}
                  className="w-full p-2.5 text-xs sm:text-sm border border-outline-variant/50 rounded-sm focus:outline-none focus:border-gold-shimmer"
                >
                  <option value={5500000}>Standard Foto &amp; Highlight Video (Rp 5.500.000)</option>
                  <option value={8500000}>Cinematic Video, Drone &amp; Album Kolase (Rp 8.500.000)</option>
                  <option value={14000000}>Premium Multi-Camera &amp; Same Day Edit (Rp 14.000.000)</option>
                </select>
              </div>
            </div>

            {/* Summary Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#0f172a] text-white p-6 sm:p-8 rounded-sm shadow-xl space-y-6 sticky top-28 border border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold-shimmer font-bold block mb-1">
                    Ringkasan Simulasi
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold">
                    Perkiraan Total Investasi
                  </h3>
                </div>

                <div className="py-4 border-y border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-white/70">
                    <span>Katering ({guests} pax):</span>
                    <span className="font-semibold text-white">{formatRupiah(guests * cateringTier)}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Venue:</span>
                    <span className="font-semibold text-white">{formatRupiah(venueType)}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Dekorasi:</span>
                    <span className="font-semibold text-white">{formatRupiah(decorTier)}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Dokumentasi:</span>
                    <span className="font-semibold text-white">{formatRupiah(docTier)}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Rias &amp; Busana:</span>
                    <span className="font-semibold text-white">{formatRupiah(makeupTier)}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Organizer Management:</span>
                    <span className="font-semibold text-white">{formatRupiah(woService)}</span>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-white/60 block">Total Estimasi Anggaran:</span>
                  <p className="font-display text-2xl sm:text-3xl text-gold-shimmer font-bold mt-1">
                    {formatRupiah(totalEstimate)}
                  </p>
                </div>

                <button
                  onClick={handleConsult}
                  className="w-full py-3.5 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-bold shadow-md transition-colors"
                >
                  Konsultasikan Simulasi Ini via WA
                </button>
                <p className="text-[10px] text-center text-white/50">
                  Hasil simulasi bersifat estimasi acuan. Tim My Dream Organizer siap menyesuaikan dengan budget nyata Anda.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
