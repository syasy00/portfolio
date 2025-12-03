import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-white py-12 border-t border-slate-200 dark:border-white/5 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="mb-4">
          <span className="font-mono font-bold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            &lt;Syusyi/&gt;
          </span>
        </div>
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