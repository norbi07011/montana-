import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, Banknote, Star, Wrench, Droplets, Flame } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { TextReveal } from '../components/TextReveal';
import { useParallax } from '../hooks/useParallax';

export const Home: React.FC = () => {
  const { t, dir } = useLanguage();

  const features = [
    { icon: <Clock size={32} />, title: t.features.f1 },
    { icon: <ShieldCheck size={32} />, title: t.features.f2 },
    { icon: <Banknote size={32} />, title: t.features.f3 },
    { icon: <Star size={32} />, title: t.features.f4 },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/WIDEO W TLE.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img 
              src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=2070&auto=format&fit=crop&grayscale" 
              alt="Montana ST Background" 
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-montana-black via-montana-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-montana-black via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center md:text-left w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className={`max-w-3xl mx-auto md:mx-0 ${dir === 'rtl' ? 'mr-0 ml-auto text-right' : ''}`}
          >
            {/* Animated Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8 flex justify-center md:justify-start"
            >
              <motion.img
                src="/LOGO.jpg"
                alt="Montana ST Logo"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
                style={{ 
                  filter: 'brightness(1.2) contrast(1.5) drop-shadow(0 0 20px rgba(212,175,55,0.5))',
                  mixBlendMode: 'screen'
                }}
                animate={{ 
                  filter: [
                    'drop-shadow(0 0 20px rgba(212,175,55,0.5))',
                    'drop-shadow(0 0 30px rgba(212,175,55,0.8))',
                    'drop-shadow(0 0 20px rgba(212,175,55,0.5))'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.h1
              variants={fadeInUpVariants}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight tracking-tight text-shadow-gold"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUpVariants}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-sm sm:text-base md:text-xl text-slate-600 dark:text-slate-300 mb-6 md:mb-10 font-light tracking-wide border-l-4 border-montana-gold pl-4 md:pl-6"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-3 md:gap-6"
            >
              <motion.a
                href="tel:+31647026240"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-montana-gold text-montana-black font-bold uppercase tracking-widest text-sm md:text-base overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all text-center"
              >
                <span className="relative z-10">{t.hero.ctaCall}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.a>
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 sm:px-6 md:px-8 py-3 md:py-4 border border-montana-gold text-montana-gold font-bold uppercase tracking-widest text-sm md:text-base hover:bg-montana-gold hover:text-montana-black transition-all"
                >
                  {t.hero.ctaQuote}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 md:py-20 bg-slate-100 dark:bg-montana-dark relative">
         <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-center text-slate-900 dark:text-white mb-8 md:mb-16 uppercase tracking-widest"
            >
               <span className="text-montana-gold">//</span> {t.features.title}
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8"
            >
               {features.map((f, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="glass-panel p-4 md:p-8 text-center group hover:border-montana-gold/50 transition-all duration-500"
                  >
                     <motion.div
                       whileHover={{ rotate: 360, scale: 1.2 }}
                       transition={{ duration: 0.6 }}
                       className="text-montana-gold mb-2 md:mb-4 flex justify-center [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8"
                     >
                       {f.icon}
                     </motion.div>
                     <h3 className="text-xs md:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wide">{f.title}</h3>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* Quote Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-10 md:py-16 bg-white dark:bg-montana-black border-y border-slate-200 dark:border-white/5"
      >
         <div className="max-w-5xl mx-auto px-4 text-center">
            <TextReveal
              text="Geen drama, alleen oplossing. Montana ST regelt het."
              className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 italic"
            />
         </div>
      </motion.section>

      {/* Statistics Section */}
      <section className="py-12 md:py-20 bg-slate-100 dark:bg-montana-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            <motion.div variants={scaleIn} className="text-center">
              <AnimatedCounter
                end={500}
                suffix="+"
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-montana-gold"
              />
              <p className="mt-1 md:mt-2 text-slate-600 dark:text-slate-400 uppercase tracking-wider text-xs md:text-sm">Projecten</p>
            </motion.div>
            <motion.div variants={scaleIn} className="text-center">
              <AnimatedCounter
                end={15}
                suffix="+"
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-montana-gold"
              />
              <p className="mt-1 md:mt-2 text-slate-600 dark:text-slate-400 uppercase tracking-wider text-xs md:text-sm">Jaar Ervaring</p>
            </motion.div>
            <motion.div variants={scaleIn} className="text-center">
              <AnimatedCounter
                end={98}
                suffix="%"
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-montana-gold"
              />
              <p className="mt-1 md:mt-2 text-slate-600 dark:text-slate-400 uppercase tracking-wider text-xs md:text-sm">Tevreden Klanten</p>
            </motion.div>
            <motion.div variants={scaleIn} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-montana-gold">24/7</div>
              <p className="mt-1 md:mt-2 text-slate-600 dark:text-slate-400 uppercase tracking-wider text-xs md:text-sm">Bereikbaar</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-100 to-white dark:from-montana-dark dark:to-montana-black">
         <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-8 md:mb-12 uppercase tracking-widest flex items-center gap-2 md:gap-4"
            >
               <span className="w-8 md:w-12 h-[2px] bg-montana-gold"></span> {t.servicesPage.title}
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            >
               {[
                 { img: "https://images.unsplash.com/photo-1584622024886-7984d88bcf3a?q=80&w=800&auto=format&fit=crop", icon: <Droplets />, idx: 0 },
                 { img: "https://images.unsplash.com/photo-1585058004826-2f391879d85a?q=80&w=800&auto=format&fit=crop", icon: <Flame />, idx: 2 },
                 { img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop", icon: <Wrench />, idx: 3 },
               ].map((service, index) => (
                 <motion.div
                   key={index}
                   variants={scaleIn}
                   whileHover={{ scale: 1.05 }}
                   className="relative h-48 md:h-80 group overflow-hidden border border-white/10 cursor-pointer"
                 >
                    <motion.img
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      src={service.img}
                      className="w-full h-full object-cover opacity-60"
                      alt={t.servicesPage.items[service.idx].title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 md:p-6 flex flex-col justify-end">
                       <motion.div
                         initial={{ y: 20, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         transition={{ delay: index * 0.1 }}
                         className="text-montana-gold mb-1 md:mb-2 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8"
                       >
                         {React.cloneElement(service.icon, { size: 24 })}
                       </motion.div>
                       <h3 className="text-sm md:text-xl font-bold text-white uppercase tracking-wider">{t.servicesPage.items[service.idx].title}</h3>
                    </div>
                 </motion.div>
               ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8 md:mt-12"
            >
               <Link to="/services" className="inline-block border-b border-montana-gold text-montana-gold pb-1 hover:text-white transition-colors uppercase tracking-widest text-xs md:text-sm">
                  {t.common.moreInfo} &rarr;
               </Link>
            </motion.div>
         </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-20 relative overflow-hidden"
      >
         <div className="absolute inset-0 bg-montana-copper/10 z-0"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8"
            >
              {t.hero.ctaCall}
            </motion.h2>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-montana-black px-6 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest text-sm md:text-base hover:bg-montana-gold transition-colors"
              >
                {t.contactPage.title}
              </motion.button>
            </Link>
         </div>
      </motion.section>
    </div>
  );
};