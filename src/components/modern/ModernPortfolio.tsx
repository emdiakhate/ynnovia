import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollProgress } from '../animations/ScrollProgress';
import { HeroSection } from './HeroSection';
import { ResultsSection } from './ResultsSection';
import { ServicesSection } from './ServicesSection';
import { FloatingLogosSection } from './FloatingLogosSection';
import { ProcessSection } from './ProcessSection';
import { TestimonialsSection } from './TestimonialsSection';
import { BookingSection } from './BookingSection';
import { FAQSection } from './FAQSection';
import { CTASection } from './CTASection';
import { Navbar } from '../Navbar';

export const ModernPortfolio = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <div className="py-24" />
      
      {/* Audit Gratuit Banner */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm p-8 md:p-12 text-center cursor-pointer group hover:border-primary/40 transition-colors"
            onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(217,91%,60%)]/5 via-[hsl(262,83%,58%)]/5 to-[hsl(189,94%,43%)]/5 rounded-2xl" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-4">
                🎁 100% Gratuit — Sans engagement
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Bénéficiez d'un Audit IA Gratuit
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-lg">
                Nous analysons vos activités et identifions les opportunités d'intégration de l'IA dans vos processus métiers. 
                Recevez un plan d'action personnalisé.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:underline text-lg">
                Réserver mon audit gratuit →
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-12" />
      <ResultsSection />
      <div className="py-24" />
      <div id="solutions">
        <ServicesSection />
      </div>
      <div className="py-24" />
      <div id="integration">
        <FloatingLogosSection />
      </div>
      <div className="py-24" />
      <div id="processus">
        <ProcessSection />
      </div>
      <div className="py-24" />
      <TestimonialsSection />
      <div className="py-24" />
      <BookingSection />
      <div className="py-24" />
      <div id="faq">
        <FAQSection />
      </div>
      <div className="py-24" />
      <CTASection />

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center text-muted-foreground text-sm">
            <p>© 2025 Ynnovia. Tous droits réservés.</p>
            <p className="mt-2">Solutions d'Intelligence Artificielle sur Mesure</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
