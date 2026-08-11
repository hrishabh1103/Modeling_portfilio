import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mic2, Info } from 'lucide-react';

const CHARACTERS_MARQUEE = [
  'AMITABH BACHCHAN',
  'SUNNY DEOL',
  'SOORMA BHOPALI',
  'RAJESH ARORA',
  'COMEDY CHARACTERS',
  'ORIGINAL CARICATURES',
  'RADIO SKETCH VOICES',
];

export const MimicryComedy: React.FC = () => {
  return (
    <section className="py-28 bg-[#0a0a0c] relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase flex items-center space-x-2">
              <Mic2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>VOCAL MODULATION & IMPERSONATION STYLES</span>
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl font-bold text-[#f4f0ea] mt-2 uppercase">
              VOICES. CHARACTERS. PERSONALITIES.
            </h2>
            <p className="text-lg font-serif italic text-[#d4af37] mt-2">
              One performer. Many personalities.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#a3a09b]">
            <Info className="w-4 h-4 text-[#d4af37]" />
            <span>STYLISTIC PERFORMANCE REPERTOIRE</span>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Typography Ticker */}
      <div className="relative w-full py-8 bg-[#121216] border-y border-white/10 overflow-hidden">
        <div className="flex w-max animate-marquee space-x-8">
          {[...CHARACTERS_MARQUEE, ...CHARACTERS_MARQUEE, ...CHARACTERS_MARQUEE].map(
            (char, idx) => (
              <div key={idx} className="flex items-center space-x-8">
                <span className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f0ea] whitespace-nowrap hover:text-[#d4af37] transition-colors cursor-default">
                  {char}
                </span>
                <span className="text-[#d4af37] text-2xl font-serif">•</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Visual Feature Card: English Gaon Pose */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#121216] border border-white/10 p-8 rounded-sm">
          <div className="md:col-span-5 rounded-sm overflow-hidden border border-white/10">
            <img
              src="/images/english-gaon-pose.jpeg"
              alt="Hrishabh Gupta Performing Stage Pose"
              className="w-full h-80 object-cover filter contrast-105"
              data-cursor="VIEW"
            />
          </div>
          <div className="md:col-span-7 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
              COMIC TIMING & STAGE VIGOR
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#f4f0ea]">
              CHARACTER IMPROVISATION
            </h3>
            <p className="text-sm text-[#a3a09b] leading-relaxed">
              Hrishabh performs mimicry inspired by iconic voices, regional accents, and comic tropes. Whether adapting classic theatrical personalities or inventing original comedic caricatures, every vocal shift is matched with expressive facial dynamics.
            </p>
            <p className="text-xs font-mono text-[#d4af37]/80 pt-2 border-t border-white/5">
              *Note: Impersonation styles are presented strictly as demonstration of mimicry performance range, and do not imply formal endorsement or collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
