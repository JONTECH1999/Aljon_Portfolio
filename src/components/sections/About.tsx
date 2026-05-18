import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiZap, FiCpu } from 'react-icons/fi';

const About: React.FC = () => {
  const skills = [
    {
      icon: FiCode,
      name: 'Frontend Development',
      description: 'React, TypeScript, Tailwind CSS, HTML/CSS, Framer Motion',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: FiDatabase,
      name: 'Backend & Databases',
      description: 'PHP, Java, MySQL, XAMPP, Apache NetBeans',
      color: 'from-green-400 to-emerald-400',
    },
    {
      icon: FiCpu,
      name: 'Full-Stack Development',
      description: 'CRUD Systems, Role-Based Access, Multi-User Apps, Database Integration',
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: FiZap,
      name: 'IoT & Hardware',
      description: 'Arduino IDE, C++, IoT Sensors, Wearable Technology',
      color: 'from-yellow-400 to-orange-400',
    },
  ];

  const techStack = [
    'React',
    'TypeScript',
    'JavaScript',
    'PHP',
    'Java',
    'HTML/CSS',
    'Tailwind CSS',
    'MySQL',
    'XAMPP',
    'Apache NetBeans',
    'Arduino IDE',
    'C++',
    'Git',
    'Framer Motion',
    'Vite',
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
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
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
              I'm a Computer Science student and Junior Web & Application Developer with hands-on experience building full-stack web applications, multi-user management systems, and IoT solutions. I specialize in React, TypeScript, PHP, and Java with a strong foundation in database design and backend architecture.
            </p>
            <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed">
              I've successfully delivered complex projects including medical management systems with role-based access control, academic CRUD systems with activity logging, and event management platforms with QR code integration. I combine clean code practices with modern UI/UX design to create solutions that are both functional and user-friendly.
            </p>
            <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed">
              Beyond web development, I'm passionate about IoT and hardware integration, exploring how embedded systems and wearable technology can improve accessibility and solve real-world problems. I'm committed to continuous learning and thrive in collaborative environments.
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
                whileHover={{ scale: 1.1, y: -8, boxShadow: '0 8px 32px rgba(99,102,241,0.15)' }}
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
                whileHover={{ scale: 1.13, y: -12, boxShadow: '0 8px 32px rgba(99,102,241,0.18)' }}
                whileTap={{ scale: 0.97 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`glass-effect p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all group cursor-pointer`}
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
                className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-lg px-4 py-2 text-center text-slate-700 dark:text-white/80 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
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
