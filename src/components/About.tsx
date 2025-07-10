
import React, { useState, useEffect } from 'react';
import { Code, Database, Cloud, Brain } from 'lucide-react';

const About = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Computer Science student with strong skills in Java, Python, C, web development, cloud computing, and machine learning. Actively seeking software development or DevOps roles to apply and expand my technical expertise.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Proficient in React, Node.js, Java, Python, and modern web technologies"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Experience with MySQL, MongoDB, DynamoDB for scalable data solutions"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "AWS Lambda, Docker, GitHub workflows for automated deployments"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "CNN models, Streamlit applications, and AI-driven solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
                <p className="text-gray-300 leading-relaxed min-h-[120px]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
                <p className="text-blue-400">Bengaluru, India</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
                <p className="text-gray-300">B.E Computer Science & Engineering</p>
                <p className="text-blue-400">BNM Institute of Technology (2022-Present)</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-2">Focus Areas</h4>
                <p className="text-gray-300">Web Development, Cloud Computing, Machine Learning</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700
                  hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105
                  group cursor-pointer"
              >
                <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
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
