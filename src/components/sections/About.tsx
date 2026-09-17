import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiZap, FiCpu } from 'react-icons/fi';

const About: React.FC = () => {
  const skills = [
    {
      icon: FiCode,
      name: 'AI & Developer Tools',
      description: 'GitHub Copilot, ChatGPT, Gemini, Claude, Prompt Engineering, MCP, AI-assisted debugging',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: FiDatabase,
      name: 'Web & Backend Development',
      description: 'Laravel, PHP, React, Inertia.js, Node.js, RESTful APIs, CRUD, JavaScript, TypeScript',
      color: 'from-amber-400 to-amber-600',
    },
    {
      icon: FiCpu,
      name: 'Embedded Systems & IoT',
      description: 'ESP32, STM32, ESP-01, Arduino, C/C++, UART, SPI, I2C, Sensor Integration',
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: FiZap,
      name: 'Databases & Architecture',
      description: 'MySQL, PostgreSQL, SQL optimization, relational design, API and system documentation',
      color: 'from-yellow-400 to-orange-400',
    },
  ];

  const techStack = [
    'Laravel',
    'PHP',
    'React',
    'Inertia.js',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'REST APIs',
    'MySQL',
    'PostgreSQL',
    'GitHub Copilot',
    'Git',
    'Docker',
    'Postman',
    'ESP32',
    'STM32',
    'Arduino',
    'C/C++',
    'VS Code',
    'Netlify',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };



  return (
    <section id="about" className="relative py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c29f74] to-[#dfbe95] mx-auto rounded-full"></div>
        </motion.div>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed">
              I am a Computer Science graduate and Full-Stack & Embedded Software Developer with hands-on experience building web applications, IoT systems, and AI-accelerated software workflows. I specialize in leveraging Generative AI tools such as GitHub Copilot, ChatGPT, Gemini, and Prompt Engineering to accelerate backend work, refactor code quickly, and resolve bugs efficiently.
            </p>
            <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed">
              My technical focus spans Laravel, PHP, React, RESTful API design, embedded firmware with ESP32 and STM32, and database-driven application architecture. I have built and maintained software solutions that combine business logic, hardware integration, and user-friendly interfaces for real-world use cases.
            </p>
            <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed">
              Beyond development, I enjoy leading technical work, documenting system architecture, and collaborating with teams to deliver reliable software. I am committed to continuous learning, practical problem solving, and building solutions that meaningfully improve accessibility and daily life.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: '-100px' }}
            className="grid grid-cols-2 gap-6"
          >
            {/* Animated Stats Cards with Slide-Up Effect */}
            {[
              { value: '5+', label: 'Projects Completed' },
              { value: '2+', label: 'Years Experience' },
              { value: '12+', label: 'Tech Skills' },
              { value: '100%', label: 'Dedication' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="glass-effect p-6 rounded-xl text-center cursor-pointer group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.08, y: -6, boxShadow: '0 8px 32px rgba(194,159,116,0.2)' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <h3 className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</h3>
                <p className="text-slate-600 dark:text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-100px' }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Core Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: 'easeOut',
                  delay: idx * 0.18,
                }}
                whileHover={{ scale: 1.05, y: -6, boxShadow: '0 8px 32px rgba(194,159,116,0.2)' }}
                whileTap={{ scale: 0.97 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`glass-effect p-6 rounded-xl border border-white/10 hover:border-[#c29f74]/40 transition-all group cursor-pointer`}
              >
                <div className={`bg-gradient-to-br ${skill.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <skill.icon size={24} className="text-slate-950" />
                </div>
                <h4 className="text-slate-900 dark:text-white font-semibold mb-2">{skill.name}</h4>
                <p className="text-slate-600 dark:text-white/60 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="glass-effect p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#c29f74]/10 border border-[#c29f74]/20 rounded-lg px-4 py-2 text-center text-slate-700 dark:text-white/80 hover:text-[#a88154] dark:hover:text-[#dfbe95] hover:border-[#c29f74]/40 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
