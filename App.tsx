import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/Layout';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieConsent } from './components/CookieConsent';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { PageLoader } from './components/LoadingSpinner';
import { SplashScreen } from './components/SplashScreen';
import { MeshGradient } from './components/MeshGradient';
import { CursorTrail } from './components/CursorTrail';
import { WebGLParticles } from './components/WebGLParticles';
import { MorphingShapes } from './components/MorphingShapes';
import { SwipeGestures } from './components/SwipeGestures';
import { BottomNavigation } from './components/BottomNavigation';
import { registerServiceWorker } from './utils/pwa';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // Register Service Worker on mount
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LanguageProvider>
            <MeshGradient />
            <WebGLParticles />
            <MorphingShapes />
            <CursorTrail />
            <SplashScreen />
            <HashRouter>
              <ScrollToTop />
              <SwipeGestures>
                <Suspense fallback={<PageLoader />}>
                  <Layout>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Layout>
                </Suspense>
              </SwipeGestures>
              <BottomNavigation />
              <FloatingWhatsApp />
              <CookieConsent />
              <PWAInstallPrompt />
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#0a0a0f',
                    color: '#fff',
                    border: '1px solid #d4af37',
                  },
                  success: {
                    iconTheme: {
                      primary: '#d4af37',
                      secondary: '#0a0a0f',
                    },
                  },
                }}
              />
            </HashRouter>
          </LanguageProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
