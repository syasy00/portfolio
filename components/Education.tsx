import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white">
            Experience <span className="italic">&</span> Education
          </h2>
        </div>

        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

          {/* Education Item */}
          <div className="relative flex flex-col sm:flex-row items-center sm:justify-between group">
             {/* Center Dot */}
             <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-slate-900 dark:bg-white rounded-full sm:-translate-x-1/2 z-10 hidden sm:block"></div>

             {/* Left */}
             <div className="w-full sm:w-[45%] mb-8 sm:mb-0 sm:pr-12 sm:text-right">
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">BSc Computer Science</h3>
                <h4 className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">Universiti Utara Malaysia</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                   Major in Human-Centered Computing. Leading the university coding club and focusing on software engineering principles.
                </p>
             </div>
             
             {/* Right (Date) */}
             <div className="w-full sm:w-[45%] sm:pl-12 flex items-center gap-2 text-slate-400 font-mono text-sm uppercase tracking-widest">
                <Calendar className="w-4 h-4" /> 2022 - 2026
             </div>
          </div>

           {/* Work Item */}
           <div className="relative flex flex-col sm:flex-row-reverse items-center sm:justify-between group">
             {/* Center Dot */}
             <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-slate-900 dark:bg-white rounded-full sm:-translate-x-1/2 z-10 hidden sm:block ring-4 ring-slate-50 dark:ring-slate-950"></div>

             {/* Right Content (actually displayed on left in flex-row-reverse) */}
             <div className="w-full sm:w-[45%] mb-8 sm:mb-0 sm:pl-12 text-left">
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Available for Work</h3>
                <h4 className="text-green-600 dark:text-green-400 font-medium mb-2">Open to Opportunities</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                   Seeking internship or part-time roles in full-stack development. Ready to deploy skills in a real-world environment.
                </p>
             </div>
             
             {/* Left Date (actually displayed on right) */}
             <div className="w-full sm:w-[45%] sm:pr-12 flex items-center justify-end gap-2 text-slate-400 font-mono text-sm uppercase tracking-widest">
                Present <Briefcase className="w-4 h-4" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;