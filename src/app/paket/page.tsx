import React from 'react';
import { packagesData } from '@/data/packages';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Paket Pernikahan & Event — My Dream Organizer Jember',
  description: 'Daftar paket resmi My Dream Organizer Jember: Nikah Yuk, Akad Aja, Serayu, Romansa Rumahan, dan Bermuara Package. Pasti Nikahmu BEDA!',
};

export default function PackagesPage() {
  return (
    <main className="bg-surface text-on-surface">
      <PageHeader
        eyebrow="Katalog Paket Resmi My Dream Organizer Jember"
        title="Pilihan Paket Pernikahan &amp; Event"
        description="Transparan, berkelas, dan bebas stres. Pilihan paket lengkap dari akad nikah, pesta rumahan, hingga grand ballroom dengan kolaborasi vendor-vendor terbaik di Jember."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Paket & Layanan' },
        ]}
      />

      {/* Grid of All Packages */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {packagesData.map((pkg) => (
              <article
                key={pkg.id}
                className="border border-outline-variant/30 bg-white flex flex-col justify-between rounded-sm shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gold-shimmer/70 group"
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
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                      {pkg.venueIncluded && (
                        <span className="bg-black/70 text-emerald-300 text-[9px] px-2 py-0.5 rounded backdrop-blur-sm border border-emerald-400/30">
                          Venue Termasuk
                        </span>
                      )}
                      {pkg.cateringIncluded && (
                        <span className="bg-black/70 text-amber-300 text-[9px] px-2 py-0.5 rounded backdrop-blur-sm border border-amber-400/30">
                          Katering Termasuk
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2.5">
                    <span className="text-[10px] uppercase tracking-wider text-secondary font-semibold block">
                      {pkg.category || 'Wedding'}
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl text-primary font-semibold leading-snug group-hover:text-secondary transition-colors">
                      {pkg.name}
                    </h2>
                    <p className="font-body text-xs text-on-surface-variant font-light line-clamp-3 leading-relaxed">
                      {pkg.shortDesc}
                    </p>
                    
                    <div className="pt-2 border-t border-outline-variant/20 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] uppercase text-outline block font-medium">Investasi Paket</span>
                        <div className="flex items-baseline gap-2">
                          <p className="font-display text-lg sm:text-xl text-primary font-bold">{pkg.price}</p>
                          {pkg.originalPrice && (
                            <p className="text-xs text-gray-400 line-through">{pkg.originalPrice}</p>
                          )}
                        </div>
                      </div>
                      {pkg.freeBonuses && pkg.freeBonuses.length > 0 && (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                          +{pkg.freeBonuses.length} Bonus Free
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 space-y-2">
                  <div className="pt-3 border-t border-outline-variant/20 flex gap-2">
                    <a
                      href={`/paket/${pkg.slug}`}
                      className="flex-1 text-center py-2.5 bg-primary hover:bg-primary-container text-on-primary text-xs uppercase font-label-md rounded-sm font-semibold tracking-wider transition-colors shadow-xs"
                    >
                      Detail &amp; Fasilitas
                    </a>
                    <a
                      href={`https://wa.me/6281233779967?text=${encodeURIComponent('Halo My Dream Organizer Jember, saya ingin tanya paket: ' + pkg.name + ' (' + pkg.price + ')')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 bg-gold-shimmer text-primary hover:bg-secondary hover:text-white rounded-sm flex items-center justify-center transition-colors shadow-xs"
                      aria-label="Konsultasi WA"
                      title="Konsultasi WhatsApp"
                    >
                      <span className="material-symbols-outlined text-base">chat</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Digital Invitation Promo Banner */}
          <div className="mt-12 p-6 sm:p-8 bg-[#0b101b] text-white rounded-sm border border-gold-shimmer/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-gold-shimmer/20 text-gold-shimmer rounded-full text-[10px] uppercase font-bold tracking-wider border border-gold-shimmer/40">
                <span className="material-symbols-outlined text-xs">stars</span>
                <span>Layanan Premium Tambahan</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold">
                My Dream Digital Invitation (3 Konsep Tematik)
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/80 font-light max-w-xl">
                Lengkapi hari pernikahan Anda dengan undangan digital eksklusif berdesain editorial haute-couture (Elegant, Minimalist, Luxury). Dilengkapi live countdown, RSVP WhatsApp, dan navigasi Google Maps.
              </p>
            </div>
            <a
              href="/undangan"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-bold transition-all whitespace-nowrap shadow-md"
            >
              <span className="material-symbols-outlined text-base">visibility</span>
              Buka Katalog Undangan Digital
            </a>
          </div>

          {/* Consultation Banner */}
          <div className="mt-6 p-6 sm:p-8 bg-gradient-to-r from-primary to-[#0f231e] text-white rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-white/10">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-[11px] font-label-md uppercase tracking-[0.2em] text-gold-shimmer font-semibold block">
                KUSTOMISASI BEBAS
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold">
                Punya Kebutuhan atau Konsep Pernikahan Sendiri?
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/80 font-light max-w-xl">
                Kami siap menyesuaikan pemilihan vendor, kapasitas tamu, katering, dan venue impian Anda di area Jember dan sekitarnya.
              </p>
            </div>
            <a
              href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%2C%20saya%20ingin%20konsultasi%20kustomisasi%20paket%20wedding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-bold transition-colors whitespace-nowrap shadow-md"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Konsultasi Custom via WA
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
