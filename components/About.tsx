
import React from 'react';
import {
  GraduationCap,
  MapPin,
  Download,
  BriefcaseBusiness,
  ArrowUpRight,
  Sparkles,
  Code2,
  Heart,
  CheckCircle2,
  Award
} from 'lucide-react';

const About: React.FC = () => {

  const interests = [
    'Software Development',
    'UI/UX Design',
    'Data Analytics',
    'Automation',
    'Human-Centered Computing'
  ];

  return (
    <section
      id="about"
      className="py-24 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: PORTRAIT */}
          <div className="lg:col-span-5 relative">

            {/* DECORATIVE BACKGROUND */}
            <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-3xl -rotate-3 transform scale-105" />

            {/* PORTRAIT CARD */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">

              <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-800 relative group">

                <img
                  src="/about-me.jpeg"
                  alt="Portrait of Nursyasya Aina"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay pointer-events-none" />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* PHOTO CAPTION */}
                <div className="absolute bottom-7 left-7 right-7">

                  <p className="text-white/80 font-mono text-[10px] uppercase tracking-[0.25em] mb-2">
                    Beyond the Code
                  </p>

                  <p className="font-serif italic text-2xl text-white">
                    A little bit about me.
                  </p>

                </div>
              </div>
            </div>

            {/* DECORATIVE STICKER */}
            <div className="absolute -top-5 -right-3 sm:-right-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-xl rounded-2xl p-4 rotate-6 hover:rotate-0 transition-transform duration-300">

              <Sparkles className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />

            </div>

            {/* INTERNSHIP BADGE */}
            <div className="absolute -bottom-5 left-4 sm:left-8 flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl">

              <div className="w-9 h-9 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  Internship Completed
                </p>

                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Advanced Energy · 2026
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: ABOUT CONTENT */}
          <div className="lg:col-span-7 space-y-8 mt-6 lg:mt-0">

            {/* INTRODUCTION */}
            <div>

              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-5">
                <span className="w-6 h-px bg-indigo-500" />
                Get to Know Me
              </span>

              <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-7 leading-tight">
                About{' '}
                <span className="italic text-indigo-600 dark:text-indigo-400">
                  Syusyi.
                </span>
              </h2>

              <div className="space-y-5">

                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-serif">

                  Hello! I'm{' '}
                  <strong className="text-slate-900 dark:text-white">
                    Nursyasya Aina
                  </strong>
                  , a Computer Science student at{' '}
                  <strong className="text-slate-900 dark:text-white">
                    Universiti Utara Malaysia
                  </strong>
                  , specializing in{' '}
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium italic">
                    Human-Centered Computing
                  </span>.

                </p>

                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">

                  I recently completed my industrial internship at{' '}
                  <strong className="text-slate-900 dark:text-white">
                    Advanced Energy Industries (Malaysia) Sdn. Bhd.
                  </strong>
                  , where I gained practical experience in software
                  development, quality management workflows,
                  process automation, and data visualization.

                </p>

                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">

                  During my internship, I developed an{' '}
                  <strong className="text-slate-900 dark:text-white">
                    IPQC Web System
                  </strong>
                  , implemented an Excel VBA automation solution,
                  and contributed to Power BI dashboard development
                  in collaboration with the IT team.

                </p>

                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">

                  Beyond my industry experience, I enjoy exploring
                  different areas of technology, from IoT and mobile
                  applications to web development and UI/UX design.
                  I believe that great technology should not only
                  work efficiently but also feel intuitive and
                  meaningful to the people using it.

                </p>

              </div>
            </div>

            {/* INTERESTS */}
            <div>

              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-4 h-4 text-pink-500" />

                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  What I'm Passionate About
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">

                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-2 text-xs font-semibold rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {interest}
                  </span>
                ))}

              </div>
            </div>

            {/* INFORMATION CARDS */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* EDUCATION CARD */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300">

                <div className="flex items-center gap-3 mb-3">

                  <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl">
                    <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <h4 className="text-slate-900 dark:text-white font-serif font-bold">
                    Education
                  </h4>

                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                  BSc Computer Science
                </p>

                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                  Universiti Utara Malaysia
                </p>

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-200 dark:border-white/10">

                  <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />

                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Current CGPA
                  </span>

                  <span className="ml-auto font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">
                    3.84/4.00
                  </span>

                </div>
              </div>

              {/* LOCATION CARD */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300">

                <div className="flex items-center gap-3 mb-3">

                  <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl">
                    <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <h4 className="text-slate-900 dark:text-white font-serif font-bold">
                    Location
                  </h4>

                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                  Kangar, Perlis
                </p>

                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                  Malaysia
                </p>

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-200 dark:border-white/10">

                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>

                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Open to full-time roles
                  </span>

                </div>
              </div>

            </div>

            {/* CALL TO ACTION */}
            <div className="flex flex-wrap items-center gap-6 pt-4">

              {/* RESUME LINK */}
              <a
                href="/Nursyasya_Aina_Resume.pdf"
                download="Nursyasya_Aina_Resume.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:scale-105 transition-transform shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              {/* PROJECT LINK */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <Code2 className="w-4 h-4" />

                Explore My Work

                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
