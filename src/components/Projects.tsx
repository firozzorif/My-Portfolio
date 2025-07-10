
import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Multi-Layered Cloud-Native Encryption System",
      description: "Cloud-native file encryption using XOR, permutation, and HMAC stream cipher with a React front end for secure file management.",
      technologies: ["React", "Cloud Computing", "Encryption", "HMAC"],
      category: "fullstack",
      github: "https://github.com/firozzorif",
      demo: "#",
      image: "🔐"
    },
    {
      title: "Plant Health Detector",
      description: "Potato leaf tomato disease detection using machine learning (CNN) in Python with a Streamlit front end for real-time analysis.",
      technologies: ["Python", "CNN", "Streamlit", "Machine Learning"],
      category: "ai",
      github: "https://github.com/firozzorif",
      demo: "#",
      image: "🌱"
    },
    {
      title: "Dish Dashboard",
      description: "A web app for discovering recipes, planning meals, and tracking nutrition with interactive features and responsive design.",
      technologies: ["React", "API Integration", "Responsive Design"],
      category: "frontend",
      github: "https://github.com/firozzorif",
      demo: "#",
      image: "🍽️"
    },
    {
      title: "FilmFuse",
      description: "A movie ticket booking system with interactive seat selection and POV viewing experience for enhanced user engagement.",
      technologies: ["React", "JavaScript", "Interactive UI"],
      category: "frontend",
      github: "https://github.com/firozzorif",
      demo: "#",
      image: "🎬"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700
                  hover:border-blue-400/50 transition-all duration-300 overflow-hidden
                  group hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="p-6">
                  {/* Project Icon */}
                  <div className="text-4xl mb-4 text-center">{project.image}</div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs
                          border border-purple-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg
                        hover:bg-slate-600 transition-colors duration-300 text-sm flex-1 justify-center"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg
                        hover:bg-blue-600 transition-colors duration-300 text-sm flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/firozzorif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500
                text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600
                transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
