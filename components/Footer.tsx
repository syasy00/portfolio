import React from 'react';
import { Heart, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-white py-12 border-t border-slate-200 dark:border-white/5 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Logo */}
        <div className="mb-6">
          <span className="font-mono font-bold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            &lt;Syusyi/&gt;
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mb-8">
          <a 
            href="https://github.com/syasy00" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-indigo-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/nursyasya-aina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-white dark:hover:bg-blue-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Credits */}
        <p className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-500 text-sm mb-4">
          Designed & Built with <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" /> in Malaysia
        </p>
        <div className="text-xs text-slate-400 dark:text-slate-600 font-mono">
          © {new Date().getFullYear()} Nursyasya Aina. MIT License.
        </div>
      </div>
    </footer>
  );
};

export default Footer;