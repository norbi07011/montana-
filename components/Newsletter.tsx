import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Mail, Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Voer een geldig e-mailadres in');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (replace with actual newsletter service)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just save to localStorage or send via WhatsApp
      const message = `Nieuwe nieuwsbrief aanmelding:\nEmail: ${email}`;
      console.log(message);
      
      toast.success('Bedankt voor je inschrijving! 🎉', {
        duration: 5000,
      });
      
      setEmail('');
    } catch (error) {
      toast.error('Er ging iets mis. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-8 border border-montana-gold/20"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-montana-gold/20 rounded-full flex items-center justify-center">
          <Mail className="text-montana-gold" size={24} />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">Blijf op de hoogte</h3>
          <p className="text-slate-400 text-sm">Ontvang tips en aanbiedingen</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jouw@email.nl"
          className="flex-1 bg-montana-black/50 border border-white/10 px-4 py-3 text-white focus:border-montana-gold outline-none transition-colors focus-gold"
          disabled={isSubmitting}
        />
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-montana-gold text-montana-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-montana-goldHover transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="spinner border-montana-black w-5 h-5"></div>
          ) : (
            <>
              <Send size={18} />
              <span className="hidden sm:inline">Inschrijven</span>
            </>
          )}
        </motion.button>
      </form>

      <p className="text-xs text-slate-500 mt-3">
        We respecteren je privacy. Je kunt je op elk moment uitschrijven.
      </p>
    </motion.div>
  );
};
