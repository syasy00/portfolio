import React from 'react';

const Skills: React.FC = () => {
  // Organized visually like a keyboard layout
  const keyboardRows = [
    [
      { name: "Python", color: "text-blue-500", label: "Py" },
      { name: "Flutter", color: "text-sky-400", label: "Fl" },
      { name: "Dart", color: "text-cyan-400", label: "Da" },
      { name: "Java", color: "text-red-500", label: "Ja" },
      { name: "MySQL", color: "text-orange-500", label: "SQL" },
      { name: "React", color: "text-cyan-300", label: "Re" },
    ],
    [
      { name: "IoT", color: "text-green-500", label: "IoT" },
      { name: "Docker", color: "text-blue-600", label: "Dk" },
      { name: "Git", color: "text-red-400", label: "Git" },
      { name: "Figma", color: "text-pink-500", label: "Fi" },
      { name: "Firebase", color: "text-yellow-500", label: "Fb" },
    ],
    [
       { name: "Tailwind", color: "text-cyan-400", label: "Tw", width: "w-32" }, // Spacebar-ish
       { name: "Arduino", color: "text-teal-500", label: "Ard" },
       { name: "C++", color: "text-blue-700", label: "C++" },
    ]
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="mb-16">
           <h2 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 dark:text-white mb-2 italic">
             The Secret <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-bold not-italic">Sauce</span>
           </h2>
           <p className="font-mono text-sm text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-4">
             // My Technical Arsenal
           </p>
        </div>

        {/* Keyboard Grid */}
        <div className="flex flex-col items-center gap-4 select-none">
          {keyboardRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-3 md:gap-4">
              {row.map((key, keyIndex) => (
                <div 
                  key={keyIndex}
                  className={`
                    keycap group relative h-16 md:h-20 ${key.width || 'w-16 md:w-20'} 
                    bg-slate-100 dark:bg-slate-800 rounded-xl md:rounded-2xl 
                    flex flex-col items-center justify-center cursor-pointer 
                    border border-slate-300 dark:border-slate-700
                    hover:translate-y-1 active:translate-y-2 active:shadow-none
                    transition-all duration-100
                  `}
                >
                  {/* Top Letter */}
                  <span className={`text-xs md:text-sm font-bold opacity-40 absolute top-2 left-3 ${key.color}`}>
                    {key.label}
                  </span>
                  
                  {/* Icon/Name Center */}
                  <span className={`text-xs md:text-base font-bold ${key.color} group-hover:scale-110 transition-transform`}>
                    {key.name}
                  </span>

                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-20 bg-current transition-opacity pointer-events-none ${key.color}`}></div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12">
           <p className="text-sm text-slate-500 dark:text-slate-400 font-serif italic">
             * Typing ideas into reality since 2022
           </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;