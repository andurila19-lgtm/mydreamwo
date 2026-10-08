'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';

export default function TestFoodPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [guestCount, setGuestCount] = useState('500');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*RESERVASI TEST FOOD KATERING — MY DREAM ORGANIZER JEMBER*\n\n*Nama:* ${name}\n*Nomor WA:* ${phone}\n*Rencana Tanggal Acara:* ${date}\n*Estimasi Tamu:* ${guestCount} Pax`;
    window.open(`https://wa.me/6281233779967?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <main>
      <PageHeader
        eyebrow="Cita Rasa Terpilih"
        title="Jadwal &amp; Reservasi Test Food"
        description="Rasakan langsung kelezatan menu katering prasmanan dan gubukan autentik di Jember sebelum Anda memutuskan paket acara."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Test Food Katering' },
        ]}
      />

      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Info & Schedule */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white p-6 sm:p-8 border border-outline-variant/30 rounded-sm shadow-sm space-y-6">
                <h2 className="font-display text-xl sm:text-2xl text-primary font-semibold">
                  Mengapa Test Food Bersama My Dream?
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-gold-shimmer text-2xl flex-shrink-0 pt-0.5">restaurant</span>
                    <div>
                      <h3 className="font-display text-sm sm:text-base font-semibold text-primary">Kualitas Rasa &amp; Higienitas</h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">Mencicipi langsung olahan menu utama nusantara/modern dan aneka stall gubukan favorit para tamu.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-gold-shimmer text-2xl flex-shrink-0 pt-0.5">visibility</span>
                    <div>
                      <h3 className="font-display text-sm sm:text-base font-semibold text-primary">Inspeksi Penyajian &amp; Kebersihan</h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">Melihat langsung standar set-up peralatan chafing dish, garnish, dan profesionalitas seragam tim katering.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-gold-shimmer text-2xl flex-shrink-0 pt-0.5">diversity_1</span>
                    <div>
                      <h3 className="font-display text-sm sm:text-base font-semibold text-primary">Konsultasi Selera Keluarga</h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">Diskusi fleksibel bersama food consultant My Dream Organizer untuk menyesuaikan tingkat kepedasan, tekstur, dan komposisi menu.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-surface-container-low border border-outline-variant/30 rounded-sm space-y-1 text-xs text-on-surface-variant">
                  <p className="font-bold text-primary">Jadwal Sesi Test Food:</p>
                  <p>Setiap akhir pekan (Sabtu &amp; Minggu) atau dijadwalkan secara privat bersama tim My Dream Organizer di Jember.</p>
                </div>
              </div>
            </div>

            {/* Right: Registration Form */}
            <div className="lg:col-span-6">
              <div className="bg-white p-6 sm:p-8 border border-outline-variant/30 rounded-sm shadow-sm space-y-5">
                <div>
                  <span className="font-label-md text-secondary uppercase tracking-[0.2em] text-xs font-semibold block mb-1">
                    Formulir Reservasi
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-primary font-semibold">
                    Daftar Sesi Food Tasting Gratis
                  </h3>
                </div>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-sm text-center space-y-2">
                    <span className="material-symbols-outlined text-emerald-600 text-3xl">check_circle</span>
                    <h4 className="font-display text-base font-bold text-emerald-900">Reservasi Terkirim!</h4>
                    <p className="text-xs text-emerald-800">
                      Pendaftaran Anda telah diteruskan ke WhatsApp Concierge My Dream Organizer Jember. Tim kami akan segera menghubungi Anda.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                        Nama Lengkap / Calon Pengantin
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Amanda &amp; Farhan"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-outline-variant/50 rounded-sm focus:outline-none focus:border-gold-shimmer"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                        Nomor WhatsApp Aktif
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Contoh: 0812-XXXX-XXXX"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-outline-variant/50 rounded-sm focus:outline-none focus:border-gold-shimmer"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                          Rencana Tanggal Acara
                        </label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-outline-variant/50 rounded-sm focus:outline-none focus:border-gold-shimmer"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                          Estimasi Jumlah Tamu
                        </label>
                        <select
                          value={guestCount}
                          onChange={(e) => setGuestCount(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-outline-variant/50 rounded-sm focus:outline-none focus:border-gold-shimmer"
                        >
                          <option value="200">200 Pax (Intimate)</option>
                          <option value="500">500 Pax (Standard)</option>
                          <option value="800">800 Pax (Medium)</option>
                          <option value="1000+">1.000+ Pax (Grand)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold transition-colors mt-2"
                    >
                      Kirim Reservasi via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
