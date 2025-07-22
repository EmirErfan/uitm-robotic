import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

interface HeroSectionProps {
  introFinished: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ introFinished }) => {
  const title = 'UiTM Robotic Competition';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Glow or Shapes */}
      <Parallax speed={-20}>
        <div className="absolute w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl opacity-50 -z-10 top-[-20%] left-1/2 transform -translate-x-1/2" />
      </Parallax>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-white mb-8 font-bold">
          <span className="block text-xl md:text-4xl">Welcome to</span>

          <AnimatePresence>
            {introFinished && (
              <motion.span
                className="block text-5xl md:text-7xl font-monoton text-yellow-400 leading-tight"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                  hidden: {},
                }}
              >
                {title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block whitespace-nowrap mr-2">
                    {word.split('').map((char, j) => (
                      <motion.span
                        key={`${i}-${j}`}
                        className="inline-block"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.span>
            )}
          </AnimatePresence>
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
