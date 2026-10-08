import React from 'react';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Wedding Show & Showcase Expo — My Dream Organizer Jember',
  description: 'Jadwal pameran dan wedding showcase My Dream Organizer di Jember dan Jawa Timur. Dapatkan promo eksklusif, cashback vendor, dan konsultasi gratis.',
};

export default function WeddingShowPage() {
  const events = [
    {
      title: 'My Dream Grand Wedding & Event Expo 2025',
      date: '24 - 26 Oktober 2025',
      location: 'Grand Ballroom Aston Hotel Jember',
      time: '10.00 - 21.00 WIB',
      desc: 'Pameran pernikahan dan event terbesar di Jember menghadirkan puluhan vendor kurasi terbaik: dekorasi pelaminan modern & adat, katering premium, gaun pengantin, lighting panggung, dan fotografi.',
      promo: 'Cashback Vendor s/d Rp 5.000.000 + Free Upgrade Photobooth 360',
      status: 'Akan Datang',
    },
    {
      title: 'Jember Intimate Wedding & Birthday Fair',
      date: '21 - 23 November 2025',
      location: 'Dafam Fortuna Convention Hall Jember',
      time: '11.00 - 20.00 WIB',
      desc: 'Showcase khusus bagi calon pengantin dan keluarga yang mendambakan konsep intimate wedding berbalut estetika modern, serta perayaan ulang tahun Sweet 17th yang berkesan.',
      promo: 'Free Testing Food Katering & Konsultasi Konsep Acara Gratis',
      status: 'Akan Datang',
    },
  ];

  return (
    <main>
      <PageHeader
        eyebrow="Pameran &amp; Event"
        title="Wedding Show &amp; Showcase"
        description="Temui tim My Dream Organizer dan vendor-vendor kurasi kami secara langsung di acara wedding expo di Jember."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Wedding Show' },
        ]}
      />

      {/* Events List */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {events.map((ev) => (
              <article
                key={ev.title}
                className="bg-white border border-outline-variant/30 p-6 sm:p-8 shadow-sm hover:border-gold-shimmer transition-colors space-y-6 rounded-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="bg-gold-shimmer text-primary text-[10px] px-2.5 py-1 uppercase tracking-widest font-bold rounded-sm">
                      {ev.status}
                    </span>
                    <span className="text-xs text-on-surface-variant/70 font-body">{ev.time}</span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl text-primary font-semibold leading-snug">
                    {ev.title}
                  </h2>

                  <div className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-gold-shimmer text-base">calendar_today</span>
                      <span>{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-gold-shimmer text-base">location_on</span>
                      <span>{ev.location}</span>
                    </div>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                    {ev.desc}
                  </p>

                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-sm text-xs text-amber-900 font-medium">
                    🎁 <strong>Promo Spesial:</strong> {ev.promo}
                  </div>
                </div>

                <div className="pt-4 border-t border-outline-variant/20">
                  <a
                    href={`https://wa.me/6281233779967?text=${encodeURIComponent('Halo My Dream Organizer Jember, saya ingin mendaftar undangan gratis untuk acara: ' + ev.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs uppercase tracking-widest rounded-sm font-semibold transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">confirmation_number</span>
                    Daftar Undangan VIP Gratis
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
