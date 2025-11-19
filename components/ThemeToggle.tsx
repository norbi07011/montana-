import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-slate-700 dark:bg-slate-800 p-1 transition-colors"
      whileTap={{ scale: 0.95 }}
    >
      {/* Track background */}
      <motion.div
        className="absolute inset-1 rounded-full bg-gradient-to-r from-amber-400 to-montana-gold"
        initial={false}
        animate={{
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Switch */}
      <motion.div
        className="relative w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center"
        initial={false}
        animate={{
          x: isDark ? 0 : 32,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : 180,
            scale: isDark ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-slate-700" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}
        </motion.div>
      </motion.div>

      {/* Icons on track */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Sun className="w-3 h-3 text-amber-300 opacity-50" />
        <Moon className="w-3 h-3 text-slate-300 opacity-50" />
      </div>
    </motion.button>
  );
};
