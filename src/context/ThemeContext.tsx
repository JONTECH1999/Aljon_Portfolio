import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorTheme = 'indigo' | 'ocean' | 'sunset' | 'forest' | 'purple' | 'rose';

export interface ThemeConfig {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  // Light mode
  lightBg: string;
  lightText: string;
  lightSecondaryText: string;
  lightBorder: string;
  lightCardBg: string;
  // Dark mode
  darkBg: string;
  darkText: string;
  darkSecondaryText: string;
  darkBorder: string;
  darkCardBg: string;
  // Gradient backgrounds
  gradientLight: string;
  gradientDark: string;
}

export const COLOR_THEMES: Record<ColorTheme, ThemeConfig> = {
  indigo: {
    name: 'Indigo',
    primary: '#6366f1',
    secondary: '#818cf8',
    accent: '#4f46e5',
    // Light mode
    lightBg: '#f8f7ff',
    lightText: '#000000',
    lightSecondaryText: '#333333',
    lightBorder: '#e9d5ff',
    lightCardBg: '#ffffff',
    // Dark mode
    darkBg: '#0f172a',
    darkText: '#ffffff',
    darkSecondaryText: '#e0e7ff',
    darkBorder: '#312e81',
    darkCardBg: '#1e293b',
    // Gradients
    gradientLight: 'linear-gradient(135deg, #f8f7ff 0%, #faf5ff 100%)',
    gradientDark: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
  },
  ocean: {
    name: 'Ocean',
    primary: '#0ea5e9',
    secondary: '#06b6d4',
    accent: '#0284c7',
    // Light mode
    lightBg: '#f0f9ff',
    lightText: '#000000',
    lightSecondaryText: '#333333',
    lightBorder: '#cffafe',
    lightCardBg: '#ffffff',
    // Dark mode
    darkBg: '#0c2d44',
    darkText: '#ffffff',
    darkSecondaryText: '#cffafe',
    darkBorder: '#164e63',
    darkCardBg: '#164e63',
    // Gradients
    gradientLight: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    gradientDark: 'linear-gradient(135deg, #0c2d44 0%, #082f49 100%)',
  },
  sunset: {
    name: 'Sunset',
    primary: '#f97316',
    secondary: '#fb923c',
    accent: '#ea580c',
    // Light mode
    lightBg: '#fffbeb',
    lightText: '#000000',
    lightSecondaryText: '#333333',
    lightBorder: '#fed7aa',
    lightCardBg: '#ffffff',
    // Dark mode
    darkBg: '#3f2305',
    darkText: '#ffffff',
    darkSecondaryText: '#fecaca',
    darkBorder: '#92400e',
    darkCardBg: '#5a3a1a',
    // Gradients
    gradientLight: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
    gradientDark: 'linear-gradient(135deg, #3f2305 0%, #5a3a1a 100%)',
  },
  forest: {
    name: 'Forest',
    primary: '#10b981',
    secondary: '#34d399',
    accent: '#059669',
    // Light mode
    lightBg: '#f0fdf4',
    lightText: '#000000',
    lightSecondaryText: '#333333',
    lightBorder: '#a7f3d0',
    lightCardBg: '#ffffff',
    // Dark mode
    darkBg: '#0d3b2e',
    darkText: '#ffffff',
    darkSecondaryText: '#d1fae5',
    darkBorder: '#047857',
    darkCardBg: '#134e4a',
    // Gradients
    gradientLight: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    gradientDark: 'linear-gradient(135deg, #0d3b2e 0%, #064e3b 100%)',
  },
  purple: {
    name: 'Purple',
    primary: '#a855f7',
    secondary: '#d946ef',
    accent: '#9333ea',
    // Light mode
    lightBg: '#faf5ff',
    lightText: '#000000',
    lightSecondaryText: '#333333',
    lightBorder: '#e9d5ff',
    lightCardBg: '#ffffff',
    // Dark mode
    darkBg: '#2d1b4e',
    darkText: '#ffffff',
    darkSecondaryText: '#e9d5ff',
    darkBorder: '#6b21a8',
    darkCardBg: '#3f2463',
    // Gradients
    gradientLight: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
    gradientDark: 'linear-gradient(135deg, #2d1b4e 0%, #3f2463 100%)',
  },
  rose: {
    name: 'Rose',
    primary: '#ec4899',
    secondary: '#f472b6',
    accent: '#db2777',
    // Light mode
    lightBg: '#fff1f5',
    lightText: '#000000',
    lightSecondaryText: '#333333',
    lightBorder: '#fbcfe8',
    lightCardBg: '#ffffff',
    // Dark mode
    darkBg: '#500724',
    darkText: '#ffffff',
    darkSecondaryText: '#fda4af',
    darkBorder: '#be185d',
    darkCardBg: '#6b1d3e',
    // Gradients
    gradientLight: 'linear-gradient(135deg, #fff1f5 0%, #ffe4e6 100%)',
    gradientDark: 'linear-gradient(135deg, #500724 0%, #6b1d3e 100%)',
  },
};

interface ThemeContextType {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ColorTheme>(() => {
    const saved = localStorage.getItem('colorTheme') as ColorTheme;
    return saved && saved in COLOR_THEMES ? saved : 'indigo';
  });

  useEffect(() => {
    localStorage.setItem('colorTheme', theme);
    
    // Update CSS variables
    const colors = COLOR_THEMES[theme];
    const root = document.documentElement;
    
    // Primary colors
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    
    // Light mode colors
    root.style.setProperty('--light-bg', colors.lightBg);
    root.style.setProperty('--light-text', colors.lightText);
    root.style.setProperty('--light-secondary-text', colors.lightSecondaryText);
    root.style.setProperty('--light-border', colors.lightBorder);
    root.style.setProperty('--light-card-bg', colors.lightCardBg);
    
    // Dark mode colors
    root.style.setProperty('--dark-bg', colors.darkBg);
    root.style.setProperty('--dark-text', colors.darkText);
    root.style.setProperty('--dark-secondary-text', colors.darkSecondaryText);
    root.style.setProperty('--dark-border', colors.darkBorder);
    root.style.setProperty('--dark-card-bg', colors.darkCardBg);
    
    // Gradients
    root.style.setProperty('--gradient-light', colors.gradientLight);
    root.style.setProperty('--gradient-dark', colors.gradientDark);
  }, [theme]);

  const setTheme = (newTheme: ColorTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
