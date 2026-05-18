import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './index.css';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('themeMode');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen relative overflow-hidden transition-all duration-500" style={{
        color: isDarkMode ? 'var(--dark-text)' : 'var(--light-text)',
      }}>
        {/* Static background gradient with accent */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full filter blur-[120px]"
            style={{
              backgroundColor: 'var(--color-primary)',
              opacity: isDarkMode ? 0.15 : 0.12,
            }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full filter blur-[120px]"
            style={{
              backgroundColor: 'var(--color-secondary)',
              opacity: isDarkMode ? 0.15 : 0.12,
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full filter blur-[150px]"
            style={{
              backgroundColor: 'var(--color-accent)',
              opacity: isDarkMode ? 0.08 : 0.06,
            }}
          ></div>
          
          {/* Subtle Grid Pattern for Futuristic Look */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
            style={{
              opacity: isDarkMode ? 1 : 0.5,
            }}
          ></div>
        </div>

        <Header isDarkMode={isDarkMode} onModeToggle={() => setIsDarkMode(!isDarkMode)} />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer isDarkMode={isDarkMode} />
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
