import React from 'react';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Tentang Kami — My Dream Organizer Jember',
  description: 'Mengenal filosofi, visi, dan komitmen tim profesional My Dream Organizer (Part of My Dream Group) di Jember, Jawa Timur. Pasti Nikahmu BEDA!',
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Filosofi &amp; Dedikasi"
        title="Tentang My Dream Organizer"
        description="Bukan sekadar mengatur acara, tetapi membantu menciptakan momen yang berkesan bagi setiap insan dan keluarga."
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Tentang Kami' },
        ]}
      />

      {/* Main Story & Monograph */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-sm border border-outline-variant/30 shadow-sm bg-black/5">
                <img
                  src="/images/hero-portrait.webp"
                  alt="Filosofi My Dream Organizer"
                  className="w-full h-full object-cover"
                  width={600}
                  height={750}
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <span className="font-label-md text-secondary uppercase tracking-[0.2em] text-xs block font-semibold">
                Part of My Dream Group
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary font-semibold leading-tight">
                Pasti Nikahmu BEDA!
              </h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
                Di <strong>My Dream Organizer</strong>, kami meyakini bahwa setiap acara — baik itu akad pernikahan sakral, resepsi megah, perayaan ulang tahun, hingga gala event perusahaan — adalah perwujudan impian dan martabat berharga.
              </p>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Berbasis di <strong>Jember, Jawa Timur</strong> dan berada di bawah naungan <strong>My Dream Group</strong>, kami hadir dengan visi yang jelas: <em>bukan sekadar mengatur susunan acara di atas kertas, melainkan menghadirkan ketenangan batin, kehangatan emosional, dan eksekusi yang berkesan sepanjang masa.</em>
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-4 bg-white border border-outline-variant/30 rounded-sm text-center">
                  <span className="material-symbols-outlined text-gold-shimmer text-2xl mb-1">favorite</span>
                  <p className="font-display text-sm sm:text-base font-bold text-primary">Wedding</p>
                  <p className="text-[10px] text-on-surface-variant">Sakral &amp; Penuh Cinta</p>
                </div>
                <div className="p-4 bg-white border border-outline-variant/30 rounded-sm text-center">
                  <span className="material-symbols-outlined text-gold-shimmer text-2xl mb-1">business_center</span>
                  <p className="font-display text-sm sm:text-base font-bold text-primary">Event</p>
                  <p className="text-[10px] text-on-surface-variant">Rapi &amp; Berkelas</p>
                </div>
                <div className="p-4 bg-white border border-outline-variant/30 rounded-sm text-center">
                  <span className="material-symbols-outlined text-gold-shimmer text-2xl mb-1">cake</span>
                  <p className="font-display text-sm sm:text-base font-bold text-primary">Birthday</p>
                  <p className="text-[10px] text-on-surface-variant">Kreatif &amp; Meriah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Team Pillars */}
      <section className="bg-ivory-surface py-12 sm:py-16 md:py-20 border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-label-md text-secondary tracking-[0.2em] uppercase text-xs mb-2 block font-semibold">
              Prinsip Kerja
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary font-semibold">
              Pilar Dedikasi My Dream Organizer
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">auto_awesome</span>
              <h3 className="font-display text-base font-semibold text-primary">Konsep Tematik Kustom</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Kami merancang konsep visual, tata ruang, dan alur acara yang unik sesuai jati diri Anda. Pasti Nikahmu BEDA!
              </p>
            </div>
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">self_improvement</span>
              <h3 className="font-display text-base font-semibold text-primary">Ketenangan Klien</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Pendampingan menyeluruh dan personal concierge yang siap merespons kebutuhan Anda sehingga Anda bisa menikmati acara tanpa stres.
              </p>
            </div>
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">timer</span>
              <h3 className="font-display text-base font-semibold text-primary">Presisi Rundown</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Manajemen waktu yang disiplin dan koordinasi sinkron dengan katering, vendor dekorasi, audio, dan pengisi acara.
              </p>
            </div>
            <div className="bg-white p-6 border border-outline-variant/30 rounded-sm space-y-3 shadow-sm">
              <span className="material-symbols-outlined text-gold-shimmer text-3xl">handshake</span>
              <h3 className="font-display text-base font-semibold text-primary">Transparansi Nyata</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Rencana anggaran biaya (RAB) yang terbuka, fleksibel sesuai budget, tanpa biaya tak terduga di tengah jalan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Business & Location Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-outline-variant/30 rounded-sm p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="font-label-md text-secondary text-xs uppercase tracking-[0.2em] font-semibold block">
                  Informasi Resmi
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-primary font-semibold">
                  My Dream Organizer Jember
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                  Layanan resmi Wedding, Event &amp; Birthday Organizer di bawah naungan <strong>My Dream Group</strong>. Kami siap membantu Anda mewujudkan perayaan berkesan dengan standar eksekusi terbaik.
                </p>
                <div className="space-y-3 pt-2 text-xs sm:text-sm text-on-surface font-body">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0 mt-0.5">location_on</span>
                    <div>
                      <strong className="text-primary font-medium">Lokasi:</strong> Jember, Jawa Timur
                      <span className="block text-xs text-on-surface-variant/70">Melayani area Jember, Banyuwangi, Bondowoso, Lumajang, Situbondo &amp; sekitarnya.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0">chat</span>
                    <div>
                      <strong className="text-primary font-medium">WhatsApp:</strong>{' '}
                      <a href="https://wa.me/6281233779967" target="_blank" rel="noopener noreferrer" className="hover:text-gold-shimmer underline">
                        0812-3377-9967
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0">photo_camera</span>
                    <div>
                      <strong className="text-primary font-medium">Instagram:</strong>{' '}
                      <a href="https://instagram.com/mydreamorganizer" target="_blank" rel="noopener noreferrer" className="hover:text-gold-shimmer underline">
                        @mydreamorganizer
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold-shimmer text-xl flex-shrink-0">mail</span>
                    <div>
                      <strong className="text-primary font-medium">Email:</strong>{' '}
                      <a href="mailto:organizermydream@gmail.com" className="hover:text-gold-shimmer underline">
                        organizermydream@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-surface-container-low p-6 sm:p-8 rounded-sm border border-outline-variant/30 space-y-4 text-center">
                <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold block">
                  Konsultasi Langsung
                </span>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed font-light">
                  Ingin berdiskusi mengenai konsep acara atau request penawaran paket khusus? Hubungi tim concierge kami sekarang:
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi%20acara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[46px] w-full px-5 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-wider uppercase transition-colors rounded-sm font-bold shadow-sm"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    WhatsApp 0812-3377-9967
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
