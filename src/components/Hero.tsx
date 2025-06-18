import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from './_DSC0247.jpg'; // ✅ Imported local image

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1wuEFNXQSfAM9HI_CdWFfRsgLpodVV5BC';
    link.download = 'Techie_Kim_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 animate-bounce-slow"></div>
      <div className="absolute top-40 right-10 w-16 h-16 bg-secondary-200 dark:bg-secondary-800 rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent-200 dark:bg-accent-800 rounded-full opacity-20 animate-bounce-slow"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="mb-6 animate-slide-in-left">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Techie Kim
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6">
                Full Stack Developer & Software Engineer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                Passionate about creating innovative web solutions and building applications that make a difference. I completed my Software Engineering program at Moringa School,
                 where I gained hands-on experience through intensive projects and internships.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-in-left">
              <button
                onClick={() => scrollToAbout()}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={downloadResume}
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 animate-slide-in-left">
              <a
                href="https://github.com/jameskimani001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/james-kimani-124003312"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:jameskim092t@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all duration-200 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 p-2">
                <img
                  src={profileImg}
                  alt="Techie Kim"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-400 rounded-full opacity-20 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
