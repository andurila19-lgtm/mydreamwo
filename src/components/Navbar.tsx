'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/tentang' },
    { name: 'Services', href: '/paket' },
    { name: 'Portfolio', href: '/galeri' },
    { name: 'Digital Invitation', href: '/undangan' },
    { name: 'Contact', href: 'https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      {/* DESKTOP NAVBAR (>= 1024px) */}
      <nav
        id="desktopNav"
        aria-label="Navigasi Desktop"
        className={`hidden lg:block w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-2.5'
            : 'bg-transparent border-b border-white/15 py-3.5'
        }`}
      >
        <div className="max-w-container-max mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="/"
            className="flex items-center gap-3 py-0.5 focus:outline-none rounded group"
            aria-label="My Dream Organizer - Beranda"
          >
            <div className="h-11 w-11 rounded-lg overflow-hidden bg-black border border-amber-400/40 shadow-md group-hover:scale-105 transition-all p-0.5 flex items-center justify-center">
              <Image
                src="/images/logo.webp"
                alt="My Dream Organizer"
                className="w-full h-full object-contain"
                width={44}
                height={44}
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-lg xl:text-xl font-bold tracking-wider text-white group-hover:text-gold-shimmer transition-colors leading-tight">
                MY DREAM
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-label-md text-[9px] tracking-[0.22em] text-gold-shimmer uppercase font-semibold">
                  ORGANIZER
                </span>
                <span className="text-[8px] text-white/50 tracking-wider">
                  • JEMBER
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isExternal = link.href.startsWith('http');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={`font-body text-sm tracking-wide transition-all py-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${
                    isActive
                      ? 'text-gold-shimmer font-semibold border-b-2 border-gold-shimmer'
                      : link.name === 'Digital Invitation'
                      ? 'text-gold-shimmer/90 hover:text-gold-shimmer font-medium'
                      : 'text-white/90 hover:text-gold-shimmer font-normal'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi%20wedding%20%26%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[42px] px-6 bg-gold-shimmer hover:bg-secondary hover:text-white text-primary font-label-md text-xs tracking-widest uppercase transition-colors rounded-sm font-semibold shadow-md"
            >
              KONSULTASI
            </a>
          </div>
        </div>
      </nav>

      {/* MOBILE & TABLET NAVBAR (< 1024px) */}
      <div className="lg:hidden px-3 pt-2">
        <nav
          id="mobileNav"
          className="bg-[#0f172a]/95 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-full flex items-center justify-between shadow-lg"
          aria-label="Navigasi Utama Mobile"
        >
          {/* Logo Mobile */}
          <a href="/" className="flex items-center gap-2" aria-label="My Dream Organizer Jember">
            <div className="h-8 w-8 rounded-lg overflow-hidden bg-black border border-amber-400/30 p-0.5 flex items-center justify-center">
              <Image
                src="/images/logo.webp"
                alt="My Dream Organizer"
                className="w-full h-full object-contain"
                width={32}
                height={32}
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-sm font-bold tracking-wider text-white leading-none">
                MY DREAM
              </span>
              <span className="font-label-md text-[7.5px] tracking-[0.18em] text-gold-shimmer uppercase font-semibold">
                ORGANIZER
              </span>
            </div>
          </a>

          {/* Action & Hamburger Button */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-1.5 bg-gold-shimmer text-primary font-label-md text-[10.5px] tracking-wider uppercase rounded-full font-bold shadow-xs"
            >
              KONSUL
            </a>
            <button
              className="p-2 text-white hover:text-gold-shimmer focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Tutup Navigasi' : 'Buka Navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-2xl text-gold-shimmer">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mt-1.5 bg-[#0f172a] border border-white/15 rounded-2xl p-4 flex flex-col gap-1 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between min-h-[44px] px-4 py-2.5 text-sm rounded-xl font-medium transition-colors ${
                    isActive
                      ? 'bg-white/10 text-gold-shimmer font-semibold border-l-2 border-gold-shimmer'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="material-symbols-outlined text-base text-gold-shimmer/70">
                    chevron_right
                  </span>
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi%20wedding%20%26%20event"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 min-h-[46px] w-full bg-gold-shimmer text-primary font-label-md text-xs tracking-widest uppercase rounded-xl font-bold shadow-md"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                KONSULTASI VIA WHATSAPP
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
