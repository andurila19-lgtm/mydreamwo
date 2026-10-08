import React from 'react';
import { notFound } from 'next/navigation';
import { packagesData } from '@/data/packages';
import PageHeader from '@/components/PageHeader';

export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);
  if (!pkg) return { title: 'Paket Tidak Ditemukan | My Dream Organizer' };
  return {
    title: `${pkg.name} — My Dream Organizer Jember`,
    description: pkg.shortDesc,
  };
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const waUrl = `https://wa.me/6281233779967?text=${encodeURIComponent('Halo My Dream Organizer Jember, saya tertarik dan ingin konsultasi mengenai ' + pkg.name + ' (' + pkg.price + ')')}`;

  return (
    <main className="bg-surface text-on-surface">
      <PageHeader
        eyebrow="Rincian Paket &amp; Layanan • My Dream Organizer Jember"
        title={pkg.name}
        description={pkg.shortDesc}
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Paket & Layanan', href: '/paket' },
          { label: pkg.name },
        ]}
        action={
          <div className="bg-white/10 border border-white/20 p-4 sm:p-5 rounded-sm text-left sm:text-right backdrop-blur-sm">
            <span className="text-[11px] text-white/70 uppercase tracking-widest block font-medium">Investasi Paket</span>
            <div className="flex items-baseline gap-2 sm:justify-end">
              <span className="font-display text-2xl sm:text-3xl text-gold-shimmer font-bold block">{pkg.price}</span>
              {pkg.originalPrice && (
                <span className="text-xs sm:text-sm text-white/50 line-through font-light">
                  {pkg.originalPrice}
                </span>
              )}
            </div>
            {pkg.badge && (
              <span className="inline-block mt-1 text-[10px] bg-gold-shimmer/20 text-gold-shimmer border border-gold-shimmer/40 px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                {pkg.badge}
              </span>
            )}
          </div>
        }
      />

      {/* Main Detail Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Image, Overview, Vendors, & Bonuses */}
            <div className="lg:col-span-7 space-y-8">
              {/* Cover Photo */}
              <div className="aspect-[16/10] overflow-hidden rounded-sm border border-outline-variant/30 shadow-sm bg-black/5 relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {pkg.venueIncluded && (
                    <span className="bg-emerald-900/90 text-emerald-200 border border-emerald-400/40 text-[10px] uppercase font-bold px-2.5 py-1 rounded backdrop-blur-md">
                      ✓ Sudah Termasuk Venue
                    </span>
                  )}
                  {pkg.cateringIncluded && (
                    <span className="bg-amber-900/90 text-amber-200 border border-amber-400/40 text-[10px] uppercase font-bold px-2.5 py-1 rounded backdrop-blur-md">
                      ✓ Sudah Termasuk Katering
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3 bg-white p-6 sm:p-7 rounded-sm border border-outline-variant/30">
                <span className="font-label-md text-secondary uppercase tracking-[0.2em] text-xs font-semibold block">
                  Konsep &amp; Gambaran Acara
                </span>
                <h2 className="font-display text-xl sm:text-2xl text-primary font-semibold">
                  Momen Berkesan “Pasti Nikahmu BEDA!”
                </h2>
                <p className="font-body text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
                  {pkg.longDesc}
                </p>
              </div>

              {/* Vendor Breakdown Section */}
              {pkg.vendors && pkg.vendors.length > 0 && (
                <div className="space-y-4">
                  <div className="border-b border-outline-variant/30 pb-2">
                    <span className="font-label-md text-secondary uppercase tracking-[0.2em] text-xs font-semibold block">
                      Rincian Vendor Kolaborasi Resmi
                    </span>
                    <h3 className="font-display text-xl text-primary font-semibold">
                      Spesifikasi Fasilitas per Vendor
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {pkg.vendors.map((v, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-outline-variant/30 p-5 rounded-sm shadow-xs space-y-2 hover:border-gold-shimmer/70 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-3 border-b border-outline-variant/20 pb-2">
                          <span className="text-[11px] font-label-md uppercase tracking-wider text-secondary font-semibold">
                            {v.category}
                          </span>
                          <span className="font-display text-sm font-bold text-primary">
                            by {v.vendorName}
                          </span>
                        </div>
                        <ul className="space-y-1.5 pt-1">
                          {v.items.map((it, itemIdx) => (
                            <li key={itemIdx} className="text-xs text-on-surface-variant flex items-start gap-2">
                              <span className="material-symbols-outlined text-gold-shimmer text-sm mt-0.5 shrink-0">
                                check
                              </span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FREE Bonuses Box (Styled like official flyer) */}
              {pkg.freeBonuses && pkg.freeBonuses.length > 0 && (
                <div className="bg-gradient-to-br from-[#0c1322] to-[#121c30] text-white p-6 sm:p-7 rounded-sm border border-gold-shimmer/40 shadow-lg space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-display text-2xl font-black tracking-widest text-gold-shimmer uppercase">
                      FREE BONUS
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-gold-shimmer text-primary px-2 py-0.5 rounded">
                      Eksklusif Paket Ini
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/90">
                    {pkg.freeBonuses.map((bonus, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded border border-white/10">
                        <span className="material-symbols-outlined text-gold-shimmer text-base shrink-0 mt-0.5">
                          redeem
                        </span>
                        <span>{bonus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tiers if available */}
              {pkg.tiers && pkg.tiers.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="font-display text-base font-semibold text-primary">
                    Pilihan Skala / Kapasitas Acara:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {pkg.tiers.map((t, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-sm border border-outline-variant/30 text-center shadow-xs">
                        <span className="text-xs font-semibold text-primary block">{t.name}</span>
                        <span className="text-[11px] text-on-surface-variant/70 block mt-0.5">{t.pax}</span>
                        <span className="text-xs font-bold text-secondary block mt-2">{t.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Features Summary & WhatsApp CTA Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-outline-variant/30 p-6 sm:p-8 rounded-sm shadow-sm space-y-6">
                <div>
                  <span className="font-label-md text-secondary uppercase tracking-[0.2em] text-xs font-semibold block mb-1">
                    Ringkasan Fasilitas
                  </span>
                  <h3 className="font-display text-lg sm:text-xl text-primary font-semibold">
                    Semua yang Didapatkan:
                  </h3>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-on-surface-variant">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-gold-shimmer text-base flex-shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-outline-variant/20 space-y-3">
                  <div className="bg-ivory-surface p-3.5 rounded border border-outline-variant/30 text-center">
                    <span className="text-[10px] uppercase text-outline block font-medium">Investasi Paket</span>
                    <div className="flex items-baseline justify-center gap-2">
                      <p className="font-display text-xl sm:text-2xl text-primary font-bold">{pkg.price}</p>
                      {pkg.originalPrice && (
                        <p className="text-xs text-gray-400 line-through">{pkg.originalPrice}</p>
                      )}
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-widest uppercase rounded-sm font-bold shadow-md transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    Konsultasikan Paket Ini via WA
                  </a>
                  <p className="text-[11px] text-center text-on-surface-variant/70 leading-relaxed">
                    Hubungi tim My Dream Organizer Jember di <strong>0812-3377-9967</strong> untuk jadwal meeting koordinasi dan survey venue.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
