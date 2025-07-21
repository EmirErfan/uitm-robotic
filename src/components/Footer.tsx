import React from 'react';

const Footer: React.FC = () => {
  const sponsors = [
    { name: 'UiTM', logo: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Ministry of Education', logo: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Tech Sponsor', logo: 'https://images.pexels.com/photos/7688464/pexels-photo-7688464.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Innovation Hub', logo: 'https://images.pexels.com/photos/7688484/pexels-photo-7688484.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Robotics Corp', logo: 'https://images.pexels.com/photos/7688493/pexels-photo-7688493.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  ];

  return (
    <footer className="py-20 bg-white/5 backdrop-blur-md border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 glow-text">
            Our <span className="text-yellow-400 neon-glow">Partners</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2024 UiTM Robotic Competition. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
