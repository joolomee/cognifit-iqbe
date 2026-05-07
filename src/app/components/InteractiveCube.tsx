import React, { useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";
import { Hand } from "lucide-react";

export function InteractiveCube() {
  const [hasInteracted, setHasInteracted] = useState(false);
  // True 3x3x3 structure, built precisely like the real IQbe
  // White tiles with specific patterns (red crosses and blue dots)
  const cubes = useMemo(() => {
    const arr = [];
    
    // We'll remove one block on the front face (x: -1, y: 0, z: 1) to show "the missing piece"
    const missingPiece = "-1,0,1";

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const key = `${x},${y},${z}`;
          
          // Skip the missing piece to create the puzzle hole
          if (key === missingPiece) continue; 
          
          // Also skip the inner core completely to make it an empty shell puzzle like typical IQ tests
          if (x === 0 && y === 0 && z === 0) continue;

          arr.push({ 
            id: key, 
            x, 
            y, 
            z
          });
        }
      }
    }
    return arr;
  }, []);

  const size = 90; 
  const gap = 8;
  const offset = size + gap;

  // Custom Rotation Controls for Drag & Auto-rotate
  const rotateX = useMotionValue(15);
  const rotateY = useMotionValue(45); // Start at an angle showing 3 faces
  const isDragging = useRef(false);

  useAnimationFrame((t, delta) => {
    if (!isDragging.current) {
      rotateX.set(rotateX.get() + delta * 0.005);
      rotateY.set(rotateY.get() + delta * 0.008);
    }
  });

  // Render the specific patterns found on the blocks
  const renderPattern = (type: string, isOuterFace: boolean = true) => {
    if (!isOuterFace) return null; 
    
    if (type === 'cross') {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute w-full h-[6px] bg-red-500 rounded-full rotate-45 shadow-sm"></div>
              <div className="absolute w-full h-[6px] bg-red-500 rounded-full -rotate-45 shadow-sm"></div>
           </div>
        </div>
      );
    } else if (type === 'triangle') {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
           {/* Upward pointing green triangle */}
           <div className="w-0 h-0 
              border-l-[14px] border-l-transparent 
              border-r-[14px] border-r-transparent 
              border-b-[24px] border-b-[#00D4AA] 
              drop-shadow-sm">
           </div>
        </div>
      );
    } else {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="relative w-10 h-10">
              <div className="absolute top-1 right-1 w-[14px] h-[14px] rounded-full bg-[#0066FF] shadow-sm"></div>
              <div className="absolute bottom-1 left-1 w-[14px] h-[14px] rounded-full bg-[#0066FF] shadow-sm"></div>
           </div>
        </div>
      );
    }
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center pointer-events-auto scale-90 sm:scale-100"
      style={{ perspective: "1800px" }}
    >
      {/* Invisible overlay to capture drag interactions */}
      <motion.div
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0}
        onDragStart={() => { isDragging.current = true; setHasInteracted(true); }}
        onDragEnd={() => { isDragging.current = false; }}
        onPointerDown={() => setHasInteracted(true)}
        onDrag={(event, info) => {
          rotateY.set(rotateY.get() + info.delta.x * 0.5);
          rotateX.set(rotateX.get() - info.delta.y * 0.5);
        }}
        className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing touch-none"
        style={{ touchAction: "none" }}
      />

      {/* Hand animation until user interacts */}
      {!hasInteracted && (
        <motion.div 
          className="absolute z-[60] pointer-events-none text-white drop-shadow-lg"
          initial={{ opacity: 0, x: -30, y: 30 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [-30, 30, 30, 30],
            y: [30, -10, -10, -10],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut"
          }}
        >
          <Hand className="w-12 h-12 text-[#00A3FF] fill-[#00A3FF]/20 rotate-[-15deg]" strokeWidth={1.5} />
        </motion.div>
      )}

      <motion.div
        style={{ 
          rotateX, 
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative pointer-events-none"
      >
        {/* The glowing highlight box for the "missing piece" */}
        <div
          style={{
            position: "absolute",
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
            transform: `translate3d(${-1 * offset}px, ${0 * offset}px, ${1 * offset}px)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front face (Z = 1) */}
          <div className="absolute inset-0 border-[3px] border-[#00A3FF]/60 rounded-xl shadow-[0_0_30px_rgba(0,163,255,0.4)] animate-pulse" 
               style={{ transform: `rotateY(0deg) translateZ(${size/2}px)`, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }} />
          {/* Right face (X = 1) - inner wall of the missing piece */}
          <div className="absolute inset-0 border-[3px] border-[#00A3FF]/60 rounded-xl shadow-[0_0_30px_rgba(0,163,255,0.4)] animate-pulse" 
               style={{ transform: `rotateY(90deg) translateZ(${size/2}px)`, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }} />
          {/* Left face (X = -1) - outer wall of the missing piece */}
          <div className="absolute inset-0 border-[3px] border-[#00A3FF]/60 rounded-xl shadow-[0_0_30px_rgba(0,163,255,0.4)] animate-pulse" 
               style={{ transform: `rotateY(-90deg) translateZ(${size/2}px)`, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }} />
        </div>

        {cubes.map((c) => {
          // Softer, premium look:
          const faceClass = "absolute inset-0 bg-gradient-to-br from-[#ffffff] to-[#f4f7fa] rounded-xl flex items-center justify-center border border-white shadow-[inset_0_0_12px_rgba(0,0,0,0.03)]";
          const bodyClass = "bg-[#CBD5E1] rounded-xl"; // Softer light-grey body

          return (
            <div
              key={c.id}
              style={{
                position: "absolute",
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: -size / 2,
                transform: `translate3d(${c.x * offset}px, ${c.y * offset}px, ${c.z * offset}px)`,
                transformStyle: "preserve-3d"
              }}
            >
              <div className={`${bodyClass} absolute inset-0 shadow-md`} style={{ transform: `rotateY(0deg) translateZ(${size/2}px)`, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
                <div className={`${faceClass}`}>{renderPattern('dots', c.z === 1)}</div>
              </div>
              
              <div className={`${bodyClass} absolute inset-0 shadow-md`} style={{ transform: `rotateY(90deg) translateZ(${size/2}px)`, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
                <div className={`${faceClass}`}>{renderPattern('cross', c.x === 1)}</div>
              </div>
              
              <div className={`${bodyClass} absolute inset-0 shadow-md`} style={{ transform: `rotateY(180deg) translateZ(${size/2}px)`, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
                <div className={`${faceClass}`}>{renderPattern('dots', c.z === -1)}</div>
              </div>
              
              <div className={`${bodyClass} absolute inset-0 shadow-md`} style={{ transform: `rotateY(-90deg) translateZ(${size/2}px)`, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
                <div className={`${faceClass}`}>{renderPattern('cross', c.x === -1)}</div>
              </div>
              
              <div className={`${bodyClass} absolute inset-0 shadow-md`} style={{ transform: `rotateX(90deg) translateZ(${size/2}px)`, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
                <div className={`${faceClass}`}>{renderPattern('triangle', c.y === -1)}</div>
              </div>
              
              <div className={`${bodyClass} absolute inset-0 shadow-md`} style={{ transform: `rotateX(-90deg) translateZ(${size/2}px)`, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
                <div className={`${faceClass}`}>{renderPattern('triangle', c.y === 1)}</div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}