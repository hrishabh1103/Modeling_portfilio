import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { CinematicLoader } from './components/CinematicLoader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CastingProfile } from './components/CastingProfile';
import { WhoIAm } from './components/WhoIAm';
import { Lookbook } from './components/Lookbook';
import { TheActor } from './components/TheActor';
import { PerformanceRange } from './components/PerformanceRange';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { MimicryComedy } from './components/MimicryComedy';
import { TheModel } from './components/TheModel';
import { CastingCTA } from './components/CastingCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-[#f4f0ea] overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      {/* Film Grain Ambient Overlay */}
      <div className="film-grain" />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Loader */}
      {loading && <CinematicLoader onComplete={() => setLoading(false)} />}

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main id="main-content">
        <HeroSection />
        <CastingProfile />
        <WhoIAm />
        <Lookbook />
        <TheActor />
        <PerformanceRange />
        <ExperienceTimeline />
        <MimicryComedy />
        <TheModel />
        <CastingCTA />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
