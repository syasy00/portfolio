import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Terminal, FolderGit2, Mail, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDark }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Skills', href: '#skills', icon: Terminal },
    { name: 'About', href: '#about', icon: User },
    { name: 'Work', href: '#projects', icon: FolderGit2 },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Floating Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-3 py-2 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full shadow-2xl shadow-slate-900/5 transition-colors duration-300">
        <a href="#home" className="px-4 font-serif font-bold italic text-slate-900 dark:text-white mr-2 text-lg">
          Syusyi.
        </a>
        <div className="w-px h-6 bg-slate-300 dark:bg-white/10 mx-1"></div>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`
              relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2
              ${activeSection === item.href.substring(1) 
                ? 'text-white bg-slate-900 dark:bg-white dark:text-slate-900' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'}
            `}
          >
            {item.name}
          </a>
        ))}
        <div className="w-px h-6 bg-slate-300 dark:bg-white/10 mx-1"></div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile Navbar (Bottom) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-200 dark:border-white/10 px-6 py-4 flex justify-between items-center transition-colors duration-300">
         <span className="font-serif font-bold italic text-xl text-slate-900 dark:text-white">Syusyi.</span>
         <div className="flex items-center gap-4">
           <button
             onClick={toggleTheme}
             className="p-2 text-slate-600 dark:text-slate-300"
           >
             {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
           </button>
           <button 
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
           >
             {isMobileMenuOpen ? <X /> : <Menu />}
           </button>
         </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
           {navItems.map((item) => (
             <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-serif font-bold italic text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
             >
                {item.name}
             </a>
           ))}
        </div>
      )}
    </>
  );
};

export default Navbar;