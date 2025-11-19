import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Check } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Show banner after 2 seconds
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie_consent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie_consent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const savePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie_consent', JSON.stringify(consent));
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto glass-panel border-montana-gold/30 p-6 md:p-8 rounded-lg shadow-2xl">
            <div className="flex items-start gap-4">
              <Cookie className="text-montana-gold flex-shrink-0 mt-1" size={32} />
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 font-serif">
                  🍪 Cookie Melding
                </h3>
                <p className="text-slate-300 mb-4 text-sm md:text-base">
                  Wij gebruiken cookies om uw ervaring te verbeteren en onze diensten te optimaliseren. 
                  Door op "Accepteer Alles" te klikken, gaat u akkoord met ons gebruik van cookies.
                </p>

                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mb-4 space-y-3 text-sm"
                  >
                    <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
                      <input type="checkbox" checked={true} disabled className="w-4 h-4" />
                      <span className="text-slate-300">
                        <strong>Noodzakelijk</strong> - Vereist voor basisfunctionaliteit
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="w-4 h-4 accent-montana-gold"
                      />
                      <span className="text-slate-300">
                        <strong>Analytisch</strong> - Helpt ons de site te verbeteren
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                        className="w-4 h-4 accent-montana-gold"
                      />
                      <span className="text-slate-300">
                        <strong>Marketing</strong> - Voor gepersonaliseerde advertenties
                      </span>
                    </label>
                  </motion.div>
                )}

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="bg-montana-gold text-montana-black px-6 py-2 font-bold text-sm uppercase tracking-wider hover:bg-montana-goldHover transition-colors"
                  >
                    Accepteer Alles
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="border border-slate-600 text-slate-300 px-6 py-2 font-bold text-sm uppercase tracking-wider hover:border-montana-gold hover:text-white transition-colors"
                  >
                    Alleen Noodzakelijk
                  </button>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-montana-gold hover:text-montana-goldHover text-sm font-medium underline"
                  >
                    {showDetails ? 'Verberg Details' : 'Toon Details'}
                  </button>
                  {showDetails && (
                    <button
                      onClick={savePreferences}
                      className="border border-montana-gold text-montana-gold px-6 py-2 font-bold text-sm uppercase tracking-wider hover:bg-montana-gold hover:text-montana-black transition-colors"
                    >
                      Voorkeuren Opslaan
                    </button>
                  )}
                </div>
              </div>

              <button
                onClick={acceptNecessary}
                className="text-slate-400 hover:text-white transition-colors flex-shrink-0"
                aria-label="Close cookie consent"
                title="Close"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
