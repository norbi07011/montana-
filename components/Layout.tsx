import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Menu, X, Phone, Mail, Globe, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Newsletter } from './Newsletter';
import { ThemeToggle } from './ThemeToggle';

const flags: Record<Language, string> = {
  NL: '🇳🇱', EN: '🇬🇧', TR: '🇹🇷', PL: '🇵🇱', BG: '🇧🇬', AR: '🇸🇦', DE: '🇩🇪', HU: '🇭🇺', FR: '🇫🇷'
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t, language, setLanguage, dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/services', label: t.nav.services },
    { path: '/projects', label: t.nav.projects },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-montana-black text-slate-900 dark:text-slate-200 font-sans selection:bg-montana-gold selection:text-montana-black flex flex-col relative overflow-x-hidden ${dir === 'rtl' ? 'font-sans' : ''}`}>
      
      {/* Cinematic Noise Overlay */}
      <div className="fixed inset-0 bg-film-grain opacity-[0.05] pointer-events-none z-0"></div>
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 dark:from-montana-black to-transparent z-10 pointer-events-none"></div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center group" onClick={closeMenu}>
              <div className="relative flex items-center gap-2 md:gap-3">
                <img 
                  src="/LOGO.jpg" 
                  alt="Montana ST Logo" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-500"
                  style={{ 
                    filter: 'brightness(1.3) contrast(1.6)',
                    mixBlendMode: 'screen'
                  }}
                />
                <div>
                  <h1 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-slate-900 dark:text-white group-hover:text-montana-gold transition-colors duration-500">
                    MONTANA <span className="text-montana-gold">ST</span>
                  </h1>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-montana-gold to-transparent opacity-50 mt-1"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-widest hover:text-montana-gold transition-colors duration-300 ${location.pathname === link.path ? 'text-montana-gold' : 'text-slate-700 dark:text-slate-300'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-2 text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2 border border-white/10 rounded hover:border-montana-gold/50"
                >
                  <Globe size={16} className="text-montana-gold" />
                  <span>{flags[language]} {language}</span>
                </button>
                
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-montana-dark border border-montana-gold/30 rounded-md shadow-lg py-1 z-50 max-h-60 overflow-y-auto custom-scrollbar">
                    {(Object.keys(Language) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 hover:text-montana-gold flex items-center justify-between ${language === lang ? 'text-montana-gold bg-white/5' : 'text-slate-300'}`}
                      >
                        <span className="flex items-center gap-2">
                           <span>{flags[lang]}</span> {lang}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="tel:+31647026240" className="bg-montana-gold text-montana-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-montana-goldHover transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                24/7 Spoed
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
               {/* Theme Toggle for Mobile */}
               <ThemeToggle />
               
               <div className="relative">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1 text-xs font-medium text-slate-300 border border-white/10 rounded px-2 py-1"
                >
                  <span>{flags[language]}</span>
                </button>
                 {isLangOpen && (
                  <div className="absolute right-0 top-10 w-32 bg-montana-dark border border-montana-gold/30 rounded-md shadow-lg py-1 z-50">
                    {(Object.keys(Language) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setIsLangOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-montana-gold"
                      >
                         {flags[lang]} {lang}
                      </button>
                    ))}
                  </div>
                )}
               </div>

              <button onClick={toggleMenu} className="text-white hover:text-montana-gold transition-colors">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-20 left-0 w-full bg-montana-black/95 backdrop-blur-lg border-b border-montana-gold/20 overflow-hidden"
            >
              <div className="px-4 py-8 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`block text-lg font-serif tracking-wide hover:text-montana-gold transition-colors ${
                        location.pathname === link.path ? 'text-montana-gold' : 'text-slate-300'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  href="tel:+31647026240"
                  className="block w-full text-center mt-8 bg-montana-gold text-montana-black py-3 font-bold uppercase tracking-widest hover:bg-montana-goldHover transition-colors"
                >
                  {t.hero.ctaCall}
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 relative z-10 text-sm">
        {/* Newsletter Section */}
        <div className="border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <Newsletter />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <img 
                src="/LOGO.jpg" 
                alt="Montana ST Logo" 
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                style={{ 
                  filter: 'brightness(1.3) contrast(1.6) drop-shadow(0 0 10px rgba(212,175,55,0.3))',
                  mixBlendMode: 'screen'
                }}
              />
              <h3 className="text-montana-gold font-serif text-lg md:text-xl">MONTANA ST</h3>
            </div>
            <p className="text-slate-400 mb-3 md:mb-4 max-w-xs text-sm md:text-base">{t.aboutPage.storyText.substring(0, 100)}...</p>
            
            {/* Social Media Links */}
            <div className="flex gap-2 md:gap-3 mt-4 md:mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-montana-dark border border-white/10 rounded flex items-center justify-center text-slate-400 hover:text-montana-gold hover:border-montana-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-montana-dark border border-white/10 rounded flex items-center justify-center text-slate-400 hover:text-montana-gold hover:border-montana-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-montana-dark border border-white/10 rounded flex items-center justify-center text-slate-400 hover:text-montana-gold hover:border-montana-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white uppercase tracking-widest mb-4 font-bold">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-montana-gold"/>
                <a href="tel:+31647026240" className="hover:text-white transition-colors">
                  +31 6 47 02 62 40
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-montana-gold"/>
                <a href="mailto:info@montanast.nl" className="hover:text-white transition-colors">
                  info@montanast.nl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-montana-gold"/> Zuid-Holland, NL
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white uppercase tracking-widest mb-4 font-bold">Info</h4>
            <ul className="space-y-2 text-slate-400">
              <li>KvK: 00000000</li>
              <li>BTW: NL000000000B01</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 text-center text-slate-500">
          {t.common.footerText}
        </div>
      </footer>
    </div>
  );
};