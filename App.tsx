import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check system preference or default to dark
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
       // Optional: Set default based on system, but we'll stick to 'dark' as default per design
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans selection:bg-green-400/30 transition-colors duration-300">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      {/* Interactive Cursor Glow */}
      <CursorGlow />

      <div className="relative z-10">
        <Navbar toggleTheme={toggleTheme} isDark={theme === 'dark'} />
        <main className="space-y-0">
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;