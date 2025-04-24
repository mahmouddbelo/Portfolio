export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'computer-vision' | 'nlp' | 'machine-learning' | 'web-development';
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: 'Attendance System Using Face Recognition',
    description: 'Developed and deployed an attendance tracking system leveraging AI for face recognition. The system required only a single photo per person for accurate identification, recorded attendance automatically every 30 seconds, and summarized the data at the end of the session, exporting it to a CSV file for easy record-keeping and analysis.',
    image: 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'OpenCV', 'YOLO face recognition', 'Streamlit', 'NumPy', 'Deep Learning', 'Computer Vision'],
    category: 'computer-vision',
    github: 'https://github.com/Mahmoudabdelaal/attendance-system'
  },
  {
    title: 'AI-Powered Robbery Detection System',
    description: 'Developed and deployed a real-time AI system to detect shoplifting behavior in retail environments using video. Integrated a YOLOv8 object detection model with a custom-trained deep learning classifier to distinguish between "Shoplifter" and "Non-Shoplifter" with over 98% validation accuracy. Built a full-stack web application using Django, PyTorch, and OpenCV to automate frame extraction and detection.',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'YOLO v8', 'Django', 'PyTorch', 'OpenCV', 'Deep Learning', 'Computer Vision'],
    category: 'computer-vision',
    github: 'https://github.com/Mahmoudabdelaal/robbery-detection'
  },
  {
    title: 'MediChat-LLM – AI-Powered Medical Chatbot',
    description: 'Developed an end-to-end medical chatbot using a fine-tuned LLaMA2 model, providing contextual healthcare. Integrated Pinecone vector embeddings for efficient knowledge retrieval and contextual conversation handling.',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Flask', 'LLaMA2', 'LangChain', 'Pinecone', 'Hugging Face'],
    category: 'nlp',
    github: 'https://github.com/Mahmoudabdelaal/medichat-llm'
  },
  {
    title: 'AI Business Communication Platform',
    description: 'Developed a comprehensive AI-powered communication platform using Flask, designed to automate business workflows including email generation, report writing, and live chat. Integrated Google Gemini and Groq APIs to generate intelligent content such as professional emails, structured business reports, and contextual chatbot responses. Implemented secure user management with Flask-Login and personalized AI content preferences.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Flask', 'Google Gemini API', 'Groq API', 'Flask-Login', 'JavaScript'],
    category: 'nlp',
    github: 'https://github.com/Mahmoudabdelaal/ai-business-communication'
  },
  {
    title: 'Multi-Agent Collaboration Framework',
    description: 'Created a framework for multiple AI agents to collaborate on complex tasks through a chain-of-thought approach. Implemented a system where specialized agents can work together, sharing context and building upon each other's outputs.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'Anthropic API', 'Vector Databases'],
    category: 'nlp',
    github: 'https://github.com/Mahmoudabdelaal/multi-agent-framework'
  },
  {
    title: 'Real-time Emotion Recognition',
    description: 'Built a real-time emotion recognition system that analyzes facial expressions from webcam feed and classifies emotions with high accuracy. The model recognizes 7 primary emotions and provides probability scores for each.',
    image: 'https://images.pexels.com/photos/13894189/pexels-photo-13894189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Computer Vision', 'CNN Architecture', 'Real-time Processing'],
    category: 'computer-vision',
    github: 'https://github.com/Mahmoudabdelaal/emotion-recognition'
  }
];