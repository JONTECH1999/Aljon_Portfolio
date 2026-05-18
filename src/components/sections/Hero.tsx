import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Junior Web & App Developer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + fullText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, displayedText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 md:px-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        {/* Futuristic Profile Image Container */}
        <motion.div
          variants={itemVariants}
          className="relative mb-10 w-32 h-32 md:w-48 md:h-48 mx-auto group"
        >
          <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-full h-full rounded-2xl border-2 border-indigo-500/30 glass-effect p-2 rotate-3 group-hover:rotate-0 transition-transform duration-500">
             <img 
                src="/images/profile.jpg" 
                alt="Aljon"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
                onError={(e) => (e.currentTarget.src = "https://ui-avatars.com/api/?name=Aljon&background=6366f1&color=fff")}
              />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">Hi, I'm </span>
            <span className="gradient-text">Aljon</span>
          </h1>
        </motion.div>

        {/* Typewriter effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-4xl text-indigo-600 dark:text-indigo-400 font-semibold min-h-16">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 dark:text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting full-stack solutions with React, TypeScript, PHP, and Java. Specialized in building scalable web applications, 
          multi-user management systems, and IoT solutions. Let's bring your vision to life with clean code and modern technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary shadow-lg shadow-indigo-500/30"
          >
            View My Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          <motion.a
            href="https://github.com/JONTECH1999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 10, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-lg glass-effect hover:bg-white/20 transition-colors"
          >
            <FiGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aljon-alonzo-ba3bb4339/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-lg glass-effect hover:bg-white/20 transition-colors"
          >
            <FiLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://web.facebook.com/aljon11onsi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-lg glass-effect hover:bg-white/20 transition-colors"
          >
            <FiFacebook size={24} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/aljon_alonzo/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-lg glass-effect hover:bg-white/20 transition-colors"
          >
            <FiInstagram size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <a href="#about" className="text-slate-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <FiChevronDown size={32} />
          </a>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;
