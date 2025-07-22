import React from 'react';

const Footer: React.FC = () => {
  const sponsors = [
    {
      name: 'Sponsor 1',
      logo: 'https://i.pinimg.com/736x/26/db/8e/26db8e1bc9a0eb238e69ae7d01a24fee.jpg',
    },
    {
      name: 'Sponsor 2',
      logo: 'https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg',
    },
    {
      name: 'Sponsor 3',
      logo: 'https://i.redd.it/tvvggar2j4aa1.png',
    },
    {
      name: 'Sponsor 4',
      logo: 'https://i.ytimg.com/vi/bokJfDZCzNk/maxresdefault.jpg',
    },
    {
      name: 'Sponsor 5',
      logo: 'https://i.redd.it/ah-yes-enslaved-x-enslaved-moisture-hd-templates-1896x1736-v0-v56dekj6jye91.png?width=1896&format=png&auto=webp&s=37b586d82a3291077bfa48d6d309ffe1cb8e6d84',
    },
  ];

  const isOdd = sponsors.length % 2 === 1;

  return (
    <footer className="py-20 bg-white/5 backdrop-blur-md border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-monoton text-white mb-8 glow-text">
            Our <span className="text-yellow-400">Partners</span>
          </h3>

          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ${
              isOdd ? 'justify-items-center' : ''
            }`}
          >
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
            <p className="text-gray-400 text-sm">
              &copy; Testing...
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
