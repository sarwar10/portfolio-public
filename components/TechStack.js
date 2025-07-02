import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { techStack } from '../data';

const TechStack = () => {
  const [activeTech, setActiveTech] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <section id="tech-stack" className="py-10 md:py-12 bg-gradient-to-r from-black to-green-950 text-white">
      <div className="container mx-auto px-4">
      <motion.h2
          className="text-3xl md:text-4xl font-bold mb-34 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-yellow-400">Tech Stack</span>
        </motion.h2>
        
        <div className="relative w-full h-[60vw] max-h-[300px] md:h-[400px] mx-auto">
          {/* Center display */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${activeTech ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="w-[35vw] h-[35vw] max-w-[200px] max-h-[200px] rounded-full bg-gray-900/95 border-4 border-yellow-400 flex flex-col items-center justify-center backdrop-blur-sm p-4 shadow-xl shadow-yellow-400/20">
              {activeTech ? (
                <>
                  <span className="md:text-2xl text-center font-bold text-yellow-400">
                    {activeTech.name}
                  </span>
                  <span className="text-sm text-gray-300 mt-1 font-medium">
                    {activeTech.level}
                  </span>
                </>
              ) : (
                <span className="text-gray-400 text-center text-sm px-4">
                  {isMobile ? 'Tap any icon' : 'Hover any icon'}
                </span>
              )}
            </div>
          </div>
          
          {techStack.map((tech, index) => {
            const angle = (index * 360) / techStack.length;
            const baseRadius = isMobile ? 130 : 180;
            const activeRadius = baseRadius * 1; // Move 30% closer to center when active
            
            const x = (activeTech?.name === tech.name ? activeRadius : baseRadius) * Math.cos((angle * Math.PI) / 180);
            const y = (activeTech?.name === tech.name ? activeRadius : baseRadius) * Math.sin((angle * Math.PI) / 180);
            
            return (
              <div
                key={index}
                className={`absolute w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full transition-all duration-500 ${
                  activeTech?.name === tech.name 
                    ? 'bg-green-600 scale-110 border-4 border-yellow-400 shadow-lg shadow-yellow-400/30 z-10' 
                    : 'bg-gray-800 border-4 border-green-500 hover:border-green-400 z-0'
                }`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => !isMobile && setActiveTech(tech)}
                onMouseLeave={() => !isMobile && setActiveTech(null)}
                onClick={() => isMobile && setActiveTech(activeTech?.name === tech.name ? null : tech)}
              >
                <div className="transition-transform duration-300">
                  {tech.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;