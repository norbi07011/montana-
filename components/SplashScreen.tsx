import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-montana-black z-[100] flex items-center justify-center"
        >
          {/* Animated Background Circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-montana-gold/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-montana-gold/10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.05, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

          {/* Animated Logo */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              <motion.img
                src="/LOGO.jpg"
                alt="Montana ST"
                className="w-40 h-40 object-contain"
                style={{ 
                  filter: 'brightness(1.3) contrast(1.6) drop-shadow(0 0 40px rgba(212,175,55,0.8))',
                  mixBlendMode: 'screen'
                }}
                animate={{
                  filter: [
                    'brightness(1.3) contrast(1.6) drop-shadow(0 0 40px rgba(212,175,55,0.8))',
                    'brightness(1.4) contrast(1.7) drop-shadow(0 0 60px rgba(212,175,55,1))',
                    'brightness(1.3) contrast(1.6) drop-shadow(0 0 40px rgba(212,175,55,0.8))',
                  ],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Brand Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <motion.h1 
                className="font-serif text-3xl text-white tracking-[0.3em] uppercase mb-2"
                initial={{ letterSpacing: '0.1em' }}
                animate={{ letterSpacing: '0.3em' }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                MONTANA <span className="text-montana-gold">ST</span>
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.6 }}
                className="h-px bg-gradient-to-r from-transparent via-montana-gold to-transparent"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="text-xs text-slate-400 uppercase tracking-widest mt-3"
              >
                Premium Installatietechniek
              </motion.p>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="flex gap-2 justify-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-montana-gold rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
