import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import CountdownSection from './components/CountdownSection';
import ParticipationOverview from './components/ParticipationOverview';
import TentativeTimeline from './components/TentativeTimeline';
import CategoriesSection from './components/CategoriesSection';
import SupportSection from './components/SupportSection';
import SocialMediaSection from './components/SocialMediaSection';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/react"

// ✅ Intro splash screen with fade in/out
const IntroScreen: React.FC<{ fadeOut: boolean }> = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="text-5xl md:text-6xl font-monoton text-yellow-400 animate-pulse text-center">
        UiTM Robotic Competition
      </h1>
    </div>
  );
};

function App() {
  const [scrollDarkness, setScrollDarkness] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOutIntro, setFadeOutIntro] = useState(false);

  // Fade in/out logic
  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOutIntro(true), 2000); // Start fade out
    const timer2 = setTimeout(() => setShowIntro(false), 3000); // Remove from DOM
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const darkness = Math.min(scrollY / documentHeight, 1);
      setScrollDarkness(darkness);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Splash Screen with fade effect */}
      {showIntro && <IntroScreen fadeOut={fadeOutIntro} />}

      {/* BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 -z-50 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://wallpapers.com/images/high/cyberpunk-pixel-art-1920-x-1080-ayd6wbgj44ideufx.webp')`,
          backgroundAttachment: 'fixed',
          transform: 'scale(1.1)',
        }}
      />

      {/* DYNAMIC BLACK OVERLAY */}
      <div
        className="fixed inset-0 -z-40 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundColor: 'black',
          opacity: scrollDarkness,
        }}
      />

      {/* PURPLE GLOW OVERLAY */}
      <div className="fixed inset-0 -z-30 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-black/30 pointer-events-none" />

      {/* PAGE CONTENT */}
      {!showIntro && (
        <div className="relative z-10">
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <HeroSection introFinished={!showIntro} />
          <IntroductionSection />
          <CountdownSection />
          <ParticipationOverview />
          <TentativeTimeline />
          <CategoriesSection />
          <SupportSection />
          <SocialMediaSection />
          <Footer />
          <SpeedInsights/>
        </div>
      )}
    </div>
  );
}

export default App;
