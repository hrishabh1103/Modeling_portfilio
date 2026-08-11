import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-[#070709] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Monogram Branding */}
        <div>
          <div className="font-serif text-5xl font-extrabold text-[#d4af37]">
            HG
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#f4f0ea] mt-1">
            {PERSONAL_INFO.name}
          </h3>
          <p className="text-xs font-mono text-[#a3a09b] tracking-widest mt-1">
            {PERSONAL_INFO.title} • {PERSONAL_INFO.shortLocation}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#a3a09b]">
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4af37] transition-colors"
          >
            INSTAGRAM
          </a>
          <span>•</span>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4af37] transition-colors"
          >
            LINKEDIN
          </a>
          <span>•</span>
          <a
            href={PERSONAL_INFO.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4af37] transition-colors"
          >
            VERCEL PORTFOLIO
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs font-mono text-[#a3a09b]/60">
          © 2026 {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
