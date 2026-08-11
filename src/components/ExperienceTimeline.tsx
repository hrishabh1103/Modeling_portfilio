import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { JOURNEY_TIMELINE } from '../data/portfolioData';
import { Theater, Radio, MapPin, CheckCircle } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="experience" className="py-28 bg-[#0a0a0c] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase">
            LIVE THEATRE & BROADCAST CREDENTIALS
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold text-[#f4f0ea] mt-2">
            THE JOURNEY
          </h2>
        </div>

        {/* Timeline Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline Selector Column */}
          <div className="lg:col-span-5 space-y-4">
            {JOURNEY_TIMELINE.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <motion.div
                  key={item.venue}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`p-6 rounded-sm border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#18181c] border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                      : 'bg-[#121216] border-white/10 hover:border-white/20'
                  }`}
                  data-cursor="OPEN"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-[#d4af37]">
                      {item.period}
                    </span>
                    {idx === 0 ? (
                      <Theater className="w-5 h-5 text-[#d4af37]" />
                    ) : (
                      <Radio className="w-5 h-5 text-[#d4af37]" />
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#f4f0ea] mt-2">
                    {item.venue}
                  </h3>

                  <p className="text-xs font-mono text-[#a3a09b] mt-1">
                    {item.role}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline Details Display Column */}
          <div className="lg:col-span-7 p-8 bg-[#121216] border border-white/10 rounded-sm relative min-h-[360px]">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                  EXPANDED EXPERIENCE
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#f4f0ea] mt-1">
                  {JOURNEY_TIMELINE[activeIdx].venue}
                </h3>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#a3a09b] mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{JOURNEY_TIMELINE[activeIdx].role}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-[#f4f0ea] uppercase">
                  KEY HIGHLIGHTS & PERFORMANCE OUTCOMES:
                </h4>
                <ul className="space-y-3">
                  {JOURNEY_TIMELINE[activeIdx].highlights.map((point) => (
                    <li key={point} className="flex items-start space-x-3 text-sm text-[#a3a09b]">
                      <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
