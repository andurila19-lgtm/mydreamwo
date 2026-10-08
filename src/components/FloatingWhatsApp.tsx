'use client';

import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281233779967?text=Halo%20My%20Dream%20Organizer%20Jember%2C%20saya%20ingin%20konsultasi%20wedding%20%26%20event"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
      aria-label="Konsultasi WhatsApp My Dream Organizer"
    >
      <span className="material-symbols-outlined text-xl sm:text-2xl">chat</span>
    </a>
  );
}
