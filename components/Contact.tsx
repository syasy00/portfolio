import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react';

// --- OFFICIAL BRAND ICONS (Colorful) ---

const GmailLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#4285F4" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    <path fill="#34A853" d="M24 19.366V5.457c0-2.023-2.309-3.178-3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" opacity="0.2"/>{/* Shadow for depth */}
    <path fill="#FBBC04" d="M3.273 4.636L12 10.91l8.727-6.273v-1.637c0-1.28-1.464-2.009-2.473-1.282L12 5.636 5.746 1.718c-1.01-.727-2.473 0-2.473 1.282v1.636z" />
    <path fill="#EA4335" d="M0 5.455v13.909c0 .9.736 1.636 1.636 1.636h3.819v-9.273L0 5.455z" />
    <path fill="#34A853" d="M24 5.455v13.909c0 .9-.736 1.636-1.636 1.636h-3.819v-9.273L24 5.455z" />
    {/* Correcting the main red M shape to be distinctive */}
    <path fill="#EA4335" d="M1.636 3.273C1.636 1.99 3.09 1.264 4.1 1.99L12 7.636l7.9-5.646c1.01-.726 2.464 0 2.464 1.283v2.182L12 12.545 1.636 5.455V3.273z" />
  </svg>
);

const OutlookLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#0072C6" d="M1 12.5v-1c0-.552.448-1 1-1h1v-4l6 4v2l-6 4v-4H1z" />
    <path fill="#F2F2F2" d="M23 5h-7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" />
    <path fill="#0072C6" d="M22 6v12H16V6h6zm-6 3h4v1.5h-4V9zm0 3.5h4V14h-4v-1.5z" />
    <path fill="#0072C6" d="M16 6L9 10.5v3l7 4.5V6z" opacity="0.1"/>
    <rect x="2" y="8" width="8" height="8" rx="1" fill="#0078D4"/>
    <text x="3" y="14" fill="white" fontSize="6" fontWeight="bold" fontFamily="Arial">O</text>
  </svg>
);

const YahooLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#6001D2" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm.257-11.163l5.584-9.333h-3.56L11.516 8.78 8.647 3.504H5.21l5.374 9.177v6.628h3.673v-6.472z"/>
  </svg>
);


const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "nursyasya.aina03@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden transition-colors duration-300 bg-slate-50 dark:bg-slate-950">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="mb-12">
          <h2 className="text-5xl md:text-8xl font-serif font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Connect.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-sans leading-relaxed">
            I'm currently open to internship opportunities. 
            Ready to solve problems and build beautiful interfaces?
          </p>
        </div>

        {/* Glass Card */}
        <div className="group relative max-w-lg mx-auto bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-2 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/20 hover:scale-[1.02]">
          
          <div className="bg-white dark:bg-slate-950 rounded-2xl p-8 flex flex-col items-center gap-6">
            
            {/* 1. Copy Email Box */}
            <div className="w-full">
              <div 
                onClick={handleCopy}
                className="cursor-pointer group/email flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm md:text-base text-slate-900 dark:text-white font-medium">
                    {email}
                  </span>
                </div>
                
                <div className="relative">
                  <div className={`transition-all duration-300 ${copied ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                    <Copy className="w-5 h-5 text-slate-400 group-hover/email:text-indigo-500 transition-colors" />
                  </div>
                  <div className={`absolute inset-0 transition-all duration-300 ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
              <div className={`h-6 mt-2 transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-xs font-bold text-green-500 flex items-center justify-center gap-1">
                  <Check className="w-3 h-3" /> Copied!
                </span>
              </div>
            </div>

            {/* 2. Direct Open Icons (REAL BRAND COLORS) */}
            <div className="w-full">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Open directly in</p>
              
              <div className="grid grid-cols-4 gap-3">
                 {/* Default App */}
                 <a 
                   href={`mailto:${email}`}
                   title="Default Mail App"
                   className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:scale-105 hover:border-slate-400 dark:hover:border-slate-600 transition-all flex items-center justify-center"
                 >
                   <Mail className="w-6 h-6" />
                 </a>

                 {/* Gmail */}
                 <a 
                   href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   title="Gmail"
                   className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 hover:scale-105 hover:shadow-lg transition-all flex items-center justify-center"
                 >
                   <GmailLogo />
                 </a>

                 {/* Outlook */}
                 <a 
                   href={`https://outlook.office.com/mail/deeplink/compose?to=${email}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   title="Outlook"
                   className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 hover:scale-105 hover:shadow-lg transition-all flex items-center justify-center"
                 >
                   <OutlookLogo />
                 </a>

                 {/* Yahoo */}
                 <a 
                   href={`https://compose.mail.yahoo.com/?to=${email}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   title="Yahoo Mail"
                   className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 hover:scale-105 hover:shadow-lg transition-all flex items-center justify-center"
                 >
                   <YahooLogo />
                 </a>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100 dark:bg-slate-900 my-2"></div>

            {/* 3. Social Links */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a 
                href="https://github.com/syasy00"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/nursyasya-aina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>

          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-slate-400 text-sm font-mono uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
           <MapPin className="w-4 h-4" />
           <span>Based in Kangar, Malaysia</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;