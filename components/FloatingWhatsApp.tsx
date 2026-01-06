import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = '+31647026240';
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-2 md:gap-3"
    >
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${phoneNumber.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow">
          <MessageCircle size={24} className="text-white md:w-7 md:h-7" />
        </div>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-montana-dark text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-montana-gold/20">
          Chat via WhatsApp
        </span>
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className="group relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-12 h-12 md:w-14 md:h-14 bg-montana-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow">
          <Phone size={24} className="text-montana-black md:w-7 md:h-7" />
        </div>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-montana-dark text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-montana-gold/20">
          24/7 Bel Direct
        </span>
      </motion.a>
    </motion.div>
  );
};
