import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicLoaderProps {
  onComplete: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep total loader time strictly ~1.2s
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // allow curtain exit animation to finish
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const textLetters = "HRISHABH GUPTA".split("");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0c] flex flex-col items-center justify-center overflow-hidden px-4"
        >
          {/* Subtle gold glow in background */}
          <div className="absolute w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top category indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase mb-6"
          >
            ACTOR • MODEL • PERFORMER
          </motion.div>

          {/* Staggered Title Reveal */}
          <div className="flex overflow-hidden">
            {textLetters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.03,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className={`font-serif text-3xl sm:text-5xl md:text-7xl font-bold tracking-widest text-[#f4f0ea] ${
                  char === " " ? "mr-4" : ""
                }`}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="w-48 md:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-6"
          />

          {/* Location badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.6 }}
            className="text-xs font-mono tracking-[0.25em] text-[#f4f0ea] mt-4"
          >
            INDORE, INDIA
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
