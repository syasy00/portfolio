import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0); // 0: Design, 1: Develop, 2: Deploy, 3: Exit
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Progress Bar Logic
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // 2. Stage Logic
    const timeouts = [
      setTimeout(() => setStage(1), 800),
      setTimeout(() => setStage(2), 1600),
      setTimeout(() => setStage(3), 2400),
      setTimeout(onComplete, 3200),
    ];

    return () => {
      clearInterval(timer);
      timeouts.forEach(clearTimeout);
    };
  }, [onComplete]);

  // Helper to create random stars
  // We use fixed positions to ensure they look like a static background that splits
  const renderStars = (count: number) => {
    return [...Array(count)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          opacity: Math.random() * 0.5 + 0.1,
          animationDuration: `${Math.random() * 2 + 1}s`,
          animationDelay: `${Math.random()}s`,
        }}
      />
    ));
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      
      {/* --- TOP CURTAIN --- */}
      <div className={`absolute top-0 left-0 w-full bg-slate-950 overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        stage === 3 ? 'h-0' : 'h-1/2'
      }`}>
        {/* 1. Center Glow (Top Half) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        {/* 2. Glitter Stars */}
        {renderStars(15)}
      </div>

      {/* --- BOTTOM CURTAIN --- */}
      <div className={`absolute bottom-0 left-0 w-full bg-slate-950 overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        stage === 3 ? 'h-0' : 'h-1/2'
      }`}>
        {/* 1. Center Glow (Bottom Half) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        {/* 2. Glitter Stars */}
        {renderStars(15)}
      </div>

      {/* --- CENTER TEXT CONTENT --- */}
      <div className={`relative z-10 w-full transition-opacity duration-500 ${stage === 3 ? 'opacity-0' : 'opacity-100'}`}>
        <div className="grid place-items-center w-full">
          
          {/* WORD 1: DESIGN (Outline) */}
          <h1 className={`col-start-1 row-start-1 text-6xl md:text-9xl font-serif font-bold text-transparent tracking-tighter transition-all duration-500 transform ${
            stage === 0 ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
          }`}
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}> 
            Design.
          </h1>

          {/* WORD 2: DEVELOP (Solid White) */}
          <h1 className={`col-start-1 row-start-1 text-6xl md:text-9xl font-serif font-bold text-white tracking-tighter transition-all duration-500 transform ${
            stage === 1 ? 'translate-y-0 opacity-100' : stage > 1 ? '-translate-y-24 opacity-0' : 'translate-y-24 opacity-0'
          }`}>
            Develop.
          </h1>

          {/* WORD 3: DEPLOY (Gradient + Glow) */}
          <h1 className={`col-start-1 row-start-1 text-6xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x tracking-tighter py-4 transition-all duration-500 transform ${
            stage === 2 ? 'translate-y-0 opacity-100 scale-110 blur-sm' : 'translate-y-24 opacity-0'
          }`}>
            Deploy.
          </h1>
          {/* Sharp overlay for Deploy to fix blur issues */}
          <h1 className={`col-start-1 row-start-1 text-6xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x tracking-tighter py-4 transition-all duration-500 transform ${
            stage === 2 ? 'translate-y-0 opacity-100 scale-110' : 'translate-y-24 opacity-0'
          }`}>
            Deploy.
          </h1>

        </div>
      </div>

      {/* PROGRESS COUNTER */}
      <div className={`absolute bottom-8 right-8 z-20 font-mono text-4xl md:text-6xl font-bold text-white/20 transition-opacity duration-300 ${stage === 3 ? 'opacity-0' : 'opacity-100'}`}>
        {progress}%
      </div>

    </div>
  );
};

export default Preloader;