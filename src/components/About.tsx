import React from 'react';
import { BookOpen, Code, Globe, BrainCircuit } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const About = () => {
  const highlights = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-blue-400" />,
      title: 'AI & ML Expertise',
      description: 'Specialized in developing and deploying advanced AI solutions using PyTorch and TensorFlow'
    },
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: 'Full Stack Development',
      description: 'Experience with Python, Django, and web technologies for end-to-end application development'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: 'Continuous Learning',
      description: 'Constantly expanding knowledge through courses and hands-on projects in AI and ML'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Global Perspective',
      description: 'Working with international technologies and approaches to solve complex problems'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="mb-12 md:text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed">
            A results-driven AI and Machine Learning professional with expertise in developing and deploying advanced 
            solutions using PyTorch, TensorFlow, and Django. Skilled in computer vision, NLP, and MLOps practices, 
            with a proven track record of delivering innovative projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-gray-800/50 hover:translate-y-[-4px] transform"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;