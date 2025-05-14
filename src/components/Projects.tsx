import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'Developed a modern, responsive portfolio website using React and TypeScript. Features include dark mode, interactive UI components, project filtering, and particle background effects.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design'],
      category: 'web-dev',
      github: 'https://github.com/mahmouddbelo/Portfolio',
      live: 'https://mahmouddbelo.github.io/Portfolio'
    },
    {
      title: 'RAG System with Document Processing',
      description: 'Built a professional RAG system that processes various document formats (PDF, DOCX, PPTX) and answers questions using natural language. Features include document upload, URL processing, and a modern dark UI design.',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*NRriz78t4fOD4tNAN_c9NA.png',
      technologies: ['Python', 'Flask', 'LangChain', 'Bootstrap 5', 'JavaScript', 'Document Processing'],
      category: 'nlp',
      github: 'https://github.com/mahmouddbelo/RAGMASTERR',
      live: ''
    },
    {
      title: 'Teeth Disease Detector',
      description: 'Developed an AI-powered dental diagnostic tool that uses deep learning to detect and classify various dental conditions from X-ray images. The system provides real-time analysis and detailed reports for dental professionals.',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'Deep Learning', 'Medical Imaging'],
      category: 'computer-vision',
      github: 'https://github.com/mahmouddbelo/TeethDiseaseDetector',
      live: ''
    },
    {
      title: 'Drowsiness Detection System',
      description: 'Created a real-time drowsiness detection system using facial landmark detection and Eye Aspect Ratio (EAR) calculation. Features include webcam integration, visual feedback, and an alarm system for driver safety.',
      image: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/22606/images/5481e13-3da0-b8e5-f87f-a5ff1b6da72c_eyeSight_-_Driver_Monitoring_Driver_Asleep_1.jpeg',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit', 'Computer Vision'],
      category: 'computer-vision',
      github: 'https://github.com/mahmouddbelo/Drowsiness-Detection-System',
      live: ''
    },
    {
      title: 'Health Insurance Data Analysis Chatbot',
      description: 'Developed an AI chatbot that analyzes health insurance data through natural language queries. The system generates and executes Python code automatically, providing real-time insights and analysis.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'Gradio', 'NLP', 'Pandas', 'Data Analysis'],
      category: 'nlp',
      github: 'https://github.com/mahmouddbelo/Chatbot',
      live: ''
    },
    {
      title: 'Attendance System Using Face Recognition',
      description: 'Developed and deployed an attendance tracking system leveraging AI for face recognition. The system required only a single photo per person for accurate identification, recorded attendance automatically every 30 seconds.',
      image: 'https://www.lystloc.com/blog/wp-content/uploads/2023/12/blog-%E2%80%93-462-1.webp',
      technologies: ['Python', 'OpenCV', 'YOLO face recognition', 'Streamlit', 'NumPy', 'Deep Learning'],
      category: 'computer-vision',
      github: 'https://github.com/mahmouddbelo/Attendance_system_using_face_recognition',
      live: ''
    },
    {
      title: 'AI-Powered Robbery Detection System',
      description: 'Developed a real-time AI system to detect shoplifting behavior using YOLOv8 object detection. Achieved 98% validation accuracy in distinguishing between normal and suspicious behavior.',
      image: 'https://tpp.hikvision.com/Common/Images/Cache/75d097e159ae4386ae63b7dfdc8ab4c3.png',
      technologies: ['Python', 'YOLO v8', 'Django', 'PyTorch', 'OpenCV', 'Deep Learning'],
      category: 'computer-vision',
      github: 'https://github.com/mahmouddbelo/Robberydetectionnn',
      live: ''
    },
    {
      title: 'MediChat-LLM – Medical Chatbot',
      description: 'Developed an end-to-end medical chatbot using a fine-tuned LLaMA2 model. Integrated Pinecone vector embeddings for efficient knowledge retrieval and contextual conversation handling.',
      image: 'https://img.freepik.com/premium-vector/friendly-medical-chatbot-concept-illustrates-its-capabilities-patient-engagement-support-activities-medical-chat-bot-concept_538213-150591.jpg?w=1380',
      technologies: ['Python', 'Flask', 'LLaMA2', 'LangChain', 'Pinecone', 'Hugging Face'],
      category: 'nlp',
      github: 'https://github.com/mahmouddbelo/MediChat-LLM',
      live: ''
    },
    {
      title: 'AI Business Communication Platform',
      description: 'Built an AI-powered platform for automating business communications using Flask.ChatBot + Report Generation + Auto Email Reply  Integrated Google Gemini and Groq APIs',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'Flask', 'Google Gemini API', 'Groq API', 'Flask-Login'],
      category: 'nlp',
      github: 'https://github.com/mahmouddbelo/AICommunicationToolss',
      live: ''
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900/50 backdrop-blur-sm rounded-lg p-1 border border-gray-800/50">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === 'all' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('web-dev')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === 'web-dev' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setActiveTab('computer-vision')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === 'computer-vision' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              Computer Vision
            </button>
            <button
              onClick={() => setActiveTab('nlp')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === 'nlp' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              NLP
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group hover:shadow-blue-500/10 transition-all duration-300 border border-gray-800/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="inline-block px-3 py-1 text-xs font-medium bg-gray-800/50 text-blue-400 rounded-full border border-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-800/50 hover:bg-gray-800 text-white rounded-md transition-colors border border-gray-700"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;