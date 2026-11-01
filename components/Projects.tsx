
import React from 'react';
import { Project } from '../types';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Database,
  ShieldCheck,
  LayoutDashboard,
  ClipboardList,
  FileClock,
  Search,
  ArrowDownToLine,
  LockKeyhole,
  CheckCircle2,
  Building2,
  CalendarDays,
} from 'lucide-react';

const Projects: React.FC = () => {

  // EXISTING PROJECTS
  const projects: Project[] = [
    {
      id: 1,
      title: "SmartShell",
      description:
        "A turtle egg monitoring system integrating IoT sensors and a mobile application. Monitors temperature and humidity in real-time to aid conservation.",
      tags: ["IoT", "Flutter", "Firebase", "C++"],
      githubUrl: "https://github.com/syasy00/TurtleMobileApp.git",
      image:
        "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "AI Virtual Mouse",
      description:
        "A hands-free system allowing users to control their computer mouse using hand gestures captured via webcam, powered by Computer Vision algorithms.",
      tags: ["Python", "OpenCV", "AI", "HCI"],
      githubUrl: "https://github.com/syasy00/VirtualMouse.git",
      image:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Foreign Arrival Dashboard",
      description:
        "An interactive analytics dashboard visualizing foreign arrival trends in Malaysia. Provides data insights through dynamic charts and filtering.",
      tags: ["Python", "Pandas", "Data Viz", "Streamlit"],
      githubUrl:
        "https://github.com/syasy00/Malaysia_Foreign_Arrival_Dashboard.git",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "SmartEcoRain",
      description:
        "An intelligent rainwater harvesting system using IoT sensors to detect rain intensity and automate water collection for sustainable usage.",
      tags: ["IoT", "C++", "Sensors", "Eco-Tech"],
      githubUrl: "https://github.com/syasy00/SmartEcoRain.git",
      image:
        "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // IPQC SYSTEM FEATURES
  const ipqcFeatures = [
    { icon: ClipboardList, name: "Finding Management" },
    { icon: LayoutDashboard, name: "Quality Dashboard" },
    { icon: ShieldCheck, name: "Role-Based Access" },
    { icon: CheckCircle2, name: "ICAR Tracking" },
    { icon: Search, name: "Search & Filtering" },
    { icon: FileClock, name: "Audit History" },
    { icon: ArrowDownToLine, name: "Import & Export" },
    { icon: Database, name: "Record Management" },
  ];

  const ipqcTags = [
    "Web Development",
    "MySQL",
    "UI/UX Design",
    "Database Design",
    "System Testing",
    "Quality Management",
  ];

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 font-bold">
              // Portfolio Collection
            </span>

            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mt-4 mb-5">
              Selected{" "}
              <span className="italic text-indigo-600 dark:text-indigo-400">
                Works
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 max-w-xl font-serif text-lg leading-relaxed">
              A collection of projects combining software engineering,
              creativity, problem-solving, and practical industry experience.
            </p>
          </div>

          <a
            href="https://github.com/syasy00"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-mono text-sm uppercase tracking-wider border-b border-transparent hover:border-current pb-1"
          >
            View GitHub Archive
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* FEATURED INTERNSHIP PROJECT */}
        <div className="mb-24">

          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-indigo-500" />

            <span className="font-mono text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400">
              01 / Featured Industry Project
            </span>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl shadow-indigo-500/5">

            <div className="grid lg:grid-cols-2">

              {/* LEFT: DASHBOARD ILLUSTRATION */}
              <div className="relative min-h-[450px] lg:min-h-full bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 p-6 md:p-10 flex items-center justify-center overflow-hidden">

                {/* BACKGROUND EFFECTS */}
                <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none" />

                <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-purple-500/20 blur-[100px] pointer-events-none" />

                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* MOCK DASHBOARD WINDOW */}
                <div className="relative z-10 w-full max-w-lg rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden transform lg:rotate-[-2deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-700">

                  {/* BROWSER BAR */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.03]">

                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>

                    <span className="font-mono text-[10px] text-slate-400 tracking-widest">
                      IPQC TRACKER
                    </span>

                    <LockKeyhole className="w-3.5 h-3.5 text-slate-500" />
                  </div>

                  {/* DASHBOARD CONTENT */}
                  <div className="p-5 md:p-6">

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-indigo-400 mb-1">
                          Quality Management
                        </p>

                        <h4 className="text-lg md:text-xl font-bold text-white">
                          IPQC Overview
                        </h4>
                      </div>

                      <div className="w-9 h-9 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                        <LayoutDashboard className="w-4 h-4 text-indigo-400" />
                      </div>
                    </div>

                    {/* STATUS CARDS */}
                    <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">

                      <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                        <span className="text-[9px] uppercase tracking-wider text-slate-400">
                          Open
                        </span>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-amber-400 rounded-full" />
                          <span className="text-sm font-bold text-white">
                            Finding
                          </span>
                        </div>
                      </div>

                      <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                        <span className="text-[9px] uppercase tracking-wider text-slate-400">
                          ICAR
                        </span>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                          <span className="text-sm font-bold text-white">
                            Review
                          </span>
                        </div>
                      </div>

                      <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                        <span className="text-[9px] uppercase tracking-wider text-slate-400">
                          Closed
                        </span>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                          <span className="text-sm font-bold text-white">
                            Done
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* SEARCH BAR */}
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10 mb-5">
                      <Search className="w-4 h-4 text-slate-500" />
                      <span className="text-xs text-slate-500">
                        Search quality findings...
                      </span>
                    </div>

                    {/* MOCK FINDING RECORDS */}
                    <div className="rounded-xl border border-white/10 overflow-hidden">

                      <div className="grid grid-cols-3 gap-2 p-3 bg-white/10 text-[10px] uppercase tracking-wider text-slate-300 font-semibold">
                        <span>Record</span>
                        <span>Process</span>
                        <span>Status</span>
                      </div>

                      {[
                        {
                          id: "IPQC-001",
                          process: "Inspection",
                          status: "Open",
                          color: "text-amber-400 bg-amber-400/10",
                        },
                        {
                          id: "IPQC-002",
                          process: "Assembly",
                          status: "ICAR",
                          color: "text-indigo-400 bg-indigo-400/10",
                        },
                        {
                          id: "IPQC-003",
                          process: "Production",
                          status: "Closed",
                          color: "text-emerald-400 bg-emerald-400/10",
                        },
                      ].map((record) => (
                        <div
                          key={record.id}
                          className="grid grid-cols-3 gap-2 items-center px-3 py-4 border-t border-white/5 text-[10px] md:text-xs"
                        >
                          <span className="font-mono text-slate-300">
                            {record.id}
                          </span>

                          <span className="text-slate-400">
                            {record.process}
                          </span>

                          <span>
                            <span
                              className={`inline-block px-2 py-1 rounded-md text-[10px] font-semibold ${record.color}`}
                            >
                              {record.status}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] text-white/40 font-mono tracking-wider whitespace-nowrap">
                  Illustrative Interface · Not Actual Company Data
                </span>
              </div>

              {/* RIGHT: PROJECT INFORMATION */}
              <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-[10px] uppercase tracking-wider font-bold">
                    <Building2 className="w-3 h-3" />
                    Industry Project
                  </span>

                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] uppercase tracking-wider font-bold">
                    Pre-Deployment
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight mb-5">
                  IPQC{" "}
                  <span className="italic text-indigo-600 dark:text-indigo-400">
                    Web System.
                  </span>
                </h3>

                <div className="flex flex-wrap items-center gap-4 mb-6 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Advanced Energy
                  </span>

                  <span className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    2026
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  Designed and developed a web-based system to digitalize
                  In-Process Quality Control (IPQC) workflows during my
                  industrial internship at Advanced Energy Industries
                  (Malaysia) Sdn. Bhd.
                </p>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  The system centralizes quality finding records, supports
                  corrective action monitoring, and provides structured
                  workflows for tracking inspection findings, ICAR
                  submissions, access permissions, and audit activities.
                </p>

                {/* FEATURES */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-5">
                    Key Features
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                    {ipqcFeatures.map((feature, index) => {
                      const Icon = feature.icon;

                      return (
                        <div
                          key={index}
                          className="flex items-center gap-3 group/feature"
                        >
                          <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover/feature:bg-indigo-100 dark:group-hover/feature:bg-indigo-500/20 transition-colors">
                            <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>

                          <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium">
                            {feature.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* TECHNOLOGY TAGS */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {ipqcTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* DEPLOYMENT NOTE */}
                <div className="border-l-2 border-indigo-500 bg-slate-50 dark:bg-white/[0.03] rounded-r-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <LockKeyhole className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Project Status & Confidentiality
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    Developed and tested in a controlled development
                    environment. Production integration, formal
                    acceptance, and deployment remain subject to
                    company authorization. Internal data and source
                    code are not publicly shared.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ACADEMIC AND PERSONAL PROJECTS */}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-indigo-500" />

              <span className="font-mono text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400">
                02 / Academic & Personal Projects
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
              More Things I've{" "}
              <span className="italic text-indigo-600 dark:text-indigo-400">
                Built.
              </span>
            </h3>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
            Exploring different technologies through hands-on
            experimentation and creative problem-solving.
          </p>

        </div>

        {/* EXISTING PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col gap-5"
            >

              {/* PROJECT IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/5">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-4 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} demo`}
                      className="p-4 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}

                </div>

                {/* PROJECT INDEX */}
                <span className="absolute top-5 left-5 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md text-slate-900 dark:text-white font-mono text-xs font-bold px-3 py-2 rounded-lg">
                  0{project.id}
                </span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="flex-1 flex flex-col">

                <div className="flex justify-between items-start gap-4 mb-3">

                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                    className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* TECHNOLOGY TAGS */}
                <div className="flex flex-wrap gap-2 mt-auto">

                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-2 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>
            </article>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">

          <div>
            <p className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-2">
              Curious about my other experiments?
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              There's always something new I'm building or learning.
            </p>
          </div>

          <a
            href="https://github.com/syasy00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:scale-105 transition-transform shadow-lg"
          >
            <Github className="w-5 h-5" />
            Explore My GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;
