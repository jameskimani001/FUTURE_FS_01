import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const workExperience = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "Future Interns",
      location: "Remote",
      period: "Present",
      description: "Currently developing full-stack web applications using modern technologies. Building responsive user interfaces and robust backend systems while collaborating with development teams on various projects.",
      technologies: ["React", "Node.js", "JavaScript", "MongoDB", "Express.js"],
      achievements: [
        "Developing full-stack applications with modern frameworks",
        "Collaborating with international development teams",
        "Implementing responsive design principles"
      ]
    },
    {
      id: 2,
      title: "IT Department Intern",
      company: "Olkalou Dairy Ltd",
      location: "Olkalou, Kenya",
      period: "March 2024 - July 2024",
      description: "Managed data integrity across company systems and collaborated on website enhancement projects. Provided comprehensive technical support and resolved IT challenges to ensure smooth business operations.",
      technologies: ["Database Management", "Web Development", "Technical Support", "Data Entry"],
      achievements: [
        "Maintained accurate data entry and database integrity",
        "Enhanced company website with content updates and backend integration",
        "Provided efficient technical support for hardware and software issues",
        "Contributed to streamlined business operations"
      ]
    },
    {
      id: 3,
      title: "IT Assistant",
      company: "Chili's Cyber-Shop",
      location: "Kenya",
      period: "January 2020 - December 2020",
      description: "Assisted customers with digital services and online forms while providing comprehensive technical support. Developed strong customer service and problem-solving skills through daily client interactions.",
      technologies: ["Customer Support", "Technical Troubleshooting", "Digital Services", "Hardware Support"],
      achievements: [
        "Assisted customers with online forms and digital services",
        "Provided effective tech support for hardware and software issues",
        "Delivered excellent customer service with clear communication",
        "Developed strong problem-solving and communication skills"
      ]
    },
    {
      id: 4,
      title: "Volunteer IT Support Technician",
      company: "Tunza Mazingira Community Club",
      location: "Kenya",
      period: "March 2019 - December 2019",
      description: "Installed and maintained computer systems for community members while providing technical training. Actively participated in environmental initiatives and demonstrated commitment to community service.",
      technologies: ["System Installation", "Computer Maintenance", "Technical Training", "Community Support"],
      achievements: [
        "Installed and maintained computer systems for optimal performance",
        "Provided technical training to users with varying IT proficiency levels",
        "Participated in environmental initiatives and community projects",
        "Demonstrated strong commitment to volunteerism and community engagement"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Software Engineering Certification",
      school: "Moringa School",
      location: "Kenya",
      period: "Certification in Progress",
      gpa: "Completed",
      achievements: [
        "Comprehensive full-stack development program",
        "Hands-on project-based learning",
        "Industry-relevant curriculum and mentorship"
      ]
    }
  ];

  const certifications = [
    {
      name: "Software Engineering Certification",
      issuer: "Moringa School",
      date: "Expected March 2025",
      credentialId: "In Progress"
    },
    {
      name: "Generative AI",
      issuer: "LinkedIn Learning",
      date: "2024",
      credentialId: "Completed"
    },
    {
      name: "Full Stack Development Internship",
      issuer: "Edureka",
      date: "2024",
      credentialId: "Completed"
    },
    {
      name: "JavaScript for Web Development",
      issuer: "Coursera",
      date: "2024",
      credentialId: "Completed"
    },
    {
      name: "React Native for Beginners",
      issuer: "Udemy",
      date: "2024",
      credentialId: "Completed"
    }
  ];

  const TimelineItem: React.FC<{
    item: any;
    type: 'work' | 'education';
    isLast: boolean;
  }> = ({ item, type, isLast }) => (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-px h-full bg-gray-200 dark:bg-gray-700"></div>
      )}
      
      {/* Timeline Dot */}
      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
        {type === 'work' ? (
          <Briefcase className="h-6 w-6 text-primary-600 dark:text-primary-400" />
        ) : (
          <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {type === 'work' ? item.title : item.degree}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium">
              {type === 'work' ? item.company : item.school}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.location}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
            <Calendar className="h-4 w-4" />
            {item.period}
          </div>
        </div>

        {type === 'work' && (
          <>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {item.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}

        {type === 'education' && item.gpa && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Status: {item.gpa}
          </p>
        )}

        {/* Achievements */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Key Achievements:
          </h4>
          <ul className="space-y-1">
            {item.achievements.map((achievement: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My career path and educational background that shaped my expertise in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Briefcase className="h-7 w-7 text-primary-600 dark:text-primary-400" />
              Work Experience
            </h3>
            <div>
              {workExperience.map((job, index) => (
                <TimelineItem
                  key={job.id}
                  item={job}
                  type="work"
                  isLast={index === workExperience.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-primary-600 dark:text-primary-400" />
              Education
            </h3>
            <div>
              {education.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  item={edu}
                  type="education"
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center gap-3">
            <Award className="h-7 w-7 text-primary-600 dark:text-primary-400" />
            Certifications & Courses
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <Award className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {cert.date}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Status: {cert.credentialId}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;