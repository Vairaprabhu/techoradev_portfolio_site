import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTopButton from '../components/ScrollToTopButton';
import PageTransition from '../components/PageTransition';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Pricing from '../pages/Pricing';
import Projects from '../pages/Projects';
import Services from '../pages/Services';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, [location.pathname]);

  return null;
}

export default function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <div className="app-layout">
        <Header />
        <main className="route-content">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </>
  );
}
