import React from 'react';
import { Code, Palette, Database, Globe, Smartphone, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MYSQL", level: 82 }
      ]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Adobe XD", level: 85 },
        { name: "Prototyping", level: 88 },
        { name: "User Research", level: 80 }
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Technologies",
      skills: [
        { name: "REST APIs", level: 93 },
        { name: "GraphQL", level: 85 },
        { name: "WebSockets", level: 80 },
        { name: "PWA", level: 87 }
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 20 },
        { name: "Flutter", level: 25 },
        { name: "iOS Development", level: 20 },
        { name: "Android Development", level: 22 }
      ]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 88 },
        { name: "AWS/GCP", level: 82 },
        { name: "CI/CD", level: 85 },
        { name: "Git", level: 95 }
      ]
    }
  ];

  const SkillBar: React.FC<{ skill: { name: string; level: number } }> = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {skill.name}
        </span>
        <span className="text-sm text-primary-600 dark:text-primary-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="text-primary-600 dark:text-primary-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Webpack", "Vite", "Storybook", "Redux", 
              "Express.js", "FastAPI",  "Supabase", "Firebase", "Vercel",
              "Netlify", "GitHub Actions", "Linux", "Postman",
               "Bootstrap"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;