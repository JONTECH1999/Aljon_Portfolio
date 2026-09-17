import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

interface HeaderProps {
  isDarkMode: boolean;
  onModeToggle: (event: React.MouseEvent) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onModeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: '#home' },
    { name: 'About', id: '#about' },
    { name: 'Projects', id: '#projects' },
    { name: 'Experience', id: '#experience' },
    { name: 'Contact', id: '#contact' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300"
      style={{
        backgroundColor: isDarkMode ? 'rgba(11, 15, 23, 0.75)' : 'rgba(248, 250, 252, 0.85)',
        borderBottomColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div 
              className="relative w-10 h-10 rounded-full border-2 overflow-hidden shadow-md group-hover:scale-105 transition-all duration-300"
              style={{
                borderColor: 'var(--color-primary)',
                boxShadow: '0 0 12px rgba(16, 185, 129, 0.3)',
              }}
            >
              <img 
                src="/images/profile.jpg" 
                alt="Aljon"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => (e.currentTarget.src = "https://ui-avatars.com/api/?name=Aljon&background=10b981&color=fff")}
              />
            </div>
            <div className="text-xl sm:text-2xl font-bold gradient-text">
              Aljon R. Alonzo
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative font-medium text-sm lg:text-base group transition-colors duration-200"
                style={{
                  color: isDarkMode ? 'var(--dark-secondary-text)' : 'var(--light-text)',
                }}
              >
                <span className="hover:text-[#c29f74] dark:hover:text-[#dfbe95] transition-colors">
                  {item.name}
                </span>
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#c29f74]"
                ></span>
              </motion.a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {/* Animated Dark/Light Mode Toggle Switch */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => onModeToggle(e)}
              className="p-2.5 rounded-xl glass-effect border border-white/10 dark:border-white/10 hover:border-[#c29f74]/40 text-slate-800 dark:text-white transition-all cursor-pointer flex items-center justify-center shadow-sm"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Dark and Light Mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                >
                  {isDarkMode ? (
                    <FiSun size={19} className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                  ) : (
                    <FiMoon size={19} className="text-[#a88154] drop-shadow-[0_0_8px_rgba(168,129,84,0.3)]" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl glass-effect border border-white/10 text-slate-800 dark:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden pb-4 border-t transition-colors duration-300 overflow-hidden"
              style={{
                borderTopColor: isDarkMode ? 'var(--dark-border)' : 'var(--light-border)',
              }}
            >
              <nav className="flex flex-col gap-3 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.id}
                    className="font-medium px-3 py-2 rounded-lg hover:bg-[#c29f74]/10 hover:text-[#c29f74] transition-colors"
                    style={{
                      color: isDarkMode ? 'var(--dark-secondary-text)' : 'var(--light-text)',
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
