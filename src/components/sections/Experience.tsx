import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiDownload } from 'react-icons/fi';
import FlipCard from '../FlipCard';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Junior Web & App Developer',
      company: 'Freelance',
      period: 'Jul 2023 - Present',
      description: 'Developing full-stack web applications and CRUD systems. Built multi-user systems with role-based access control. Experience in React, PHP, JavaScript, and MySQL database management.',
      skills: ['React', 'PHP', 'JavaScript', 'MySQL', 'Full Stack'],
      icon: FiBriefcase,
    },
    {
      id: 2,
     title: 'Back-end Developer Intern (OJT)',
      company: 'Certicode',
      period: 'Jan 2026 - Apr 2026',
      description: 'Completed a 200-hour intensive internship in the Developer Department. Worked on server-side logic, database management, and building robust backend systems under the guidance of senior engineers.',
      skills: ['PHP', 'MySQL', 'Back-end Development', 'Testing', 'API Design'],
      icon: FiAward,
    },
    {
      id: 3,
      title: 'Web Development Fundamentals',
      company: 'IBM SkillsBuild',
      period: '2024',
      description: 'Demonstrated knowledge of web development concepts, processes to develop, deploy, and test websites. Gained expertise in tools and programming languages used by web developers, with a conceptual understanding of responsive design and modern development practices.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Front End Development', 'Back End Development', 'Testing', 'DevOps', 'Web Publishing', 'Visual Studio Code'],
      icon: FiAward,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.7,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="experience" className="relative py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-100px' }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 md:left-1/2 top-20 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-transparent"></div>
              )}

              <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-3 md:left-1/2 md:translate-x-[-50%] top-4 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-slate-950 z-10"
                ></motion.div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-1/2 h-72">
                  <FlipCard
                    flipDirection="vertical"
                    front={
                      <div className="glass-effect p-6 rounded-xl h-full w-full flex flex-col justify-between">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 flex-shrink-0"
                            style={{
                              color: 'var(--color-primary)',
                            }}>
                            <exp.icon size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                            <p className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{exp.company}</p>
                            <p className="text-sm opacity-70">{exp.period}</p>
                          </div>
                        </div>
                        <p className="text-xs text-center opacity-60">Hover to flip →</p>
                      </div>
                    }
                    back={
                      <div className="glass-effect p-6 rounded-xl h-full w-full flex flex-col justify-between overflow-y-auto">
                        <div>
                          <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-primary)' }}>{exp.title}</h3>
                          <p className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{exp.company}</p>
                          <p className="text-xs opacity-70 mb-3">{exp.period}</p>
                          <p className="text-sm mb-4 leading-relaxed">{exp.description}</p>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-xs px-2 py-1 rounded-full"
                                style={{
                                  backgroundColor: `var(--color-primary)20`,
                                  color: 'var(--color-primary)',
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-center opacity-60 mt-2">← Flip back</p>
                      </div>
                    }
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 pt-16 border-t"
          style={{ borderTopColor: 'var(--light-border)' }}
        >
          <h3 className="text-2xl font-bold mb-8">Education</h3>

          <div className="h-72">
            <div className="glass-effect p-6 rounded-xl h-full w-full flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold mb-1">Bachelor of Science in Computer Science</h4>
                <p className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Immaculada Concepcion College</p>
                <p className="text-sm opacity-70 mb-3">2021 - Present</p>
                <p className="text-sm leading-relaxed">Focused on web development, full-stack systems, and UI/UX design. Completed hands-on projects in React, PHP, Java, and database management.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 pt-16 border-t border-slate-200 dark:border-white/10"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Certifications & Achievements</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: 'Web Development Fundamentals', 
                issuer: 'IBM SkillsBuild',
                pdf: 'certificates/web-development-fundamentals.pdf'
              },
              { 
                title: 'Information Technology Fundamentals', 
                issuer: 'IBM SkillsBuild',
                pdf: 'certificates/information-technology-fundamentals.pdf'
              },
              { 
                title: 'Certificate of Completion (OJT)', 
                issuer: 'Certicode',
                pdf: 'certificates/ojt-certificate-completion.pdf'
              },
            ].map((cert) => (
              <div key={cert.title} className="glass-effect p-4 rounded-xl h-40 w-full flex flex-col justify-between">
                <div className="flex items-start gap-3">
                  <FiAward className="text-[var(--color-primary)] flex-shrink-0 mt-1" size={20} />
                  <div className="flex-1">
                    <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>{cert.title}</p>
                    <p className="text-sm opacity-70">{cert.issuer}</p>
                  </div>
                  <a
                    href={cert.pdf}
                    download
                    className="text-[var(--color-primary)] flex-shrink-0 mt-1 opacity-60 hover:opacity-100 transition-opacity"
                    title="Download PDF"
                  >
                    <FiDownload size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-slate-500 dark:text-white/40 mt-4 text-center">
            Click on a certificate to download the PDF
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
