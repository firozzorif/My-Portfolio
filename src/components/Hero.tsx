
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const titles = [
    'Software Engineer',
    'Full-Stack Developer',
    'DevOps Engineer',
    'AI Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Firoz Khan</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="mr-2">Aspiring</span>
            <span className={`transition-opacity duration-500 text-blue-400 font-semibold ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              {titles[currentTitleIndex]}
            </span>
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building scalable systems and innovative solutions. Passionate about full-stack development, 
            cloud computing, and machine learning technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold
                hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300
                shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold
                hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold
                hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300
                flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;
