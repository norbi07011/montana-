import React from 'react';
import { motion } from 'framer-motion';

export const MorphingShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-20 hidden dark:block">
      {/* Shape 1 - Circle */}
      <motion.div
        className="absolute top-20 left-10 w-48 h-48 rounded-full border-2 border-montana-gold/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Shape 2 - Triangle */}
      <motion.div
        className="absolute bottom-20 right-10 w-0 h-0 border-l-[90px] border-r-[90px] border-b-[120px] border-transparent border-b-montana-gold/20"
        animate={{
          rotate: [0, 120, 240, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Shape 3 - Square */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-32 h-32 border-2 border-blue-500/20"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-montana-gold"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};
