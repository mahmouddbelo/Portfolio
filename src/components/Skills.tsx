import React from 'react';
import SectionTitle from './ui/SectionTitle';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 80 },
        { name: 'C/C++', level: 70 },
        { name: 'Java', level: 65 },
        { name: 'F#', level: 60 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'PyTorch', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'Computer Vision', level: 90 },
        { name: 'NLP', level: 80 }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Django', level: 80 },
        { name: 'Flask', level: 85 },
        { name: 'RESTful APIs', level: 75 }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Kubernetes', level: 65 },
        { name: 'AWS', level: 70 },
        { name: 'MLOps', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Skills & Expertise</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800/50">
              <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;