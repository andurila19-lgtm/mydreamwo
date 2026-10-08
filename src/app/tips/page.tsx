import React from 'react';
import { tipsData } from '@/data/tips';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Tips & Panduan Acara — My Dream Organizer Jember',
  description: 'Kumpulan tips seputar konsep pernikahan, perhitungan porsi katering, dan checklist timeline persiapan acara dari tim ahli My Dream Organizer Jember.',
};

export default function TipsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Inspirasi &amp; Wawasan"
        title="Tips &amp; Panduan Acara"
        description="Wawasan seputar konsep acara tematik, manajemen anggaran katering, dan panduan teknis agar persiapan hari bahagia Anda berjalan lancar tanpa stres."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Tips & Panduan' },
        ]}
      />

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {tipsData.map((tip) => (
              <article
                key={tip.id}
                className="bg-white border border-outline-variant/30 overflow-hidden shadow-sm hover:border-gold-shimmer transition-colors flex flex-col justify-between rounded-sm"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-black/5">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      loading="lazy"
                      width={500}
                      height={320}
                    />
                  </div>
                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex justify-between items-center text-xs text-on-surface-variant/70 font-body">
                      <span className="text-secondary font-semibold uppercase tracking-wider">{tip.category}</span>
                      <span>{tip.readTime}</span>
                    </div>
                    <h2 className="font-display text-lg sm:text-xl font-semibold text-primary leading-snug">
                      <a href={`/tips/${tip.slug}`} className="hover:text-gold-shimmer transition-colors">
                        {tip.title}
                      </a>
                    </h2>
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant line-clamp-3 leading-relaxed font-light">
                      {tip.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <a
                    href={`/tips/${tip.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-label-md uppercase tracking-wider text-primary font-semibold hover:text-gold-shimmer transition-colors"
                  >
                    Baca Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
