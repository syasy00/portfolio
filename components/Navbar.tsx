
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Home,
  User,
  Terminal,
  FolderGit2,
  Mail,
  Sun,
  Moon,
  BriefcaseBusiness,
  FileDown
} from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  {
    name: 'Experience',
    href: '#experience',
    icon: BriefcaseBusiness
  },
  { name: 'Skills', href: '#skills', icon: Terminal },
  { name: 'About', href: '#about', icon: User },
  { name: 'Work', href: '#projects', icon: FolderGit2 },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar: React.FC<NavbarProps> = ({
  toggleTheme,
  isDark
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const resumeUrl = '/Nursyasya_Aina_Resume.pdf';


  // Track current section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = 'home';

      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* DESKTOP FLOATING NAVBAR */}
      <nav
        aria-label="Main navigation"
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:flex items-center gap-1 px-3 py-2 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full shadow-2xl shadow-slate-900/5 transition-colors duration-300"
      >
        {/* LOGO */}
        <a
          href="#home"
          className="px-4 font-serif font-bold italic text-slate-900 dark:text-white mr-2 text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Syusyi.
        </a>

        <div className="w-px h-6 bg-slate-300 dark:bg-white/10 mx-1" />

        {/* NAVIGATION LINKS */}
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`
              relative px-3 py-2 rounded-full text-xs font-bold
              uppercase tracking-wider transition-all duration-300
              flex items-center gap-2 whitespace-nowrap
              ${activeSection === item.href.substring(1)
                ? 'text-white bg-slate-900 dark:bg-white dark:text-slate-900'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
              }
            `}
          >
            {item.name}
          </a>
        ))}

        <div className="w-px h-6 bg-slate-300 dark:bg-white/10 mx-1" />

        {/* RESUME BUTTON */}
        <a
          href={resumeUrl}
          download="Nursyasya_Aina_Resume.pdf"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md shadow-indigo-500/20 whitespace-nowrap"
          aria-label="Download resume"
        >
          <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          Resume
        </a>

        {/* THEME TOGGLE */}
        <button
          type="button"
          onClick={toggleTheme}
          className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
          aria-label={
            isDark ? 'Switch to light mode' : 'Switch to dark mode'
          }
        >
          {isDark ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
      </nav>

      {/* MOBILE NAVBAR - BOTTOM */}
      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 left-0 w-full z-50 lg:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-200 dark:border-white/10 px-6 py-4 flex justify-between items-center transition-colors duration-300"
      >
        {/* LOGO */}
        <a
          href="#home"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-serif font-bold italic text-xl text-slate-900 dark:text-white"
        >
          Syusyi.
        </a>

        <div className="flex items-center gap-3">

          {/* MOBILE RESUME BUTTON */}
          <a
            href={resumeUrl}
            download="Nursyasya_Aina_Resume.pdf"
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors"
            aria-label="Download resume"
          >
            <FileDown className="w-4 h-4" />
            Resume
          </a>

          {/* THEME TOGGLE */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300"
            aria-label={
              isDark ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label={
              isMobileMenuOpen ? 'Close menu' : 'Open menu'
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-5 overflow-y-auto py-16 animate-in fade-in duration-200">

          {/* MENU HEADER */}
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400 mb-4">
            Navigation
          </span>

          {/* MENU LINKS */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              activeSection === item.href.substring(1);

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  flex items-center gap-3 text-2xl
                  font-serif font-bold italic
                  transition-colors duration-300
                  ${isActive
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </a>
            );
          })}

          {/* MOBILE DOWNLOAD RESUME */}
          <a
            href={resumeUrl}
            download="Nursyasya_Aina_Resume.pdf"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center gap-3 mt-5 px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </a>

        </div>
      )}
    </>
  );
};

export default Navbar;
