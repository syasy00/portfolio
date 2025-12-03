import React from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 transition-colors duration-300 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-5xl md:text-8xl font-serif font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
          Let's Work <br/> <span className="italic text-slate-400 dark:text-slate-600">Together.</span>
        </h2>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-serif">
          I'm currently seeking internship opportunities. Have a project in mind or just want to say hi? My inbox is open.
        </p>

        <a 
          href="mailto:nursyasya@example.com" 
          className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
        >
          <Mail className="w-5 h-5" />
          nursyasya@example.com
        </a>

        <div className="mt-16 pt-16 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-center items-center gap-8 text-slate-500 dark:text-slate-400">
           <div className="flex items-center gap-2">
             <MapPin className="w-4 h-4" />
             <span className="uppercase tracking-widest text-xs font-bold">Based in Kangar, Malaysia</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;