import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Instagram, ArrowUpRight, Sparkles } from 'lucide-react';

export const CastingCTA: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0a0c] relative border-b border-white/5 overflow-hidden">
      {/* Background Subtle Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono tracking-[0.3em] uppercase rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CASTING & PRODUCTION INQUIRIES</span>
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-extrabold text-[#f4f0ea] tracking-tight uppercase leading-none"
        >
          LOOKING FOR A CHARACTER?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-3xl sm:text-5xl italic text-gold-gradient"
        >
          LET'S CREATE ONE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-6"
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-10 py-5 bg-[#d4af37] text-black font-mono font-bold text-xs tracking-[0.25em] hover:bg-[#f3e5ab] transition-all duration-300 rounded-sm shadow-xl shadow-[#d4af37]/20 uppercase inline-flex items-center space-x-3"
            data-cursor="OPEN"
          >
            <Mail className="w-4 h-4" />
            <span>CONTACT FOR CASTING</span>
          </a>

          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border border-white/20 hover:border-[#d4af37] text-[#f4f0ea] hover:text-[#d4af37] font-mono text-xs tracking-[0.25em] transition-all duration-300 rounded-sm uppercase inline-flex items-center space-x-3"
            data-cursor="VISIT"
          >
            <Instagram className="w-4 h-4" />
            <span>INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Quick Contact Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="pt-10 flex flex-wrap justify-center gap-8 text-xs font-mono text-[#a3a09b]"
        >
          <a href={`tel:+91${PERSONAL_INFO.phone}`} className="hover:text-[#d4af37] transition-colors flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{PERSONAL_INFO.formattedPhone}</span>
          </a>
          <span>•</span>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#d4af37] transition-colors flex items-center space-x-2">
            <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
