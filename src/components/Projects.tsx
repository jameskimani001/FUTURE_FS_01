import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web App', 'Mobile', 'UI/UX', 'Open Source'];

  const projects = [
    {
      id: 1,
      title: "Food Delivery Platform",
      description: "A Food delivery system solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303524.jpg?ga=GA1.1.842284324.1747240413&semt=ais_hybrid&w=740",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web App",
      githubUrl: "https://github.com/jameskimani001/quickbite-go-order",
      liveUrl: "https://quickbit.netlify.app/welcome",
      featured: true
    },
    {
      id: 2,
      title: "Health Tracker App",
      description: "A collaborative Health Tracker application built with React Native and Firebase. Real-time synchronization, team collaboration, and advanced filtering capabilities.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      githubUrl: "https://github.comhttps://github.com/jameskimani001/echo-health-journey",
      liveUrl: "https://trackmyhealthnow.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Quickmeet-scheduler",
      description: "QuickMeet is a fully responsive, full-stack web application that allows users to view available time slots, schedule appointments, and receive confirmation and reminders.",
      image: "https://img.freepik.com/free-photo/schedule-planner-task-agenda-checklist-concept_53876-124095.jpg?ga=GA1.1.842284324.1747240413&semt=ais_hybrid&w=740",
      tags: ["React", "TypeScript", "Nodemailer"," EmailJS"],
      category: "UI/UX",
      githubUrl: "https://github.com/jameskimani001/quickmeet-scheduler-app",
      liveUrl: "https://quickmeet-scheduler.netlify.app",
      featured: false
    },
    {
      id: 4,
      title: "Social-Media-viral-creator-ai-studio",
      description: "Interactive dashboard for data visualization using D3.js and React. Features real-time updates, multiple chart types, and export functionality.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      category: "Web App",
      githubUrl: "https://github.com/jameskimani001/viral-creator-ai-studio",
      liveUrl: "https://hypemancer.netlify.app",
      featured: true
    },
    {
      id: 5,
      title: "Crime Prediction and Analysis Platform",
      description: "This is a comprehensive crime reporting and management system designed for Kenya. It allows citizens to report crimes and enables law enforcement to track, manage, and analyze crime data effectively.",
      image: "https://img.freepik.com/free-photo/truth-concept-composition-detective-desk_23-2149051319.jpg?ga=GA1.1.842284324.1747240413&semt=ais_hybrid&w=740",
      tags: ["shadcn/ui", "React Hook Form with Zod validation", "Recharts"],
      category: "Web App",
      githubUrl: "https://github.com/jameskimani001/predicti-crime",
      liveUrl: "https://predictcrim.netlify.app",
      featured: false
    },
    {
      id: 6,
      title: "Secure Password Generator",
      description: "A password generator website is a secure tool designed to create complex, random passwords that enhance user account security and protect against unauthorized access.",
      image: "https://img.freepik.com/free-photo/member-log-membership-username-password-concept_53876-124420.jpg?ga=GA1.1.842284324.1747240413&semt=ais_hybrid&w=740",
      tags: ["React", "shadcn-ui", "Tailwind CSS"],
      category: "Mobile",
      githubUrl: "https://github.com/jameskimani001",
      liveUrl: "https://privac.netlify.app",
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            aria-label="View source code"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors duration-200"
            aria-label="View live demo"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm">Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="text-sm">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating impactful digital solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="h-5 w-5 text-gray-400 mt-2" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;