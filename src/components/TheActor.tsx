import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, Sparkles } from 'lucide-react';

const ACTOR_KEYWORDS = [
  'NATURAL',
  'EXPRESSIVE',
  'VERSATILE',
  'COMEDIC',
  'CHARACTER-DRIVEN',
];

export const TheActor: React.FC = () => {
  return (
    <section id="actor" className="py-28 bg-[#0a0a0c] relative border-b border-white/5 overflow-hidden">
      {/* Background Sunset Boat Visual (Artistic Overlay) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/images/boat-sunset-silhouette.jpeg"
          alt="Sunset Boat Silhouette"
          className="w-full h-full object-cover filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-[#0a0a0c]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase flex items-center space-x-2">
            <Clapperboard className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>PERFORMANCE DISCIPLINE</span>
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold text-[#f4f0ea] mt-2">
            THE ACTOR
          </h2>
        </div>

        {/* Large Typography Keywords */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 my-8 border-y border-white/10 py-10">
          {ACTOR_KEYWORDS.map((word, idx) => (
            <React.Fragment key={word}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f4f0ea] hover:text-[#d4af37] transition-colors cursor-default"
              >
                {word}
              </motion.span>
              {idx < ACTOR_KEYWORDS.length - 1 && (
                <span className="text-[#d4af37] text-2xl font-serif">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Dual Card Showcase: Natural Expression & Stage Energy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-12">
          {/* Face Visible Photo 1: Cowboy hat casual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 rounded-sm overflow-hidden border border-white/10 bg-[#121216]"
          >
            <img
              src="/images/casual-cowboy-hat.jpeg"
              alt="Hrishabh Gupta Natural Acting Expression"
              className="w-full h-80 object-cover filter contrast-105"
              data-cursor="VIEW"
            />
            <div className="p-6">
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
                EXPRESSION & TIMING
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#f4f0ea] mt-1">
                NATURAL SCREEN ACTING
              </h3>
              <p className="text-xs text-[#a3a09b] mt-2 font-sans">
                Focused on believable micro-expressions, subtle reactions, and grounded authenticity in front of the lens.
              </p>
            </div>
          </motion.div>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 space-y-6"
          >
            <p className="text-xl sm:text-2xl font-serif italic text-[#f4f0ea] leading-relaxed">
              "From live theatre to voice performance, Hrishabh approaches performance through expression, timing and character."
            </p>
            <p className="text-sm text-[#a3a09b] leading-relaxed">
              Stage performance at Ravindra Natya Grah built his command over vocal projection and physical comedy, while radio performance at Red FM sharpened his improvised character voices and dialogue modulation.
            </p>

            <div className="pt-4 flex items-center space-x-4">
              <a
                href="#range"
                className="px-6 py-3 bg-[#121216] border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black text-xs font-mono tracking-widest transition-all duration-300 rounded-sm"
                data-cursor="OPEN"
              >
                EXPLORE MY RANGE
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
