import React, { useState } from 'react';
import { Globe, Send, Check } from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-footer border-t border-brand-dark-brown/30 pt-20 pb-10 relative overflow-hidden bg-dots">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Top Part: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center overflow-hidden shadow-lg shadow-brand-gold/10">
                <Globe className="w-5 h-5 text-brand-footer" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-brand-footer-text">
                  MARJ
                </span>
                <span className="text-[9px] font-semibold tracking-[0.25em] text-brand-gold -mt-1 uppercase">
                  Logistics & Travel
                </span>
              </div>
            </a>
            <p className="text-brand-footer-text/80 text-sm max-w-sm leading-relaxed font-sans">
              Experience modern, priority shipping networks and luxury customized holiday packages across India. Designed for reliability, built for speed.
            </p>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="font-display text-base font-bold text-brand-footer-text leading-tight">Subscribe to Exclusive Travel Alerts & Logistics Insights</h4>
            <p className="text-xs text-brand-footer-text/60 font-sans">Stay up to date with seasonal flight deals, tour itinerary releases, and shipping rate adjustments.</p>
            
            <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md font-sans">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-brand-gold/50 transition-all font-sans"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="px-5 py-3 rounded-2xl bg-brand-gold text-brand-footer font-semibold text-xs hover:bg-[#C89463] hover:text-brand-bg-secondary transition-colors flex items-center gap-1.5 shrink-0 disabled:bg-brand-gold/20 disabled:text-brand-gold cursor-pointer font-sans"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Join List</span>
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Part: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold text-brand-gold uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5 text-xs text-brand-footer-text/70 font-sans">
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Courier Dispatch</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Air Freight & Bulk</a></li>
              <li><a href="#tours" className="hover:text-brand-gold transition-colors">Featured Tours</a></li>
              <li><a href="#booking" className="hover:text-brand-gold transition-colors">Flight Booking</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold text-brand-gold uppercase tracking-widest">Company</h4>
            <ul className="space-y-2.5 text-xs text-brand-footer-text/70 font-sans">
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Story</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Safety Standards</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold text-brand-gold uppercase tracking-widest">Resources</h4>
            <ul className="space-y-2.5 text-xs text-brand-footer-text/70 font-sans">
              <li><a href="#faq" className="hover:text-brand-gold transition-colors">Help Center / FAQs</a></li>
              <li><a href="#logistics" className="hover:text-brand-gold transition-colors">Rate Estimator</a></li>
              <li><a href="#logistics" className="hover:text-brand-gold transition-colors">Courier Tracking</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold text-brand-gold uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2.5 text-xs text-brand-footer-text/70 font-sans">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Cargo Claims SLA</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Cookie settings</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Part: Socials & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-xs text-brand-footer-text/60 font-sans">
          <p>© {currentYear} MARJ LOGISTICS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* Custom SVG Facebook */}
            <a href="#" aria-label="Facebook" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold hover:text-brand-gold text-brand-footer-text/80 transition-all">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            {/* Custom SVG Twitter/X */}
            <a href="#" aria-label="Twitter" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold hover:text-brand-gold text-brand-footer-text/80 transition-all">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Custom SVG Instagram */}
            <a href="#" aria-label="Instagram" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold hover:text-brand-gold text-brand-footer-text/80 transition-all">
              <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* Custom SVG Linkedin */}
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold hover:text-brand-gold text-brand-footer-text/80 transition-all">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
