import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_IMAGES } from '../data/images';
import { LightboxModal } from './LightboxModal';
import { Maximize2, Sparkles } from 'lucide-react';

export const Lookbook: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? PORTFOLIO_IMAGES.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === PORTFOLIO_IMAGES.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="lookbook" className="py-28 bg-[#0a0a0c] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>EDITORIAL ARCHIVE & PORTFOLIO</span>
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl font-bold text-[#f4f0ea] mt-2">
              THE LOOKBOOK
            </h2>
          </div>
          <p className="text-xs font-mono text-[#a3a09b] max-w-md">
            An asymmetric visual presentation showcasing stance, expressions, character personas, and high-fashion styling. Click any frame for fullscreen inspection.
          </p>
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {PORTFOLIO_IMAGES.map((img, idx) => {
            // Determine column span for editorial variety
            let colSpan = 'md:col-span-4';
            if (idx === 0) colSpan = 'md:col-span-8'; // Trenchcoat hero primary
            if (idx === 1) colSpan = 'md:col-span-4'; // Golden hour suit
            if (idx === 2) colSpan = 'md:col-span-6'; // Chandelier full body
            if (idx === 3) colSpan = 'md:col-span-6'; // Night balcony
            if (idx === 4) colSpan = 'md:col-span-4'; // Blue corporate suit
            if (idx === 5) colSpan = 'md:col-span-4'; // Cowboy hat
            if (idx === 6) colSpan = 'md:col-span-4'; // English gaon
            if (idx === 7) colSpan = 'md:col-span-8'; // Boat sunset silhouette

            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (idx % 3) * 0.1 }}
                onClick={() => setLightboxIndex(idx)}
                className={`${colSpan} group relative rounded-sm overflow-hidden border border-white/10 bg-[#121216] cursor-pointer`}
                data-cursor="VIEW"
              >
                <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover min-h-[380px] max-h-[600px] filter saturate-90 contrast-105 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700 ease-out"
                  />
                  {/* Subtle Gradient Reveal Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block">
                      {img.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#f4f0ea] mt-0.5 group-hover:text-[#d4af37] transition-colors">
                      {img.title}
                    </h3>
                  </div>
                  <div className="p-3 bg-white/10 group-hover:bg-[#d4af37] group-hover:text-black text-[#f4f0ea] rounded-full transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal Integration */}
      <LightboxModal
        images={PORTFOLIO_IMAGES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
