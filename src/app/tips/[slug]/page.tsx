import React from 'react';
import { notFound } from 'next/navigation';
import { tipsData } from '@/data/tips';
import PageHeader from '@/components/PageHeader';

export async function generateStaticParams() {
  return tipsData.map((tip) => ({
    slug: tip.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tip = tipsData.find((t) => t.slug === slug);
  if (!tip) return { title: 'Artikel Tidak Ditemukan | My Dream Organizer' };
  return {
    title: `${tip.title} — My Dream Organizer Jember`,
    description: tip.excerpt,
  };
}

export default async function TipDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tip = tipsData.find((t) => t.slug === slug);

  if (!tip) {
    notFound();
  }

  return (
    <main>
      <PageHeader
        eyebrow={`Artikel • ${tip.category}`}
        title={tip.title}
        description={`Dipublikasikan pada ${tip.date} • Estimasi baca ${tip.readTime}`}
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Tips & Panduan', href: '/tips' },
          { label: tip.title },
        ]}
      />

      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] overflow-hidden rounded-sm mb-8 sm:mb-10 border border-outline-variant/30 shadow-sm bg-black/5">
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-full object-cover"
              width={900}
              height={500}
            />
          </div>

          <div className="bg-white p-6 sm:p-10 md:p-12 border border-outline-variant/30 rounded-sm shadow-sm space-y-6 text-on-surface leading-relaxed font-body">
            {tip.content.map((paragraph, idx) => (
              <p key={idx} className="text-sm sm:text-base md:text-lg leading-relaxed text-on-surface-variant font-light">
                {paragraph}
              </p>
            ))}

            <div className="pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-secondary font-semibold uppercase tracking-wider block">Konsultasi Gratis</span>
                <p className="font-display text-base font-bold text-primary">Ingin mewujudkan konsep seperti ini di acara Anda?</p>
              </div>
              <a
                href={`https://wa.me/6281233779967?text=${encodeURIComponent('Halo My Dream Organizer Jember, saya membaca artikel ' + tip.title + ' dan ingin konsultasi lebih lanjut.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs uppercase tracking-wider font-bold rounded-sm shadow transition-colors"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Tanya My Dream Organizer
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
