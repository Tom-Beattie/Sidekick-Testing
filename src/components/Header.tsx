import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#2c2c2c] fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="transition-transform hover:scale-105 duration-300">
              <img src="/logo.png" alt="Sidekick Systems logo" className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold text-white">Sidekick Systems</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-300 hover:text-white transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-gray-300 hover:text-white transition-colors">
              Book Now
            </button>
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#212121] rounded-lg mb-4">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('blog')} className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left">
                Blog
              </button>
              <button onClick={() => scrollToSection('booking')} className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;