import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import ColorThemePicker from './ColorThemePicker';

interface HeaderProps {
  isDarkMode: boolean;
  onModeToggle: () => void;
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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500"
      style={{
        backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.7)' : 'rgba(248, 247, 255, 0.7)',
        borderBottomColor: isDarkMode ? 'var(--dark-border)' : 'var(--light-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div 
              className="relative w-10 h-10 rounded-full border-2 overflow-hidden shadow-lg group transition-all duration-300"
              style={{
                borderColor: `var(--color-primary)`,
                boxShadow: `0 0 15px var(--color-primary)40`,
              }}
            >
              <img 
                src="/images/profile.jpg" 
                alt="Aljon"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => (e.currentTarget.src = "https://ui-avatars.com/api/?name=Aljon&background=6366f1&color=fff")}
              />
            </div>
            <div className="text-2xl font-bold gradient-text cursor-pointer hover:scale-110 transition-transform">
              Aljon R. Alonzo
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative font-medium group transition-colors duration-300"
                style={{
                  color: isDarkMode ? 'var(--dark-secondary-text)' : 'var(--light-text)',
                }}
              >
                {item.name}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    boxShadow: `0 0 8px var(--color-primary)`,
                  }}
                ></span>
              </motion.a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {/* Dark/Light mode toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onModeToggle}
              className="p-2 rounded-lg glass-effect hover:bg-slate-100 transition-colors"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            {/* Color theme picker */}
            <ColorThemePicker />

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg glass-effect hover:bg-slate-100"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t transition-colors duration-300"
            style={{
              borderTopColor: isDarkMode ? 'var(--dark-border)' : 'var(--light-border)',
            }}
          >
            <nav className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  className="font-medium transition-colors duration-300"
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
      </div>
    </header>
  );
};

export default Header;
