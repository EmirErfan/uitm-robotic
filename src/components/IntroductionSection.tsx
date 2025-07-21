import React from 'react';
import { Play } from 'lucide-react';

const IntroductionSection: React.FC = () => {
  return (
    <section id="overview" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get Ready to{' '}
          <span className="text-yellow-400 font-orbitron">Compete!</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed">
              The UiTM Robotic Competition (URC) is a national robotics competition that brings together 
              talented students and professionals from across the country. This prestigious event showcases 
              the latest innovations in robotics technology and provides a platform for participants to 
              demonstrate their technical skills and creativity.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              Our competition spans multiple categories, from autonomous systems to manual control challenges, 
              ensuring that every participant can find their niche and excel in their area of expertise. 
              Join us for an unforgettable experience of learning, networking, and competition.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-full" />
              <span className="text-yellow-400 font-semibold">National Competition</span>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-purple-500/20">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/bDMiokRScq4"
                  title="URC Competition Highlights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
