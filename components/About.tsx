import React from 'react';
import { GraduationCap, MapPin, Download, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 rounded-3xl -rotate-3 transform scale-105"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
               <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-800 relative group">
                  {/* Reuse the user image here too, or a different abstract one */}
                  <img src="syasya.jpeg" alt="Portrait" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay"></div>
               </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                About <span className="italic text-indigo-600 dark:text-indigo-400">Syusyi</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert">
                 <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6 font-serif">
                   Hello! I'm a passionate student from <strong>Universiti Utara Malaysia</strong> currently pursuing a Bachelor in Computer Science, majoring in <span className="text-indigo-600 dark:text-indigo-400 font-medium italic">Human-Centered Computing</span>.
                 </p>
                 <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-sans">
                   My journey involves bridging the gap between complex code and user-friendly experiences. I love exploring <strong>IoT systems</strong>, building mobile apps with <strong>Flutter</strong>, and solving problems with <strong>Python</strong>.
                 </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
               <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center gap-4">
                 <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-full">
                   <GraduationCap className="w-6 h-6 text-slate-900 dark:text-white" />
                 </div>
                 <div>
                   <h4 className="text-slate-900 dark:text-white font-serif font-bold">Education</h4>
                   <p className="text-slate-500 dark:text-slate-400 text-sm">BSc Computer Science (UUM)</p>
                 </div>
               </div>
               
               <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center gap-4">
                 <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-full">
                   <MapPin className="w-6 h-6 text-slate-900 dark:text-white" />
                 </div>
                 <div>
                   <h4 className="text-slate-900 dark:text-white font-serif font-bold">Location</h4>
                   <p className="text-slate-500 dark:text-slate-400 text-sm">Kangar, Perlis</p>
                 </div>
               </div>
            </div>

            <div className="flex gap-4 pt-4">
               <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-slate-900 dark:border-white pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                 <Download className="w-4 h-4" /> Download Resume
               </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;