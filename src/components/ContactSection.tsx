import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-28 bg-[#0a0a0c] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase">
            REPRESENTATION & DIRECT REACH
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold text-[#f4f0ea] mt-2">
            LET'S WORK TOGETHER.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Communication Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Phone Link */}
            <a
              href={`tel:+91${PERSONAL_INFO.phone}`}
              className="p-8 bg-[#121216] border border-white/10 hover:border-[#d4af37] rounded-sm block transition-all duration-300 group"
              data-cursor="VISIT"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                  DIRECT PHONE
                </span>
                <Phone className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-serif text-3xl font-bold text-[#f4f0ea] mt-3 group-hover:text-[#d4af37] transition-colors">
                {PERSONAL_INFO.formattedPhone}
              </div>
              <p className="text-xs font-mono text-[#a3a09b] mt-1">
                Tap to dial direct casting mobile number
              </p>
            </a>

            {/* Email Link */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-8 bg-[#121216] border border-white/10 hover:border-[#d4af37] rounded-sm block transition-all duration-300 group"
              data-cursor="VISIT"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                  DIRECT EMAIL
                </span>
                <Mail className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-serif text-3xl font-bold text-[#f4f0ea] mt-3 group-hover:text-[#d4af37] transition-colors break-all">
                {PERSONAL_INFO.email}
              </div>
              <p className="text-xs font-mono text-[#a3a09b] mt-1">
                Send scripts, casting briefs & booking details
              </p>
            </a>

            {/* Location Card */}
            <div className="p-8 bg-[#121216] border border-white/10 rounded-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                  PRIMARY BASE
                </span>
                <MapPin className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div className="font-serif text-2xl font-bold text-[#f4f0ea] mt-3">
                {PERSONAL_INFO.location}
              </div>
              <p className="text-xs font-mono text-[#a3a09b] mt-1">
                Available for shoots across Mumbai, MP, Delhi & pan-India
              </p>
            </div>
          </motion.div>

          {/* Online Channels & External Portfolio Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Instagram Link */}
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-[#121216] border border-white/10 hover:border-[#d4af37] rounded-sm flex items-center justify-between transition-all duration-300 group"
              data-cursor="VISIT"
            >
              <div>
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase block">
                  INSTAGRAM HANDLE
                </span>
                <div className="font-serif text-3xl font-bold text-[#f4f0ea] mt-1 group-hover:text-[#d4af37] transition-colors">
                  {PERSONAL_INFO.instagram}
                </div>
              </div>
              <div className="p-4 bg-white/5 group-hover:bg-[#d4af37] group-hover:text-black text-[#f4f0ea] rounded-full transition-all">
                <Instagram className="w-6 h-6" />
              </div>
            </a>

            {/* LinkedIn Link */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-[#121216] border border-white/10 hover:border-[#d4af37] rounded-sm flex items-center justify-between transition-all duration-300 group"
              data-cursor="VISIT"
            >
              <div>
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase block">
                  LINKEDIN PROFILE
                </span>
                <div className="font-serif text-3xl font-bold text-[#f4f0ea] mt-1 group-hover:text-[#d4af37] transition-colors">
                  {PERSONAL_INFO.linkedin}
                </div>
              </div>
              <div className="p-4 bg-white/5 group-hover:bg-[#d4af37] group-hover:text-black text-[#f4f0ea] rounded-full transition-all">
                <Linkedin className="w-6 h-6" />
              </div>
            </a>

            {/* Existing Vercel Portfolio Link */}
            <a
              href={PERSONAL_INFO.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-gradient-to-br from-[#121216] to-[#d4af37]/10 border border-[#d4af37]/40 hover:border-[#d4af37] rounded-sm flex items-center justify-between transition-all duration-300 group"
              data-cursor="VISIT"
            >
              <div>
                <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase block">
                  MODELING PORTFOLIO WEB APP
                </span>
                <div className="font-serif text-2xl font-bold text-[#f4f0ea] mt-1 group-hover:text-[#d4af37] transition-colors">
                  hrishabhguptamodeling.vercel.app
                </div>
              </div>
              <div className="p-4 bg-[#d4af37] text-black rounded-full transition-all">
                <Globe className="w-6 h-6" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
