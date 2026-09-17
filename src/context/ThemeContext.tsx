import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  lightBg: string;
  lightText: string;
  lightSecondaryText: string;
  lightBorder: string;
  lightCardBg: string;
  darkBg: string;
  darkText: string;
  darkSecondaryText: string;
  darkBorder: string;
  darkCardBg: string;
  gradientLight: string;
  gradientDark: string;
}

export const DESIGNER_THEME: ThemeConfig = {
  primary: '#c29f74', // Rich Caramel Camel Beige
  secondary: '#d1b997', // Soft Champagne Sand
  accent: '#a88154', // Deep Warm Bronze
  lightBg: '#fbf9f4', // Warm Linen & Alabaster
  lightText: '#26201b', // Deep Espresso Charcoal (soft warm black, high contrast)
  lightSecondaryText: '#746759', // Warm Taupe / Oat
  lightBorder: '#e8dfd1', // Soft Warm Sand Border
  lightCardBg: '#ffffff',
  darkBg: '#14110f', // Deep Roasted Espresso Dark Background
  darkText: '#fbf8f3', // Creamy Warm Linen White
  darkSecondaryText: '#aba092', // Muted Warm Sand Gray
  darkBorder: 'rgba(225, 210, 185, 0.12)',
  darkCardBg: '#1c1714', // Warm Dark Mocha Surface
  gradientLight: 'linear-gradient(135deg, #fbf9f4 0%, #f3ede2 100%)',
  gradientDark: 'linear-gradient(135deg, #14110f 0%, #1c1714 100%)',
};

// Backwards compatibility dictionary if referenced
export const COLOR_THEMES: Record<string, ThemeConfig> = {
  beige: DESIGNER_THEME,
  emerald: DESIGNER_THEME,
  indigo: DESIGNER_THEME,
  ocean: DESIGNER_THEME,
  sunset: DESIGNER_THEME,
  forest: DESIGNER_THEME,
  purple: DESIGNER_THEME,
  rose: DESIGNER_THEME,
};

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: (event?: React.MouseEvent) => void;
  theme: string;
  themeConfig: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('themeMode');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply CSS variables once on mount
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', DESIGNER_THEME.primary);
    root.style.setProperty('--color-primary-rgb', '194, 159, 116');
    root.style.setProperty('--color-secondary', DESIGNER_THEME.secondary);
    root.style.setProperty('--color-accent', DESIGNER_THEME.accent);
    root.style.setProperty('--light-bg', DESIGNER_THEME.lightBg);
    root.style.setProperty('--light-text', DESIGNER_THEME.lightText);
    root.style.setProperty('--light-secondary-text', DESIGNER_THEME.lightSecondaryText);
    root.style.setProperty('--light-border', DESIGNER_THEME.lightBorder);
    root.style.setProperty('--light-card-bg', DESIGNER_THEME.lightCardBg);
    root.style.setProperty('--dark-bg', DESIGNER_THEME.darkBg);
    root.style.setProperty('--dark-text', DESIGNER_THEME.darkText);
    root.style.setProperty('--dark-secondary-text', DESIGNER_THEME.darkSecondaryText);
    root.style.setProperty('--dark-border', DESIGNER_THEME.darkBorder);
    root.style.setProperty('--dark-card-bg', DESIGNER_THEME.darkCardBg);
    root.style.setProperty('--gradient-light', DESIGNER_THEME.gradientLight);
    root.style.setProperty('--gradient-dark', DESIGNER_THEME.gradientDark);
  }, []);

  // Sync mode changes to document and localStorage
  useEffect(() => {
    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light');
    const root = document.documentElement;
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
      root.classList.add('dark');
    } else {
      document.body.classList.add('light-mode');
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = (event?: React.MouseEvent) => {
    const nextMode = !isDarkMode;

    // Award-winning Circular Reveal transition if View Transitions API is supported
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsViewTransition = typeof document !== 'undefined' && 'startViewTransition' in document;

    if (!supportsViewTransition || isReducedMotion || !event) {
      setIsDarkMode(nextMode);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = (document as unknown as { startViewTransition: (cb: () => void) => { ready: Promise<void> } }).startViewTransition(() => {
      setIsDarkMode(nextMode);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        theme: 'beige',
        themeConfig: DESIGNER_THEME,
      }}
    >
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
