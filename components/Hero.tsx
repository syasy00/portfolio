import React from 'react';
import { ArrowDownCircle, Star, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-12 overflow-hidden transition-colors duration-300">
      
      {/* Editorial Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <h1 className="text-[12rem] md:text-[18rem] font-serif font-black leading-none text-slate-900 dark:text-white whitespace-nowrap">
          SYUSYI
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Typography Area */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative">
            <div className="relative z-10">
              <div className="inline-block px-4 py-1 mb-4 border border-slate-900/10 dark:border-white/20 rounded-full bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm">
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
                  • Portfolio 2024
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tight mb-6">
                Design. <br />
                <span className="italic font-light text-slate-600 dark:text-slate-400">Develop.</span> <br />
                Deploy.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed font-sans mb-8">
                I'm <strong className="text-slate-900 dark:text-white font-serif italic text-2xl">Nursyasya Aina</strong>. 
                A Human-Centered Computing student building the bridge between complex code and beautiful interfaces.
              </p>

              <div className="flex items-center gap-6">
                 <a href="#projects" className="group flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold transition-all hover:scale-105 hover:shadow-xl">
                   View Work 
                   <ArrowDownCircle className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                 </a>
                 <div className="flex items-center gap-1">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-2">Available for hire</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Editorial Image Composition */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center lg:justify-end">
             <div className="relative w-full max-w-md aspect-[4/5] md:aspect-[3/4]">
                
                {/* Decorative Elements behind */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                
                {/* Main Photo Card */}
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-[8px] border-white dark:border-slate-800 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-700 ease-out z-10 group">
                   <img 
                     src="syasya.jpeg" 
                     alt="Nursyasya Aina" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   
                   {/* Gradient Overlay for Text Readability */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                   <div className="absolute bottom-6 left-6 text-white">
                      <p className="font-serif italic text-lg opacity-90">Based in</p>
                      <p className="font-bold text-xl tracking-wide">MALAYSIA</p>
                   </div>
                </div>

                {/* Sticker: Hello */}
                <div className="absolute -top-6 -left-6 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold font-serif italic text-xl shadow-lg rotate-sticker-1 animate-float z-20 border-2 border-white dark:border-slate-900">
                   Hello!
                </div>

                {/* Sticker: Role */}
                <div className="absolute bottom-12 -right-8 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-5 py-5 rounded-full shadow-xl rotate-sticker-2 animate-float-fast z-20 flex flex-col items-center justify-center border border-slate-200 dark:border-white/10 w-24 h-24">
                   <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mb-1" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight">Software<br/>Dev</span>
                </div>

                {/* Sticker: Sparkle */}
                <div className="absolute top-1/2 -right-12 bg-pink-500 text-white p-3 rounded-xl shadow-lg rotate-12 z-0 animate-spin-slow">
                   <Sparkles className="w-8 h-8" />
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;