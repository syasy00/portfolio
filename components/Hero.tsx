import React, { useState, useEffect } from 'react';
import { ArrowDownCircle, Star, Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center justify-center relative py-40 overflow-x-hidden transition-colors duration-300 bg-slate-950 bg-grid"
    >
      {/* Background Text - Big "SYUSYI" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <h1 className="text-[12rem] md:text-[18rem] font-serif font-black leading-none text-slate-900 dark:text-white whitespace-nowrap">
          SYUSYI
        </h1>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* TEXT COLUMN */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative z-20">
            <div className="relative">
              {/* Badge */}
              <div
                className={`inline-block px-4 py-1 mb-6 border border-slate-900/10 dark:border-white/20 rounded-full bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
              >
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-pink-500 dark:text-pink-400">
                  • Welcome to my world
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 dark:text-white leading-none tracking-tight mb-8">
                <div
                  className={`transition-all duration-700 delay-100 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                >
                  Design.
                </div>
                <div
                  className={`italic font-light text-slate-600 dark:text-slate-400 transition-all duration-700 delay-200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                >
                  Develop.
                </div>
                <div
                  className={`pb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x transition-all duration-700 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                >
                  Deploy.
                </div>
              </h1>

              {/* Bio Paragraph */}
              <p
                className={`text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed font-sans mb-12 transition-all duration-700 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
              >
                I'm{' '}
                <strong className="text-slate-900 dark:text-white font-serif italic text-2xl">
                  Nursyasya Aina
                </strong>
                . A final-year Computer Science student specializing in Human-Centered
                Computing, dedicated to crafting intuitive and accessible digital experiences.
              </p>

              {/* Button Container */}
              <div
                className={`relative flex items-center gap-6 transition-all duration-700 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
              >
                <a
                  href="#projects"
                  className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold overflow-hidden transition-transform hover:scale-105 shadow-2xl cursor-pointer z-50"
                >
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 dark:via-slate-900/20 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative flex items-center gap-3">
                    View Work{' '}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                <div className="flex items-center gap-1 group cursor-default">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 group-hover:bg-green-400 transition-colors" />
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-2 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    Seeking for internship
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div
            className={`lg:col-span-5 order-1 lg:order-2 relative z-0 flex justify-center lg:justify-end lg:pl-8 transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
          >
            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-[3/4]">
              {/* Photo Card */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-[8px] border-white dark:border-slate-800 shadow-2xl rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-[1.02] hover:shadow-indigo-500/20 z-10 group">
                <img
                  src="syasya.jpeg"
                  alt="Nursyasya Aina"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-white transform transition-transform duration-500 group-hover:translate-x-2">
                  <p className="font-serif italic text-lg opacity-90">Based in</p>
                  <p className="font-bold text-xl tracking-wide">MALAYSIA</p>
                </div>
              </div>

              {/* Stickers */}
              <div className="absolute -top-6 -left-6 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold font-serif italic text-xl shadow-lg rotate-sticker-1 animate-float z-20 border-2 border-white dark:border-slate-900 hover:scale-110 transition-transform cursor-pointer">
                Hello!
              </div>

              <div className="absolute bottom-12 -right-8 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-5 py-5 rounded-full shadow-xl rotate-sticker-2 animate-float-fast z-20 flex flex-col items-center justify-center border border-slate-200 dark:border-white/10 w-24 h-24 hover:rotate-0 hover:scale-110 transition-all cursor-pointer">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight">
                  Software
                  <br />
                  Dev
                </span>
              </div>

              {/* Sparkles sticker moved behind */}
              <div className="absolute top-1/2 -right-12 bg-pink-500 text-white p-3 rounded-xl shadow-lg rotate-12 -z-10 animate-spin-slow hover:animate-spin">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
          Scroll
        </span>
        <div className="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
