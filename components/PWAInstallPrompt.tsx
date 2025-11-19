import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { isPWA, setupPWAInstallPrompt, promptPWAInstall } from '../utils/pwa';

export const PWAInstallPrompt: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    // Don't show if already installed
    if (isPWA()) return;

    // Check if user dismissed before
    const dismissed = localStorage.getItem('pwa_install_dismissed');
    if (dismissed) return;

    // Setup install prompt
    setupPWAInstallPrompt(() => {
      // Show prompt after 30 seconds
      setTimeout(() => {
        setShowPrompt(true);
      }, 30000);
    });
  }, []);

  const handleInstall = async () => {
    setIsInstalling(true);
    const accepted = await promptPWAInstall();
    
    if (accepted) {
      setShowPrompt(false);
    } else {
      setIsInstalling(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa_install_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-24 right-6 z-40 max-w-sm"
        >
          <div className="glass-panel border-montana-gold/30 p-6 rounded-lg shadow-2xl">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-slate-400 hover:text-white"
              aria-label="Sluiten"
            >
              <X size={20} />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-montana-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Download className="text-montana-gold" size={24} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-white font-bold mb-2">Installeer Montana ST</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Voeg onze app toe aan je startscherm voor snelle toegang en offline gebruik.
                </p>
                
                <div className="flex gap-2">
                  <button
                    onClick={handleInstall}
                    disabled={isInstalling}
                    className="bg-montana-gold text-montana-black px-4 py-2 text-sm font-bold uppercase hover:bg-montana-goldHover transition-colors disabled:opacity-50"
                  >
                    {isInstalling ? 'Installeren...' : 'Installeer'}
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="text-slate-400 hover:text-white text-sm px-4"
                  >
                    Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
