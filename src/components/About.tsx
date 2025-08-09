
import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Brain } from 'lucide-react';

const About = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Passionate software engineer with expertise in full-stack development, data analysis, cloud computing, and emerging technologies. I enjoy building scalable solutions, uncovering insights from data, and contributing to open-source projects.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building end-to-end applications with modern frameworks"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Cloud Architecture",
      description: "Designing scalable systems on AWS and Google Cloud"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "DevOps & Automation",
      description: "Streamlining deployment and infrastructure management"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Data & Intelligence",
      description: "Exploring intelligent solutions, data-driven insights, and automation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700 max-w-4xl mx-auto">
                <p className="text-gray-300 text-lg leading-relaxed min-h-[120px]">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-blue-400/30">
                  <h4 className="text-blue-400 font-semibold mb-2">Education</h4>
                  <p className="text-gray-300 text-sm">B.E. Computer Science</p>
                  <p className="text-gray-400 text-xs">BNM Institute of Technology</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-xl border border-purple-400/30">
                  <h4 className="text-purple-400 font-semibold mb-2">Location</h4>
                  <p className="text-gray-300 text-sm">Bengaluru, India</p>
                  <p className="text-gray-400 text-xs">Open to Remote Work</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700
                  hover:border-blue-400/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
