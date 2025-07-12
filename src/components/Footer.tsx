
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900/50 border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Firoz<span className="text-blue-400">Khan</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Aspiring Software Engineer passionate about building innovative solutions 
              and contributing to the tech community.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/firozzorif"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 text-gray-400 rounded-lg hover:bg-slate-700
                  hover:text-blue-400 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/firozzorif"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 text-gray-400 rounded-lg hover:bg-slate-700
                  hover:text-blue-400 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello.firozkhan@outlook.com"
                className="p-2 bg-slate-800 text-gray-400 rounded-lg hover:bg-slate-700
                  hover:text-blue-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a
                  href="mailto:hello.firozkhan@outlook.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  hello.firozkhan@outlook.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-gray-300">Bengaluru, India</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a
                  href="tel:+917304009104"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +91 73040 09104
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Firoz Khan. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
