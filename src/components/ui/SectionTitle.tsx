import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  align = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
        {children}
      </h2>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mt-4 mb-2 mx-auto"></div>
    </div>
  );
};

export default SectionTitle;