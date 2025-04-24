import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Computer Vision Engineer Intern',
      company: 'Cellula Technologies',
      duration: 'Jan 2025 - Present',
      description: 'Developed deep learning models for object detection and image segmentation, optimizing real-time processing applications using PyTorch and TensorFlow.'
    },
    {
      title: 'AI Engineer Intern',
      company: 'Digital Hub Center (Orange)',
      duration: 'Nov 2024 - Jan 2025',
      description: 'Implemented LLMs and transformers for NLP tasks, while applying MLOps practices using Docker and Kubernetes for model deployment and monitoring.'
    },
    {
      title: 'Python Intern',
      company: 'ITI (Information Technology Institute)',
      duration: 'July 2024 - Aug 2024',
      description: 'Built Python web applications with Django and Flask, focusing on NLP and Computer Vision solutions for real-world problems.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Professional Experience</SectionTitle>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-gray-800/50"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{exp.duration}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;