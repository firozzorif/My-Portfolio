
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "JavaScript", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React", "Node.js", "Bootstrap"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database & Cloud",
      skills: ["MySQL", "MongoDB", "DynamoDB", "AWS", "Google Cloud"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Frameworks",
      skills: ["Docker", "GitHub", "Streamlit", "PyQt", "REST APIs"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const certifications = [
    "Red Hat System Administration",
    "DevOps - Appteknow",
    "Samsung Prism Python Programming",
    "Google Cloud Study Jam",
    "Prompt Engineering - Udemy",
    "Java Spring Framework"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-blue-400">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700
                  hover:border-blue-400/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`px-3 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white text-sm
                        font-medium text-center transform hover:scale-105 transition-all duration-300
                        shadow-lg hover:shadow-xl`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Certifications & <span className="text-purple-400">Achievements</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 rounded-lg
                    border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300
                    hover:transform hover:scale-105"
                >
                  <p className="text-gray-300 text-sm font-medium text-center">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
