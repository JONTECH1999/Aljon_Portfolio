import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Chatbot from './components/Chatbot';
import './index.css';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="min-h-screen relative overflow-hidden transition-colors duration-400" 
        style={{
          color: isDarkMode ? 'var(--dark-text)' : 'var(--light-text)',
        }}
      >
        {/* Ambient atmospheric lighting blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full filter blur-[140px] transition-all duration-700"
            style={{
              backgroundColor: '#dfbe95',
              opacity: isDarkMode ? 0.08 : 0.06,
            }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-[550px] h-[550px] rounded-full filter blur-[140px] transition-all duration-700"
            style={{
              backgroundColor: '#c29f74',
              opacity: isDarkMode ? 0.08 : 0.06,
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full filter blur-[170px] transition-all duration-700"
            style={{
              backgroundColor: '#a88154',
              opacity: isDarkMode ? 0.05 : 0.04,
            }}
          ></div>
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
            style={{
              opacity: isDarkMode ? 0.8 : 0.4,
            }}
          ></div>
        </div>

        <Header isDarkMode={isDarkMode} onModeToggle={toggleTheme} />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer isDarkMode={isDarkMode} />
        
        {/* 'Aljon' AI Portfolio Assistant */}
        <Chatbot />
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
