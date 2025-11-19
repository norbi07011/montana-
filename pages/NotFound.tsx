import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Wrench, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const NotFound: React.FC = () => {
  const { language } = useLanguage();

  const messages = {
    NL: {
      title: 'Pagina Niet Gevonden',
      subtitle: 'Deze pagina bestaat niet of is verplaatst',
      home: 'Terug naar Home',
      services: 'Bekijk Diensten',
      contact: 'Neem Contact Op',
    },
    EN: {
      title: 'Page Not Found',
      subtitle: 'This page does not exist or has been moved',
      home: 'Back to Home',
      services: 'View Services',
      contact: 'Contact Us',
    },
    PL: {
      title: 'Strona Nie Znaleziona',
      subtitle: 'Ta strona nie istnieje lub została przeniesiona',
      home: 'Powrót do Strony Głównej',
      services: 'Zobacz Usługi',
      contact: 'Skontaktuj się',
    },
    TR: {
      title: 'Sayfa Bulunamadı',
      subtitle: 'Bu sayfa mevcut değil veya taşındı',
      home: 'Ana Sayfaya Dön',
      services: 'Hizmetleri Görüntüle',
      contact: 'İletişime Geç',
    },
    DE: {
      title: 'Seite Nicht Gefunden',
      subtitle: 'Diese Seite existiert nicht oder wurde verschoben',
      home: 'Zurück zur Startseite',
      services: 'Dienstleistungen ansehen',
      contact: 'Kontakt aufnehmen',
    },
    FR: {
      title: 'Page Non Trouvée',
      subtitle: 'Cette page n\'existe pas ou a été déplacée',
      home: 'Retour à l\'Accueil',
      services: 'Voir les Services',
      contact: 'Nous Contacter',
    },
    BG: {
      title: 'Страницата не е намерена',
      subtitle: 'Тази страница не съществува или е преместена',
      home: 'Обратно към началото',
      services: 'Преглед на услугите',
      contact: 'Свържете се с нас',
    },
    AR: {
      title: 'الصفحة غير موجودة',
      subtitle: 'هذه الصفحة غير موجودة أو تم نقلها',
      home: 'العودة إلى الصفحة الرئيسية',
      services: 'عرض الخدمات',
      contact: 'اتصل بنا',
    },
    HU: {
      title: 'Az oldal nem található',
      subtitle: 'Ez az oldal nem létezik vagy áthelyezték',
      home: 'Vissza a főoldalra',
      services: 'Szolgáltatások megtekintése',
      contact: 'Kapcsolat',
    },
  };

  const t = messages[language] || messages.NL;

  return (
    <div className="min-h-screen bg-montana-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-montana-gold rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-montana-gold rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.img
            src="/LOGO.jpg"
            alt="Montana ST"
            className="w-32 h-32 mx-auto object-contain"
            style={{ 
              filter: 'brightness(1.3) contrast(1.6) drop-shadow(0 0 30px rgba(212,175,55,0.5))',
              mixBlendMode: 'screen'
            }}
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="font-serif text-9xl md:text-[12rem] font-bold text-montana-gold/20 leading-none">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-widest">
            {t.title}
          </h2>
          <p className="text-slate-400 text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/"
            className="flex items-center gap-2 bg-montana-gold text-montana-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-montana-goldHover transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] group"
          >
            <Home size={20} className="group-hover:-translate-y-1 transition-transform" />
            {t.home}
          </Link>

          <Link
            to="/services"
            className="flex items-center gap-2 border-2 border-montana-gold text-montana-gold px-8 py-4 font-bold uppercase tracking-widest hover:bg-montana-gold hover:text-montana-black transition-all duration-300 group"
          >
            <Wrench size={20} className="group-hover:rotate-12 transition-transform" />
            {t.services}
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 text-slate-400 hover:text-montana-gold transition-colors uppercase tracking-widest text-sm group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {t.contact}
          </Link>
        </motion.div>

        {/* Decorative Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex justify-center gap-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          >
            <Wrench size={48} className="text-montana-gold" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <Wrench size={48} className="text-montana-gold" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <Wrench size={48} className="text-montana-gold" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
