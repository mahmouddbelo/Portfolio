import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { BookOpen, CheckCircle } from 'lucide-react';

const Courses = () => {
  const courses = [
    { name: 'CCS50: Introduction to Computer Science', provider: 'Harvard University (edX)' },
    { name: 'Applied Deep Learning', provider: 'Maharatech' },
    { name: 'Natural Language Processing Specialization', provider: 'Coursera' },
    { name: 'Deployment of Machine Learning Models', provider: 'Udemy' },
    { name: 'Machine Learning Specialization', provider: 'Coursera' },
    { name: 'Transformers in Computer Vision', provider: 'Coursat.ai' },
    { name: 'Deep Learning for Computer Vision', provider: 'Maharatech' },
    { name: 'Practical GenAI (3 parts)', provider: 'Coursat.ai' },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Professional Development</SectionTitle>
        
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-4xl mx-auto border border-gray-800/50">
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 text-blue-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Courses & Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="flex bg-gray-900/50 p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group border border-gray-800/30"
              >
                <div className="mr-3 mt-1 text-blue-400 group-hover:text-blue-500 transition-colors">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{course.name}</h4>
                  <p className="text-gray-400 text-sm">{course.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;