import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Clock, Eye, HeartHandshake, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-montana-black py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Story Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
        >
           <div className="order-2 md:order-1">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 uppercase tracking-widest">
                {t.aboutPage.storyTitle}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                {t.aboutPage.storyText}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                 Begonnen als eenmanszaak, uitgegroeid tot een elite-team. Wij werken niet voor iedereen; wij werken voor mensen die kwaliteit eisen. Geen snelle praatjes, maar duurzame oplossingen.
              </p>
           </div>
           <motion.div 
             className="order-1 md:order-2 relative"
             whileHover={{ scale: 1.02 }}
             transition={{ duration: 0.3 }}
           >
              <div className="absolute inset-0 border-2 border-montana-gold/20 translate-x-4 translate-y-4 z-0"></div>
              <img 
                src="/LOGO.jpg" 
                alt="Montana ST Logo" 
                className="relative z-10 w-full h-auto object-contain p-8" 
                style={{ 
                  filter: 'brightness(1.3) contrast(1.6)',
                  mixBlendMode: 'screen'
                }}
              />
           </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 md:mb-24"
        >
           <motion.h2 
             variants={fadeInUp}
             className="font-serif text-xl sm:text-2xl md:text-3xl text-center text-slate-900 dark:text-white mb-8 md:mb-12 uppercase tracking-widest"
           >
             {t.aboutPage.valuesTitle}
           </motion.h2>
           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {[
                { icon: Shield, text: t.aboutPage.v1 },
                { icon: Eye, text: t.aboutPage.v2 },
                { icon: HeartHandshake, text: t.aboutPage.v3 },
                { icon: Clock, text: t.aboutPage.v4 },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="glass-panel p-3 sm:p-4 md:p-6 text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="mx-auto text-montana-gold mb-2 md:mb-4" size={24} />
                  </motion.div>
                  <h3 className="text-slate-900 dark:text-white text-xs md:text-sm uppercase tracking-wider font-bold">{value.text}</h3>
                </motion.div>
              ))}
           </div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative border-l border-montana-gold/20 ml-6 md:ml-0 md:mx-auto md:w-2/3 pl-8 md:pl-0"
        >
           {[
             { year: '2010', title: 'Start van Montana ST', desc: 'De oprichting. Eén bus, één gereedschapskist, en een visie.' },
             { year: '2015', title: '1000+ Tevreden Klanten', desc: 'Expansie in Zuid-Holland. Focus op luxe badkamers.' },
             { year: '2024', title: '24/7 Service Organisatie', desc: 'Volledig gedigitaliseerd, snelle respons en een groter wagenpark.' },
           ].map((milestone, idx) => (
             <motion.div 
               key={idx}
               variants={fadeInUp}
               className="mb-12 relative"
             >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, type: "spring" }}
                  className="absolute -left-[39px] top-1 w-5 h-5 bg-montana-gold rounded-full border-4 border-slate-50 dark:border-montana-black md:left-auto md:right-full md:mr-8"
                />
                <span className="text-montana-gold font-bold text-xl block mb-2">{milestone.year}</span>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">{milestone.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{milestone.desc}</p>
             </motion.div>
           ))}
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-16 md:mt-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-center text-slate-900 dark:text-white mb-8 md:mb-12 uppercase tracking-widest"
          >
            Certificaten & Kwaliteiten
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: 'VCA Gecertificeerd', year: '2024', desc: 'Veiligheid, Gezondheid & Milieu' },
              { title: 'KIWA Erkenning', year: '2023', desc: 'Gas & Water Installaties' },
              { title: 'NEN 3140', year: '2022', desc: 'Elektrotechnische Installaties' },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative glass-panel p-4 sm:p-6 md:p-8 text-center group hover:border-montana-gold/40 transition-all duration-500"
              >
                {/* Logo Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <img
                    src="/LOGO.jpg"
                    alt="Montana ST"
                    className="w-24 md:w-32 h-24 md:h-32 object-contain"
                    style={{ 
                      filter: 'brightness(1.3) contrast(1.5)',
                      mixBlendMode: 'screen'
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-3 md:mb-6 border-2 border-montana-gold rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-montana-gold" size={28} />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">{cert.title}</h3>
                  <span className="inline-block bg-montana-gold/20 dark:bg-montana-gold/10 text-montana-gold text-xs md:text-sm font-bold px-2 md:px-3 py-1 mb-2 md:mb-3">
                    {cert.year}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};
