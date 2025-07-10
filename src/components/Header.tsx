
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Firoz<span className="text-blue-400">Khan</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/firozzorif" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/firozzorif" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:firozzorif2003@gmail.com"
               className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 capitalize text-left"
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/firozzorif" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/firozzorif" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:firozzorif2003@gmail.com"
                   className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
