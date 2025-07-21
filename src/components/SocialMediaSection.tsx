import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle, Hash } from 'lucide-react';

const SocialMediaSection: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'text-blue-500', hoverColor: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'text-pink-500', hoverColor: 'hover:text-pink-400' },
    { icon: Linkedin, href: '#', color: 'text-blue-600', hoverColor: 'hover:text-blue-500' },
    { icon: Hash, href: '#', color: 'text-gray-800', hoverColor: 'hover:text-gray-600' }, // TikTok
    { icon: Youtube, href: '#', color: 'text-red-500', hoverColor: 'hover:text-red-400' },
    { icon: MessageCircle, href: '#', color: 'text-cyan-400', hoverColor: 'hover:text-cyan-300' }, // Telegram
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 glow-text">
          Follow <span className="text-yellow-400 neon-glow">Us</span>
        </h2>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className={`
                  w-16 h-16 
                  bg-white/10 
                  backdrop-blur-md 
                  border border-white/10 
                  rounded-full 
                  flex items-center justify-center 
                  ${social.color} 
                  ${social.hoverColor} 
                  transition-all duration-300 
                  hover:scale-110 
                  hover:shadow-lg 
                  hover:shadow-current 
                  group
                `}
              >
                <IconComponent 
                  size={26} 
                  className="group-hover:scale-110 transition-transform duration-200" 
                />
              </a>
            );
          })}
        </div>

        <p className="text-gray-300 mt-10 text-lg">
          Stay connected for the latest updates and behind-the-scenes content.
        </p>
      </div>
    </section>
  );
};

export default SocialMediaSection;
