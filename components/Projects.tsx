import React, { useRef, useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "SmartShell",
      description: "A turtle egg monitoring system integrating IoT sensors and a mobile application. Monitors temperature and humidity in real-time.",
      tags: ["IoT", "Flutter", "Firebase", "C++"],
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Student System",
      description: "Comprehensive Java application for managing student records, grades, and attendance with a secure MySQL database backend.",
      tags: ["Java", "MySQL", "JDBC", "Swing"],
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Syusyi Portfolio",
      description: "The interactive website you are viewing. Built with React and Tailwind CSS, featuring editorial design and spotlight effects.",
      tags: ["React", "Tailwind", "Editorial"],
      githubUrl: "https://github.com",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section id="projects" className="py-24 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-4">
               Selected <span className="italic text-indigo-600 dark:text-indigo-400">Works</span>
             </h2>
             <p className="text-slate-600 dark:text-slate-400 max-w-xl font-serif text-lg">
               Curated projects showcasing code, design, and problem solving.
             </p>
           </div>
           <a href="https://github.com" className="hidden md:flex items-center gap-2 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-mono text-sm uppercase tracking-wider border-b border-transparent hover:border-current">
             View Archive <ArrowUpRight className="w-4 h-4" />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col gap-4">
              
              {/* Image Area - Clean Editorial Style */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-100 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <a href={project.githubUrl} className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
                     <Github className="w-5 h-5" />
                   </a>
                   {project.demoUrl && (
                     <a href={project.demoUrl} className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
                       <ExternalLink className="w-5 h-5" />
                     </a>
                   )}
                </div>
              </div>
              
              {/* Content Area */}
              <div>
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                     {project.title}
                   </h3>
                   <span className="font-mono text-xs text-slate-400">0{project.id}</span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;