import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about' },
  { name: 'LOOKBOOK', href: '#lookbook' },
  { name: 'ACTOR', href: '#actor' },
  { name: 'RANGE', href: '#range' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'MODEL', href: '#model' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#0a0a0c]/85 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Monogram */}
          <a
            href="#hero"
            className="group flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded-sm"
            data-cursor="HOME"
          >
            <span className="font-serif text-2xl font-bold tracking-tighter text-[#f4f0ea] group-hover:text-[#d4af37] transition-colors duration-300">
              HG
            </span>
            <span className="hidden sm:inline-block w-[1px] h-4 bg-white/20" />
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-[#a3a09b] uppercase group-hover:text-[#f4f0ea] transition-colors">
              HRISHABH GUPTA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs font-mono tracking-widest text-[#a3a09b] hover:text-[#f4f0ea] transition-colors py-1 group focus:outline-none focus:text-[#d4af37]"
                data-cursor="OPEN"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4af37] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Link */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider px-4 py-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 rounded-sm"
              data-cursor="OPEN"
            >
              <span>CASTING ENQUIRY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#f4f0ea] hover:text-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0c] flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="font-serif text-3xl sm:text-4xl text-[#f4f0ea] hover:text-[#d4af37] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col space-y-4">
              <div className="text-xs font-mono text-[#d4af37] tracking-widest uppercase">
                DIRECT CONTACT
              </div>
              <a
                href={`tel:+91${PERSONAL_INFO.phone}`}
                className="text-sm font-mono text-[#f4f0ea]"
              >
                {PERSONAL_INFO.formattedPhone}
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-mono text-[#a3a09b] hover:text-[#f4f0ea]"
              >
                {PERSONAL_INFO.email}
              </a>

              <div className="flex items-center space-x-6 pt-2">
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#a3a09b] hover:text-[#d4af37]"
                >
                  INSTAGRAM
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#a3a09b] hover:text-[#d4af37]"
                >
                  LINKEDIN
                </a>
                <a
                  href={PERSONAL_INFO.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#a3a09b] hover:text-[#d4af37]"
                >
                  PORTFOLIO
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
