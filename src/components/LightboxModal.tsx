import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { PortfolioImage } from '../data/images';

interface LightboxModalProps {
  images: PortfolioImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null) return null;

  const currentImage = images[currentIndex];
  const formattedCount = `${String(currentIndex + 1).padStart(2, '0')} / ${String(
    images.length
  ).padStart(2, '0')}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] bg-[#0a0a0c]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
        aria-modal="true"
        role="dialog"
      >
        {/* Top Header Controls */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37]">
              LOOKBOOK LIGHTBOX
            </span>
            <span className="text-xs font-mono text-white/40">|</span>
            <span className="text-xs font-mono text-[#f4f0ea]">{formattedCount}</span>
          </div>

          <button
            onClick={onClose}
            className="p-3 text-[#f4f0ea] hover:text-[#d4af37] bg-white/5 hover:bg-white/10 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Center Image Container */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-6 z-20 p-3 text-[#f4f0ea] hover:text-[#d4af37] bg-black/50 hover:bg-black/80 border border-white/10 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="max-h-[75vh] max-w-[90vw] sm:max-w-[80vw] flex flex-col items-center"
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-[68vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-white/10"
            />
          </motion.div>

          <button
            onClick={onNext}
            className="absolute right-2 sm:right-6 z-20 p-3 text-[#f4f0ea] hover:text-[#d4af37] bg-black/50 hover:bg-black/80 border border-white/10 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Image Metadata */}
        <div className="z-10 bg-[#121216]/80 p-4 rounded-sm border border-white/10 max-w-2xl mx-auto w-full text-center">
          <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
            {currentImage.subtitle}
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#f4f0ea] mt-0.5">
            {currentImage.title}
          </h3>
          <p className="text-xs font-mono text-[#a3a09b] mt-1">{currentImage.caption}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
