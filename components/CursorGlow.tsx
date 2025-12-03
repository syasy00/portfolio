import React, { useEffect, useRef } from 'react';

const CursorGlow: React.FC = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      
      // Native animation for smooth trailing effect
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" }); 
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
       <div 
         ref={blobRef}
         className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-teal-500/30 blur-[120px] mix-blend-screen opacity-60 dark:opacity-50 transform -translate-x-1/2 -translate-y-1/2 will-change-auto"
         style={{ left: '50%', top: '50%' }} 
       />
    </div>
  );
};

export default CursorGlow;