import React from 'react';
import { motion } from 'framer-motion';
import { PERFORMANCE_RANGE } from '../data/portfolioData';
import { Mic, Drama, Theater, Sparkles, Smile, Info } from 'lucide-react';

export const PerformanceRange: React.FC = () => {
  return (
    <section id="range" className="py-28 bg-[#0a0a0c] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>VERSATILITY & CAPABILITIES</span>
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl font-bold text-[#f4f0ea] mt-2">
              MY RANGE
            </h2>
          </div>
          <p className="text-xs font-mono text-[#a3a09b] max-w-md">
            From subtle emotional screen portrayal to high-energy stage comedy, mimicry caricatures, and broadcast voice modulation.
          </p>
        </div>

        {/* Range Items Accordion / Cards */}
        <div className="space-y-6">
          {PERFORMANCE_RANGE.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 bg-[#121216] border border-white/10 hover:border-[#d4af37]/50 rounded-sm transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* ID & Title */}
                <div className="flex items-start space-x-6 lg:w-1/3">
                  <span className="font-serif text-3xl font-bold text-[#d4af37]">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#f4f0ea] group-hover:text-[#d4af37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-[#a3a09b] mt-1">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                {/* Description & Tags / Personalities */}
                <div className="lg:w-2/3 space-y-4">
                  <p className="text-sm text-[#f4f0ea]/80 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Personality Mimicry Badges */}
                  {item.personalities && (
                    <div className="pt-2">
                      <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block mb-3">
                        FEATURED MIMICRY STYLES / CARICATURES:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.personalities.map((p) => (
                          <span
                            key={p}
                            className="px-3 py-1.5 bg-[#1a1a22] border border-[#d4af37]/30 text-[#f4f0ea] text-xs font-mono rounded-sm"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                      {item.disclaimer && (
                        <div className="flex items-center space-x-2 text-[11px] font-mono text-[#a3a09b] mt-3">
                          <Info className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span>{item.disclaimer}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-mono text-[#a3a09b] rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
