import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '',
  hover = true 
}) => {
  return (
    <motion.div
      className={`
        relative backdrop-blur-md bg-white/5 
        border border-white/10 rounded-2xl
        shadow-2xl shadow-black/50
        ${className}
      `}
      whileHover={hover ? { 
        scale: 1.02,
        borderColor: 'rgba(212, 175, 55, 0.3)',
      } : undefined}
      transition={{ duration: 0.3 }}
    >
      {/* Glass shine effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Bottom glow */}
      <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-montana-gold/50 to-transparent" />
    </motion.div>
  );
};
