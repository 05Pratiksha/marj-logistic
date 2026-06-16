import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Leaf, Globe2 } from 'lucide-react';

const menuItems = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Tour Packages', href: '#tours' },
  { name: 'Logistics', href: '#logistics' },
  { name: 'FAQs', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.35s ease',
        padding: isScrolled ? '12px 0' : '20px 0',
        background: isScrolled
          ? 'rgba(244, 239, 230, 0.92)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(208, 198, 179, 0.5)' : 'none',
        boxShadow: isScrolled ? '0 4px 30px rgba(27, 58, 45, 0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo.jpg" alt="MARJ Logistics Tour and Travel Logo" style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden-mobile">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#3D2314',
                textDecoration: 'none',
                position: 'relative',
                paddingBottom: '4px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.target.style.color = '#2D5A3D'; }}
              onMouseLeave={(e) => { e.target.style.color = '#3D2314'; }}
            >
              {item.name}
            </a>
          ))}
          <a href="#booking" className="btn-earth" style={{ padding: '11px 26px', fontSize: '0.68rem' }}>
            Get Started <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#1B3A2D', padding: '8px', borderRadius: '8px',
            display: 'none',
          }}
          className="show-mobile"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            style={{
              background: 'rgba(244, 239, 230, 0.97)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(208, 198, 179, 0.5)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: '#1B3A2D',
                    textDecoration: 'none',
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a href="#booking" onClick={() => setIsOpen(false)} className="btn-earth" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Book a Service
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 1023px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
