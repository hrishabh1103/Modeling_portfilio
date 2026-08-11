import React from 'react';
import { motion } from 'framer-motion';
import { HERO_IMAGE } from '../data/images';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Film, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 bg-[#0a0a0c]"
    >
      {/* Background Image with Cinematic Vignette & Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          className="w-full h-full object-cover object-top filter brightness-90 contrast-105"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_#0a0a0c_90%)]" />
      </div>

      {/* Floating Gold Dust Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/5 w-2 h-2 bg-[#d4af37] rounded-full blur-[1px]"
        />
        <motion.div
          animate={{ y: [30, -30, 30], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#d4af37] rounded-full blur-[2px]"
        />
      </div>

      {/* Content Overlay Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full py-16 flex flex-col justify-between min-h-[85vh]">
        {/* Top Meta Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6"
        >
          <div className="flex items-center space-x-3 text-xs font-mono tracking-[0.25em] text-[#d4af37] uppercase">
            <Film className="w-4 h-4 text-[#d4af37]" />
            <span>OFFICIAL CASTING PORTFOLIO</span>
          </div>

          <div className="flex items-center space-x-6 text-xs font-mono tracking-widest text-[#a3a09b]">
            <span>{PERSONAL_INFO.shortLocation}</span>
            <span className="text-[#d4af37]">•</span>
            <span className="text-[#f4f0ea] font-semibold">{PERSONAL_INFO.height}</span>
          </div>
        </motion.div>

        {/* Main Cinematic Typography */}
        <div className="my-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center space-x-2 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-mono tracking-[0.3em] uppercase rounded-full">
              <Sparkles className="w-3 h-3" />
              <span>NATURAL ACTOR • CHARACTER PERFORMER • VOICE ARTIST</span>
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight leading-none text-[#f4f0ea] uppercase"
            >
              HRISHABH
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight leading-none text-gold-gradient uppercase -mt-2 sm:-mt-6"
            >
              GUPTA
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg sm:text-2xl font-mono tracking-[0.3em] text-[#f4f0ea]/90 uppercase mt-6"
          >
            {PERSONAL_INFO.title}
          </motion.p>
        </div>

        {/* Bottom CTA Row & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10"
        >
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#lookbook"
              className="px-8 py-4 bg-[#d4af37] text-black font-mono font-bold text-xs tracking-[0.2em] hover:bg-[#f3e5ab] transition-all duration-300 rounded-sm shadow-lg shadow-[#d4af37]/20 uppercase"
              data-cursor="VIEW"
            >
              VIEW PORTFOLIO
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 hover:border-[#d4af37] text-[#f4f0ea] hover:text-[#d4af37] font-mono text-xs tracking-[0.2em] transition-all duration-300 rounded-sm uppercase"
              data-cursor="OPEN"
            >
              CONTACT FOR CASTING
            </a>
          </div>

          <a
            href="#casting-profile"
            className="group flex items-center space-x-3 text-xs font-mono tracking-[0.2em] text-[#a3a09b] hover:text-[#d4af37] transition-colors"
            data-cursor="OPEN"
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4 text-[#d4af37]" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
