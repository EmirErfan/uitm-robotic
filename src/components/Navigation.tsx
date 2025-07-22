import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuItems = [
    'Overview',
    'Countdown',
    'Tentative',
    'Categories',
    'Support',
    'PLUS',
    'Invitation Letter',
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]">
            Logo
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white text-sm font-medium hover:text-yellow-400 transition duration-200 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.7)]"
              >
                {item}
              </a>
            ))}
            <span className="ml-4 px-4 py-1 rounded-full text-sm font-medium bg-green-600/70 border border-green-500/40 text-white shadow-green-500/40 shadow-sm">
              Registration is Open
            </span>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-white transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="bg-black/80 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setIsMenuOpen(false)}
              className="block text-white text-base font-medium hover:text-yellow-400 transition duration-200"
            >
              {item}
            </a>
          ))}
          <span className="block mt-3 px-4 py-1 rounded-full text-sm font-medium bg-green-600/70 border border-green-500/40 text-white shadow-sm shadow-green-500/30 text-center">
            Registration is Open
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
