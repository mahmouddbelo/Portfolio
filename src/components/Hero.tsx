import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import profileImage from '../assets/mahmoud.jpg';
import cvPdf from '../assets/Mahmoud_Abdelaal_CV.pdf';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Mahmoud Abdelaal
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300">
              Machine Learning Engineer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Experienced in developing and deploying advanced AI solutions with PyTorch, TensorFlow,
              and Django. Specializing in computer vision, NLP, and MLOps.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 font-medium"
              >
                Contact Me
              </a>
              <a
                href={cvPdf}
                download="Mahmoud_Abdelaal_CV.pdf"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-200 font-medium flex items-center"
              >
                <FileDown size={20} className="mr-2" />
                Download CV
              </a>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/mahmouddbelo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mahmoud-abdelaal-99bb47276/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.kaggle.com/mahmoudbelooo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="Kaggle"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                </svg>
              </a>
              <a 
                href="mailto:mahmoudabdelaal857@gmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-400/20 shadow-lg shadow-blue-500/20 transition-transform duration-300 hover:scale-105">
              <img
                src={profileImage}
                alt="Mahmoud Abdelaal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={32} className="text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;