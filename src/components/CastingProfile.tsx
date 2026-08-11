import React from 'react';
import { motion } from 'framer-motion';
import { CASTING_STATS, PERSONAL_INFO } from '../data/portfolioData';
import { CheckCircle2, UserCheck } from 'lucide-react';

export const CastingProfile: React.FC = () => {
  return (
    <section id="casting-profile" className="py-24 bg-[#0a0a0c] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase">
              VITAL METRICS & SPECIFICATIONS
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#f4f0ea] mt-2">
              CASTING PROFILE
            </h2>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#a3a09b]">
            <UserCheck className="w-4 h-4 text-[#d4af37]" />
            <span>AVAILABLE FOR FILM, OTT, THEATRE & COMMERCIAL PROJECTS</span>
          </div>
        </div>

        {/* Grid Layout: Headshot + Stat Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Headshot Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative group rounded-sm overflow-hidden border border-white/10 bg-[#121216]"
          >
            <img
              src="/images/hero-cityscape-suit.png"
              alt="Hrishabh Gupta Professional Portrait"
              className="w-full h-full object-cover min-h-[420px] filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              data-cursor="VIEW"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
                PROFESSIONAL PORTRAIT
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#f4f0ea]">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono text-[#a3a09b] mt-1">
                Refined Lead Demeanor & Screen Presence
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {CASTING_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-[#121216] border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300 rounded-sm flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block mb-2">
                    {stat.label}
                  </span>
                  <div className="font-serif text-3xl font-bold text-[#f4f0ea] group-hover:text-[#d4af37] transition-colors">
                    {stat.value}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#a3a09b]">
                  <span>{stat.sub}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]/60" />
                </div>
              </motion.div>
            ))}

            {/* Quick Reel / Portfolio Access Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 bg-gradient-to-br from-[#18181c] to-[#d4af37]/10 border border-[#d4af37]/30 rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block mb-2">
                  VERIFIED LINK
                </span>
                <div className="font-serif text-2xl font-bold text-[#f4f0ea]">
                  PORTFOLIO SITE
                </div>
                <p className="text-xs font-mono text-[#a3a09b] mt-2">
                  Explore full modeling & performance archives online.
                </p>
              </div>

              <a
                href={PERSONAL_INFO.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center py-2 px-4 bg-[#d4af37] text-black font-mono text-xs font-bold tracking-widest rounded-sm hover:bg-[#f3e5ab] transition-colors"
                data-cursor="VISIT"
              >
                VISIT VERCEL APP
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
