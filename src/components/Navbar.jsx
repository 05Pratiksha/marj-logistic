import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Shield, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Tour Packages', href: '#tours' },
    { name: 'Logistics', href: '#logistics' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-brand-bg-secondary/90 backdrop-blur-xl border-b border-brand-border/40 shadow-xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center overflow-hidden shadow-md shadow-brand-gold/10">
            <Globe className="w-5 h-5 text-brand-bg-secondary group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-brand-dark-brown group-hover:text-brand-gold transition-colors duration-300">
              MARJ
            </span>
            <span className="text-[9px] font-semibold tracking-[0.25em] text-brand-text-secondary -mt-1 uppercase">
              Logistics & Travel
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-semibold tracking-widest uppercase text-brand-text-primary hover:text-brand-gold transition-colors duration-200 relative py-2 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#booking"
            className="btn-primary py-2.5 px-6 text-[10px]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg text-brand-dark-brown hover:text-brand-gold transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-brand-border bg-brand-bg-secondary/95 backdrop-blur-2xl absolute top-full left-0 w-full overflow-hidden shadow-2xl"
          >
            <div className="px-8 py-8 flex flex-col gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-xl font-medium text-brand-text-primary hover:text-brand-gold transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-full text-xs font-semibold text-brand-bg-secondary bg-brand-gold hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300"
              >
                Book a Service
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
