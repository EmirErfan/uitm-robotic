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

function App() {
  const [scrollDarkness, setScrollDarkness] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Track mobile menu state

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

      {/* BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 -z-50 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1345991634/photo/artificial-intelligence-3d-robot-hand-finger-pointing-in-futuristic-cyber-space-metaverse.jpg?s=612x612&w=0&k=20&c=Xy_Bk8cNVi0U0EF8mXEW1_hIobDu6CU6xgb3nnkMUQw=')`,
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
      <div className="relative z-10">
        {/* ✅ PASS STATE PROPERLY TO Navigation */}
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <HeroSection />
        <IntroductionSection />
        <CountdownSection />
        <ParticipationOverview />
        <TentativeTimeline />
        <CategoriesSection />
        <SupportSection />
        <SocialMediaSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
