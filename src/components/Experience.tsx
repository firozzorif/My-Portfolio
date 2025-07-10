import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "internship",
      company: "Appzera",
      role: "Intern",
      period: "March 2025 - June 2025",
      location: "Remote",
      description: "During my internship, I developed a chatbot using Python, PyQt for the UI, and the DeepSeek base model for NLP, focusing on enhancing conversational flows and performance.",
      technologies: ["Python", "PyQt", "NLP", "DeepSeek"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "internship",
      company: "Approteknow",
      role: "DevOps Intern",
      period: "August 2024 - September 2024",
      location: "Bengaluru",
      description: "Deployed and managed serverless applications using AWS Lambda and S3. Automated cloud workflows for secure file management using encryption layers.",
      technologies: ["AWS Lambda", "S3", "DevOps", "Cloud Security"],
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "internship",
      company: "Bharat Intern",
      role: "Web Developer Intern",
      period: "July 2024 - August 2024",
      location: "Remote",
      description: "Built web applications with HTML, CSS, JavaScript. Enhanced user experience and responsiveness of front-end interfaces.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const education = [
    {
      institution: "BNM Institute of Technology",
      degree: "Bachelor of Engineering - Computer Science",
      period: "2022 - Present",
      grade: "8.08 CGPA",
      description: "Focused on computer science fundamentals, software engineering, and modern development practices."
    },
    {
      institution: "Kendriya Vidyalaya No.1 (WEST)",
      degree: "12th Grade - Science",
      period: "2022",
      grade: "77.6%",
      description: "Specialized in Science stream with focus on Mathematics and Computer Science."
    },
    {
      institution: "Kendriya Vidyalaya No.1 AFS BHUJ",
      degree: "10th Grade",
      period: "2020",
      grade: "81.8%",
      description: "Strong foundation in core subjects with excellent academic performance."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & <span className="text-blue-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className={`bg-gradient-to-r ${exp.color} p-4 rounded-lg text-white`}>
                        <h4 className="font-semibold text-lg">{exp.role}</h4>
                        <p className="text-sm opacity-90">{exp.company}</p>
                        <div className="flex items-center gap-2 mt-2 text-sm">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700
                        hover:border-blue-400/50 transition-all duration-300">
                        <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm
                                border border-blue-400/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700
                  hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <p className="text-purple-400 font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-400 font-medium">{edu.grade}</p>
                      <p className="text-gray-400 text-sm">{edu.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
