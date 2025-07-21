import React from 'react';
import { ExternalLink, FileText, Award } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-white mb-8 font-bold">
          <span className="block text-xl md:text-4xl">
            Welcome to
          </span>
          <span className="block text-5xl md:text-7xl font-orbitron text-yellow-400 subtle-glow">
            UiTM Robotic Competition
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button className="glass-card hover:glass-card-hover px-8 py-4 rounded-full font-semibold text-white border border-purple-500/50 hover:border-purple-400 transition-all duration-300 flex items-center gap-2 group">
            <ExternalLink size={20} className="group-hover:scale-110 transition-transform duration-200" />
            Important Links
          </button>

          <button className="glass-card hover:glass-card-hover px-8 py-4 rounded-full font-semibold text-white border border-purple-500/50 hover:border-purple-400 transition-all duration-300 flex items-center gap-2 group">
            <FileText size={20} className="group-hover:scale-110 transition-transform duration-200" />
            Terms & Conditions
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
