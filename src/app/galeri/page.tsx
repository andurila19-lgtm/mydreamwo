'use client';

import React, { useState } from 'react';
import { galleryData, GalleryItem } from '@/data/gallery';
import PageHeader from '@/components/PageHeader';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = [
    'Semua',
    'Wedding Ceremony',
    'Wedding Reception',
    'Engagement',
    'Birthday',
    'Corporate & Event',
    'Event Decoration',
    'Wedding Coordination'
  ];

  const filteredItems = activeCategory === 'Semua'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  return (
    <main>
      <PageHeader
        eyebrow="Rekam Jejak Karya"
        title="Portfolio My Dream Organizer"
        description="Dokumentasi perayaan pernikahan, corporate event, dan birthday party yang terkonsep indah dan berkesan di Jember &amp; Jawa Timur."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Portfolio' },
        ]}
      />

      {/* Filter Tabs */}
      <section className="py-6 sm:py-8 bg-ivory-surface border-b border-outline-variant/20 sticky top-16 z-30">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[38px] px-3.5 sm:px-5 py-1.5 font-label-md uppercase tracking-wider text-[11px] rounded-sm transition-all cursor-pointer font-semibold ${activeCategory === cat
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-white border border-outline-variant/30 text-on-surface-variant hover:border-gold-shimmer hover:text-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className="group relative block aspect-square overflow-hidden rounded-sm bg-surface-container border border-outline-variant/30 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-3xl drop-shadow">
                    zoom_in
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-gold-shimmer font-semibold block">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xs sm:text-sm font-semibold truncate">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-white/70 truncate">
                    {item.client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl relative border border-gold-shimmer/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black p-1.5 rounded-full z-10 transition-colors"
              aria-label="Tutup"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <div className="aspect-[16/10] overflow-hidden bg-black">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs uppercase tracking-widest text-secondary font-bold">
                {activeLightbox.category}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">
                {activeLightbox.title}
              </h3>
              <p className="text-xs text-on-surface-variant font-medium">
                📍 {activeLightbox.venue} • 👤 {activeLightbox.client}
              </p>
              {activeLightbox.description && (
                <p className="text-xs sm:text-sm text-on-surface-variant/90 font-light leading-relaxed">
                  {activeLightbox.description}
                </p>
              )}
              <div className="pt-3 border-t border-outline-variant/30 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`https://wa.me/6281233779967?text=${encodeURIComponent('Halo My Dream Organizer Jember, saya tertarik dengan konsep portfolio ' + activeLightbox.title + ' (' + activeLightbox.category + ')')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs uppercase tracking-wider font-bold rounded-sm shadow transition-colors"
                >
                  Konsultasikan Konsep Seperti Ini
                </a>
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="px-5 py-2.5 border border-outline-variant/50 text-xs uppercase font-label-md rounded-sm hover:bg-surface-container transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
