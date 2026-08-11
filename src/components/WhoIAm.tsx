import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT, PERSONAL_INFO } from '../data/portfolioData';
import { Monogram3D } from './Monogram3D';
import { Sparkles, Radio, Theater } from 'lucide-react';

export const WhoIAm: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#0a0a0c] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#d4af37]" />
              <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase">
                PHILOSOPHY & ORIGINS
              </span>
            </div>

            <h2 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-[#f4f0ea]">
              {ABOUT_TEXT.heading}
            </h2>

            <p className="text-base sm:text-xl text-[#a3a09b] font-sans leading-relaxed">
              {ABOUT_TEXT.paragraph1}
            </p>

            <p className="text-base sm:text-lg text-[#f4f0ea]/90 font-sans leading-relaxed border-l-2 border-[#d4af37] pl-6 py-2">
              {ABOUT_TEXT.paragraph2}
            </p>

            {/* Pillar badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-[#121216] border border-white/10 rounded-sm flex items-start space-x-3">
                <Theater className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-[#f4f0ea] uppercase">
                    STAGE THEATRE
                  </h4>
                  <p className="text-xs text-[#a3a09b] mt-1">
                    Ravindra Natya Grah live plays & dramatic acts
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#121216] border border-white/10 rounded-sm flex items-start space-x-3">
                <Radio className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-[#f4f0ea] uppercase">
                    VOICE & RADIO
                  </h4>
                  <p className="text-xs text-[#a3a09b] mt-1">
                    Red FM Junior Voice-Over Artist & RJ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Monogram & Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <Monogram3D />

            <div className="p-6 bg-[#121216] border border-white/10 rounded-sm relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
                    CORE PROFILE
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#f4f0ea]">
                    NATURAL ACTOR
                  </h3>
                </div>
                <Sparkles className="w-6 h-6 text-[#d4af37]/60" />
              </div>
              <p className="text-xs font-mono text-[#a3a09b] mt-3">
                Location: {PERSONAL_INFO.location} • Height: {PERSONAL_INFO.height}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
