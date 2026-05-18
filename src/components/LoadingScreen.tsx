import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const dots = [0, 1, 2];

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const dotVariants = {
    initial: { opacity: 0.4, scale: 0.8 },
    animate: {
      opacity: [0.4, 1, 0.4],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 1.2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 transition-colors duration-300"
      style={{
        backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
      }}
    >
      {isDarkMode && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl"
            style={{
              background: 'rgba(99, 102, 241, 0.2)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl"
            style={{
              background: 'rgba(147, 51, 234, 0.2)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1,
            }}
          ></motion.div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            letterSpacing: '-0.05em',
            color: isDarkMode ? '#ffffff' : '#1e1b4b',
          }}
          className="md:text-6xl"
        >
          Aljon's Portfolio
        </motion.h1>

        <motion.div
          className="flex justify-center gap-3"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {dots.map((index) => (
            <motion.div
              key={index}
              className="w-4 h-4 rounded-full"
              style={{
                backgroundColor: '#6366f1',
              }}
              variants={dotVariants}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '2rem',
            fontSize: '1.125rem',
            fontWeight: '500',
            color: isDarkMode ? '#ffffff' : '#1e1b4b',
          }}
        >
          Crafting excellence in web development
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
