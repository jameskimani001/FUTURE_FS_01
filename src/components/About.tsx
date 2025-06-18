import React from 'react';
import { User, Heart, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <User className="h-8 w-8" />,
      title: "Full Stack Developer",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Innovation",
      description: "Creating solutions that make a positive impact"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results Driven",
      description: "Focused on delivering quality and efficient solutions"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            About
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get to Know Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a keen interest in creating innovative 
            web solutions and contributing to meaningful projects that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey in Tech
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                My journey into technology began with curiosity and has evolved into a passion for 
                creating digital solutions that solve real-world problems. I have completed a Full-Stack
                 Software Engineering certification at Moringa School, where I built a strong foundation in
                  modern web development technologies and industry best practices.
              </p>
              <p>
                Through my internship and previous roles at Olkalou Dairy Ltd and 
                Chili's Cyber-Shop, I've gained hands-on experience in full-stack development, database 
                management, and technical support. I specialize in JavaScript, React, Node.js, and modern 
                web technologies while maintaining a strong focus on user experience and code quality.
              </p>
              <p>
                My volunteer work with Tunza Mazingira Community Club has taught me the importance of 
                technology in community development and environmental conservation. I believe in using 
                technology as a force for positive change and sustainable development.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                What drives me:
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Building solutions that solve real-world problems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Creating accessible and user-friendly experiences
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Continuous learning and professional growth
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Contributing to community development through technology
                </li>
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="animate-slide-in-right">
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;