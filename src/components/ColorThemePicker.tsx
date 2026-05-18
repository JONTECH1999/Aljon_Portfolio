import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { useTheme, COLOR_THEMES, type ColorTheme } from '../context/ThemeContext';

const ColorThemePicker: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: ColorTheme[] = ['indigo', 'ocean', 'sunset', 'forest', 'purple', 'rose'];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg glass-effect hover:bg-slate-100 dark:hover:bg-white/20 transition-colors flex items-center gap-2"
        title="Choose color theme"
      >
        {/* Color indicator */}
        <div className="flex gap-1">
          <div 
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{ backgroundColor: COLOR_THEMES[theme].primary }}
          />
          <div 
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{ backgroundColor: COLOR_THEMES[theme].secondary }}
          />
        </div>
        <FiChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden z-50"
          >
            <div className="p-4">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-white mb-4 px-2">
                Choose Color Theme
              </h3>
              <div className="space-y-2">
                {themes.map((themeOption) => {
                  const colors = COLOR_THEMES[themeOption];
                  const isSelected = theme === themeOption;

                  return (
                    <motion.button
                      key={themeOption}
                      whileHover={{ x: 4 }}
                      onClick={() => {
                        setTheme(themeOption);
                        setIsOpen(false);
                      }}
                      className={`w-full p-3 rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                        isSelected
                          ? 'bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20'
                          : 'hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      {/* Color palette preview */}
                      <div className="flex gap-2">
                        <div 
                          className="w-6 h-6 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: colors.primary }}
                        />
                        <div 
                          className="w-6 h-6 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: colors.secondary }}
                        />
                        <div 
                          className="w-6 h-6 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: colors.accent }}
                        />
                      </div>
                      
                      {/* Theme name */}
                      <span className="flex-1 text-left text-sm font-medium text-slate-700 dark:text-white group-hover:translate-x-1 transition-transform">
                        {colors.name}
                      </span>

                      {/* Checkmark for selected */}
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-5 h-5 rounded-full bg-gradient-to-r flex items-center justify-center text-white text-xs"
                          style={{
                            backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                          }}
                        >
                          ✓
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorThemePicker;
