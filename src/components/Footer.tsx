import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-950 py-12 relative border-t border-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
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
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
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
          
          <p className="text-gray-500 text-center mb-2">
            &copy; {new Date().getFullYear()} Mahmoud Abdelaal. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm text-center">
            Machine Learning Engineer specializing in AI solutions
          </p>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;