import React from 'react';
import { Bot, Zap, Target, Timer, Plane, Lightbulb } from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      icon: Bot,
      title: 'Soccer Robot',
      description:
        'Autonomous robots compete in a strategic soccer match, showcasing advanced AI and movement algorithms.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Target,
      title: 'Autonomous Sumo',
      description:
        'Robots battle autonomously in the ring, using sensors and AI to push opponents out of bounds.',
      gradient: 'from-red-500 to-orange-600',
    },
    {
      icon: Zap,
      title: 'Manual Sumo',
      description:
        'Human-controlled robots engage in intense sumo wrestling matches requiring skill and strategy.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: Timer,
      title: 'Time Rush',
      description:
        'Race against time to complete challenging obstacles and tasks with precision and speed.',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Plane,
      title: 'Autonomous Drone',
      description:
        'Unmanned aerial vehicles navigate complex flight paths and complete aerial missions autonomously.',
      gradient: 'from-yellow-500 to-amber-600',
    },
    {
      icon: Lightbulb,
      title: 'Creative Innovation',
      description:
        'Showcase original robotic innovations and creative solutions to real-world problems.',
      gradient: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-transparent" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Competition{' '}
          <span className="text-yellow-400">Categories</span>
        </h2>

        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto text-lg">
          Choose your battleground and showcase your robotic expertise across multiple challenging categories.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md`}
                  >
                    <IconComponent size={28} className="text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-yellow-400 transition-colors duration-200">
                  {category.title}
                </h3>

                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="text-center">
                  <button className="bg-transparent border border-purple-500/40 text-purple-300 px-6 py-3 rounded-full font-semibold hover:bg-purple-500/20 hover:border-purple-400 hover:text-purple-200 transition-all duration-300 shadow-sm">
                    Rules & Regulations
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
