import React from 'react';
import { motion } from 'framer-motion';
import { Home, Wrench, FolderOpen, Info, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const BottomNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/services', icon: Wrench, label: 'Usługi' },
    { path: '/projects', icon: FolderOpen, label: 'Projekty' },
    { path: '/about', icon: Info, label: 'O nas' },
    { path: '/contact', icon: Phone, label: 'Kontakt' },
  ];

  const handleClick = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-montana-black/95 backdrop-blur-lg border-t border-montana-gold/20 safe-area-inset-bottom"
    >
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleClick}
              className="flex-1"
            >
              <motion.div
                className={`flex flex-col items-center gap-1 py-2 px-1 rounded-xl transition-colors ${
                  isActive ? 'text-montana-gold' : 'text-slate-400'
                }`}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -inset-2 bg-montana-gold/10 rounded-lg -z-10"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
                <span className="text-[10px] font-medium tracking-wider">
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Indicator bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-montana-gold to-transparent" />
    </motion.nav>
  );
};
