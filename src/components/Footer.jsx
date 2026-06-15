import React, { useState } from 'react';
import { Leaf, Send, Check } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Courier Dispatch', href: '#services' },
    { label: 'Air Freight & Bulk', href: '#services' },
    { label: 'Featured Tours', href: '#tours' },
    { label: 'Flight Booking', href: '#booking' },
  ],
  Company: [
    { label: 'About Story', href: '#about' },
    { label: 'Our Team', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Safety Standards', href: '#' },
  ],
  Resources: [
    { label: 'Help Center / FAQs', href: '#faq' },
    { label: 'Rate Estimator', href: '#logistics' },
    { label: 'Courier Tracking', href: '#logistics' },
    { label: 'Documentation', href: '#' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cargo Claims SLA', href: '#' },
    { label: 'Cookie Settings', href: '#' },
  ],
};

const socialLinks = [
  {
    label: 'Facebook',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer style={{
      backgroundColor: '#1B3A2D',
      borderTop: '1px solid rgba(74, 124, 89, 0.2)',
      paddingTop: '80px',
      paddingBottom: '40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accents */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181,107,63,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,124,89,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        {/* Top: Brand + Newsletter */}
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '64px', paddingBottom: '60px', borderBottom: '1px solid rgba(168, 213, 181, 0.1)' }}
          className="footer-top">
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #2D5A3D 0%, #4A7C59 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(27,58,45,0.4)',
              }}>
                <Leaf size={20} color="#A8D5B5" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 700, color: '#F4EFE6', lineHeight: 1 }}>MARJ</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7FAF8A', marginTop: '3px' }}>
                  Logistics & Travel
                </span>
              </div>
            </a>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              color: 'rgba(244, 239, 230, 0.6)',
              lineHeight: 1.75,
              margin: 0,
              maxWidth: '320px',
            }}>
              Experience modern, priority shipping networks and luxury customized holiday packages across India. Designed for reliability, built for speed.
            </p>
          </div>

          {/* Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 600, color: '#F4EFE6', margin: 0, lineHeight: 1.3 }}>
              Subscribe to Exclusive Travel Alerts & Logistics Insights
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(244,239,230,0.5)', margin: 0, lineHeight: 1.6 }}>
              Stay up to date with seasonal flight deals, tour itinerary releases, and shipping rate adjustments.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', maxWidth: '440px' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(168,213,181,0.2)',
                  color: '#F4EFE6',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.82rem',
                  outline: 'none',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(168,213,181,0.45)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(168,213,181,0.2)'; }}
              />
              <button
                type="submit"
                disabled={subscribed}
                style={{
                  padding: '12px 20px',
                  borderRadius: '12px',
                  background: subscribed ? 'rgba(45,90,61,0.5)' : '#D4865A',
                  color: 'white',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: subscribed ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'background 0.25s',
                  flexShrink: 0,
                }}
              >
                {subscribed ? (<><Check size={13} /><span>Subscribed</span></>) : (<><span>Join List</span><Send size={12} /></>)}
              </button>
            </form>
          </div>
        </div>

        {/* Middle: Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', padding: '56px 0' }} className="footer-links">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#7FAF8A',
                margin: 0,
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.82rem',
                        color: 'rgba(244, 239, 230, 0.55)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { e.target.style.color = '#A8D5B5'; }}
                      onMouseLeave={(e) => { e.target.style.color = 'rgba(244, 239, 230, 0.55)'; }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: Socials + Copyright */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: '28px',
          borderTop: '1px solid rgba(168, 213, 181, 0.1)',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(244, 239, 230, 0.4)', margin: 0 }}>
            © {currentYear} MARJ LOGISTICS. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                style={{
                  width: '34px', height: '34px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(168,213,181,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(244,239,230,0.6)',
                  textDecoration: 'none',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168,213,181,0.4)';
                  e.currentTarget.style.color = '#A8D5B5';
                  e.currentTarget.style.background = 'rgba(168,213,181,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168,213,181,0.12)';
                  e.currentTarget.style.color = 'rgba(244,239,230,0.6)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .footer-top { grid-template-columns: 1fr !important; }
          .footer-links { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .footer-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
