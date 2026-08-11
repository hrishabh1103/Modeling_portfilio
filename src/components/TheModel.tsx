import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const MODEL_SPREADS = [
  {
    image: '/images/fullbody-chandelier.jpeg',
    title: 'Presence.',
    subtitle: "6'1\" Frame & Commanding Stance",
    desc: 'High impact full-body stance highlighting tall structure and structured tailoring.',
  },
  {
    image: '/images/beach-linen-lifestyle.jpg',
    title: 'Resortwear.',
    subtitle: 'High Fashion Coastal Luxury',
    desc: 'Sunlit coastal editorial featuring off-white linen shirt and resortwear fluid posture.',
  },
  {
    image: '/images/ethnic-kurta-waterfall.jpg',
    title: 'Traditional.',
    subtitle: 'Royal Ethnic Couture',
    desc: 'Rich navy embroidered kurta amidst serene water reflection and forestry.',
  },
  {
    image: '/images/cruiser-bike-night.jpg',
    title: 'Attitude.',
    subtitle: 'Night Cruiser Lifestyle',
    desc: 'Rugged action aesthetic paired with black cruiser motorcycle.',
  },
];

export const TheModel: React.FC = () => {
  return (
    <section id="model" className="py-28 bg-[#0a0a0c] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase flex items-center space-x-2">
              <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>FASHION & EDITORIAL</span>
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl font-bold text-[#f4f0ea] mt-2">
              THE MODEL
            </h2>
          </div>
          <div className="flex items-center space-x-4 text-xs font-mono text-[#a3a09b]">
            <span>HEIGHT: <strong className="text-[#f4f0ea]">6'1"</strong></span>
            <span>•</span>
            <span>PHYSIQUE: <strong className="text-[#f4f0ea]">FIT</strong></span>
            <span>•</span>
            <span>BASE: <strong className="text-[#f4f0ea]">INDORE</strong></span>
          </div>
        </div>

        {/* Editorial Spreads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MODEL_SPREADS.map((spread, idx) => (
            <motion.div
              key={spread.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative rounded-sm overflow-hidden border border-white/10 bg-[#121216]"
              data-cursor="VIEW"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={spread.image}
                  alt={`Hrishabh Gupta Modeling - ${spread.title}`}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
                  {spread.subtitle}
                </span>
                <h3 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#f4f0ea] group-hover:text-[#d4af37] transition-colors">
                  {spread.title}
                </h3>
                <p className="text-xs text-[#a3a09b] font-mono leading-relaxed pt-1">
                  {spread.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
