import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export function FloatingParticles() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate small blue 3D cubes floating around the page
    const newParticles = Array.from({ length: 30 }).map((_, i) => {
      const size = Math.random() * 12 + 8; // Small blue cubes
      return {
        id: i,
        size,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 30 + 40, // Slow floating
        delay: Math.random() * 10,
        rotateX: Math.random() * 360,
        rotateY: Math.random() * 360,
        opacity: Math.random() * 0.4 + 0.2, // Subtle but visible
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ perspective: "800px" }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute will-change-transform"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: ["0vh", "-100vh"],
            rotateX: [p.rotateX, p.rotateX + 720],
            rotateY: [p.rotateY, p.rotateY + 720],
            x: ["0vw", `${(Math.random() - 0.5) * 20}vw`],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        >
          {/* Small 3D cube faces */}
          <div className="absolute inset-0 bg-[#0066FF]/60 border border-[#00A3FF]/40 backdrop-blur-sm" style={{ transform: `translateZ(${p.size/2}px)` }} />
          <div className="absolute inset-0 bg-[#0055DD]/60 border border-[#00A3FF]/40 backdrop-blur-sm" style={{ transform: `rotateY(90deg) translateZ(${p.size/2}px)` }} />
          <div className="absolute inset-0 bg-[#0044CC]/60 border border-[#00A3FF]/40 backdrop-blur-sm" style={{ transform: `rotateY(180deg) translateZ(${p.size/2}px)` }} />
          <div className="absolute inset-0 bg-[#0055DD]/60 border border-[#00A3FF]/40 backdrop-blur-sm" style={{ transform: `rotateY(-90deg) translateZ(${p.size/2}px)` }} />
          <div className="absolute inset-0 bg-[#0077FF]/60 border border-[#00A3FF]/40 backdrop-blur-sm" style={{ transform: `rotateX(90deg) translateZ(${p.size/2}px)` }} />
          <div className="absolute inset-0 bg-[#0033AA]/60 border border-[#00A3FF]/40 backdrop-blur-sm" style={{ transform: `rotateX(-90deg) translateZ(${p.size/2}px)` }} />
        </motion.div>
      ))}
      
      {/* Background ambient orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none opacity-20" style={{ background: "radial-gradient(circle, rgba(0,102,255,0.06) 0%, rgba(0,102,255,0) 60%)" }} />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-20" style={{ background: "radial-gradient(circle, rgba(0,212,170,0.04) 0%, rgba(0,212,170,0) 60%)" }} />
    </div>
  );
}