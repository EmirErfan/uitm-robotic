import React from 'react';
import { Play } from 'lucide-react';

const IntroductionSection: React.FC = () => {
  return (
    <section id="overview" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-monoton">
          Unleash Your{' '}
          <span className="text-yellow-400 font-monoton">Potential!</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed">
              Bringing together the brightest minds in engineering and technology. 
              This highly anticipated competition is your chance to showcase groundbreaking innovations, push the boundaries of robotics, 
              and prove your technical prowess on a national stage.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              With diverse categories ranging from advanced autonomous challenges to thrilling manual control showdowns, 
              URC offers a unique opportunity for every participant to shine. 
              Beyond the thrill of competition, you'll gain invaluable experience, 
              expand your professional network, and connect with fellow robotics enthusiasts.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div  />
              <span className="text-yellow-400 font-semibold">Elevate Your Skills. Expand Your Network. Conquer the National Stage.</span>
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
