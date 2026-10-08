import React from 'react';

export default function Footer() {
  return (
    <footer id="tentang-footer" className="bg-[#0b111e] text-on-primary border-t border-white/10">
      {/* MOBILE MINIMALIST FOOTER (< 768px) */}
      <div className="md:hidden px-4 py-8 space-y-6 text-center">
        {/* Logo & Tagline */}
        <div className="space-y-3">
          <a href="/" className="inline-flex items-center gap-2.5" aria-label="My Dream Organizer Jember">
            <div className="h-10 w-10 rounded-lg overflow-hidden bg-black border border-amber-400/40 p-0.5 flex items-center justify-center mx-auto">
              <img
                src="/images/logo.webp"
                alt="My Dream Organizer"
                className="w-full h-full object-contain"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-base font-bold tracking-wider text-white">
                MY DREAM ORGANIZER
              </span>
              <span className="font-label-md text-[8px] tracking-[0.2em] text-gold-shimmer uppercase font-semibold">
                WEDDING | EVENT | BIRTHDAY
              </span>
            </div>
          </a>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/5 border border-gold-shimmer/30 rounded-full text-xs text-gold-shimmer font-semibold">
            <span>✨</span>
            <span className="text-white italic tracking-wide">“Pasti Nikahmu BEDA!”</span>
          </div>

          <p className="font-body text-xs text-white/70 italic font-light">
            Part of My Dream Group • Jember, Jawa Timur
          </p>
        </div>

        {/* Minimalist Quick Link Chips */}
        <div className="flex flex-wrap justify-center gap-2 text-xs font-body">
          <a href="/paket" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Paket &amp; Layanan
          </a>
          <a href="/undangan" className="px-3 py-1.5 bg-white/5 border border-gold-shimmer/40 rounded-full text-gold-shimmer hover:text-white">
            Digital Invitation ✨
          </a>
          <a href="/galeri" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Portfolio
          </a>
          <a href="/wedding-show" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Wedding Show
          </a>
          <a href="/test-food" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Test Food
          </a>
          <a href="/tips" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Tips
          </a>
          <a href="/tentang" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-gold-shimmer">
            Tentang
          </a>
        </div>

        {/* Contact info on Mobile */}
        <div className="space-y-2.5 pt-1">
          <div className="flex flex-col gap-2 text-xs font-body text-white/90">
            <a
              href="https://wa.me/6281233779967"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span><strong>WhatsApp:</strong> 0812-3377-9967</span>
            </a>
            <a
              href="https://instagram.com/mydreamorganizer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-white/85 hover:text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">photo_camera</span>
              <span><strong>Instagram:</strong> @mydreamorganizer</span>
            </a>
            <a
              href="mailto:organizermydream@gmail.com"
              className="flex items-center justify-center gap-1.5 text-white/75 hover:text-gold-shimmer hover:underline"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              <span><strong>Email:</strong> organizermydream@gmail.com</span>
            </a>
            <div className="flex items-center justify-center gap-1.5 text-white/70">
              <span className="material-symbols-outlined text-base text-gold-shimmer">location_on</span>
              <span>Jember, Jawa Timur</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi%20acara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gold-shimmer text-primary font-label-md text-xs tracking-wider uppercase font-bold rounded-full shadow-md"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>

        {/* Compact Address & Copyright */}
        <div className="pt-4 border-t border-white/10 text-[11px] text-white/50 font-body space-y-1">
          <p>My Dream Organizer • Part of My Dream Group</p>
          <p>&copy; {new Date().getFullYear()} My Dream Organizer. Hak Cipta Dilindungi.</p>
        </div>
      </div>

      {/* DESKTOP FOOTER (>= 768px) */}
      <div className="hidden md:block max-w-container-max mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="/" className="inline-flex items-center gap-3.5 group" aria-label="My Dream Organizer Jember">
              <div className="h-12 w-12 rounded-xl overflow-hidden bg-black border border-amber-400/40 p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src="/images/logo.webp"
                  alt="My Dream Organizer"
                  className="w-full h-full object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-xl font-bold tracking-wider text-white group-hover:text-gold-shimmer transition-colors">
                  MY DREAM ORGANIZER
                </span>
                <span className="font-label-md text-[10px] tracking-[0.22em] text-gold-shimmer uppercase font-semibold">
                  WEDDING | EVENT | BIRTHDAY
                </span>
              </div>
            </a>

            <div className="inline-block px-3.5 py-1 bg-white/5 border border-gold-shimmer/30 rounded-md">
              <p className="font-display text-sm text-gold-shimmer italic font-semibold">
                “Pasti Nikahmu BEDA!”
              </p>
            </div>

            <p className="font-body text-sm text-white/75 leading-relaxed max-w-sm font-light">
              Bukan sekadar mengatur acara, tetapi membantu menciptakan momen yang berkesan. Melayani wedding, event perusahaan, dan perayaan birthday di Jember &amp; Jawa Timur.
            </p>

            <p className="text-xs text-white/50 font-body">
              Part of <strong className="text-white/80">My Dream Group</strong>
            </p>

            <div className="flex gap-3 pt-2">
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://instagram.com/mydreamorganizer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @mydreamorganizer"
              >
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="mailto:organizermydream@gmail.com"
                aria-label="Email My Dream Organizer"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold-shimmer hover:text-gold-shimmer transition-colors rounded-sm text-white/80"
                href="https://wa.me/6281233779967"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp My Dream Organizer"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-label-md text-xs text-gold-shimmer uppercase tracking-[0.2em] font-semibold">
              Layanan &amp; Acara
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/paket">
                  Paket Wedding Organizer
                </a>
              </li>
              <li>
                <a className="text-gold-shimmer hover:underline transition-colors block py-0.5 font-medium" href="/undangan">
                  Undangan Digital Premium ✨
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/paket">
                  Corporate &amp; Gala Event
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/paket">
                  Birthday &amp; Sweet 17th
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/galeri">
                  Portfolio Dokumentasi
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/wedding-show">
                  Wedding Showcase &amp; Expo
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-gold-shimmer transition-colors block py-0.5" href="/test-food">
                  Jadwal Test Food Katering
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-label-md text-xs text-gold-shimmer uppercase tracking-[0.2em] font-semibold">
              Kontak &amp; Lokasi Resmi
            </h4>
            
            <div className="space-y-3 pt-1 text-sm font-body">
              <a
                href="https://wa.me/6281233779967"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">chat</span>
                <span><strong>WhatsApp:</strong> 0812-3377-9967</span>
              </a>

              <a
                href="mailto:organizermydream@gmail.com"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">mail</span>
                <span><strong>Email:</strong> organizermydream@gmail.com</span>
              </a>

              <a
                href="https://instagram.com/mydreamorganizer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/85 hover:text-gold-shimmer transition-colors"
              >
                <span className="material-symbols-outlined text-base text-gold-shimmer">photo_camera</span>
                <span><strong>Instagram:</strong> @mydreamorganizer</span>
              </a>

              <div className="flex items-start gap-2.5 text-white/85 pt-1">
                <span className="material-symbols-outlined text-base text-gold-shimmer flex-shrink-0 mt-0.5">location_on</span>
                <div>
                  <strong className="text-white">Lokasi Operasional:</strong>
                  <p className="text-white/70 text-xs mt-0.5">Jember, Jawa Timur</p>
                  <span className="text-[11px] text-white/50 block">Melayani area Jember, Lumajang, Banyuwangi, Bondowoso, Situbondo &amp; sekitarnya.</span>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi%20wedding%20%26%20event"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-wider uppercase font-bold rounded-sm shadow-md transition-colors"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-white/50 font-body">
          <p>&copy; {new Date().getFullYear()} My Dream Organizer (Part of My Dream Group). Hak Cipta Dilindungi.</p>
          <p>Wedding, Event &amp; Birthday Organizer &bull; “Pasti Nikahmu BEDA!”</p>
        </div>
      </div>
    </footer>
  );
}
