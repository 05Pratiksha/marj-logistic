import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-28 bg-brand-bg-secondary/50 relative overflow-hidden border-t border-brand-border bg-dots">
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Contact Information & Hub Map */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4 font-sans">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-sans">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark-brown font-display leading-tight">
                Connect With MARJ
              </h2>
              <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed font-sans">
                Have an enterprise shipping inquiry, or looking to plan a private group holiday? Write to us, or stop by one of our regional headquarters.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 font-sans">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-text-secondary/70 uppercase font-bold tracking-wider">Toll-Free Helpline</p>
                  <p className="text-sm font-semibold text-brand-dark-brown">1800-210-9000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-text-secondary/70 uppercase font-bold tracking-wider">Corporate Support</p>
                  <p className="text-sm font-semibold text-brand-dark-brown">support@marjlogistics.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-text-secondary/70 uppercase font-bold tracking-wider">Mumbai Headquarters</p>
                  <p className="text-sm font-semibold text-brand-dark-brown">Level 8, Maker Maxity, BKC, Mumbai - 400051</p>
                </div>
              </div>
            </div>

            {/* Simulated Animated Operational Hub Map (SVG) */}
            <div className="bg-brand-card p-6 rounded-3xl border border-brand-border space-y-4 shadow-sm">
              <span className="text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest block font-sans">Main Transit Hub Connectors</span>
              <div className="relative aspect-[4/3] bg-brand-bg-primary rounded-2xl border border-brand-border overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full h-full text-brand-text-secondary/20">
                  {/* Dotted connecting flight/cargo paths */}
                  <path d="M 200,60 L 150,150" stroke="#D4A574" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 200,60 L 250,220" stroke="#D4A574" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 150,150 L 250,220" stroke="#8B5E3C" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 200,60 L 320,130" stroke="#D4A574" strokeWidth="1.5" strokeDasharray="4,4" />
                  
                  {/* Nodes */}
                  <circle cx="200" cy="60" r="6" fill="#8B5E3C" /> {/* Delhi */}
                  <circle cx="150" cy="150" r="6" fill="#D4A574" /> {/* Mumbai */}
                  <circle cx="250" cy="220" r="6" fill="#8B5E3C" /> {/* Bangalore */}
                  <circle cx="320" cy="130" r="6" fill="#D4A574" /> {/* Kolkata */}

                  {/* Labels */}
                  <text x="212" y="64" fill="#3E2723" fontSize="10" fontWeight="bold" fontFamily="Inter, sans-serif">DELHI</text>
                  <text x="96" y="154" fill="#3E2723" fontSize="10" fontWeight="bold" fontFamily="Inter, sans-serif">MUMBAI</text>
                  <text x="262" y="224" fill="#8B5E3C" fontSize="10" fontWeight="bold" fontFamily="Inter, sans-serif">BANGALORE</text>
                  <text x="332" y="134" fill="#3E2723" fontSize="10" fontWeight="bold" fontFamily="Inter, sans-serif">KOLKATA</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-card p-8 md:p-12 rounded-3xl border border-brand-border shadow-xl relative">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 font-sans"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-brand-bg-primary border border-brand-border text-brand-dark-brown placeholder-brand-text-secondary/60 text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-brand-bg-primary border border-brand-border text-brand-dark-brown placeholder-brand-text-secondary/60 text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider">Message</label>
                      <textarea
                        required
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                        placeholder="How can we assist you?"
                        className="w-full px-4 py-3 rounded-2xl bg-brand-bg-primary border border-brand-border text-brand-dark-brown placeholder-brand-text-secondary/60 text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all resize-none font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full text-xs font-semibold text-brand-bg-secondary bg-brand-gold hover:bg-[#C89463] hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer font-sans"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/20 flex items-center justify-center text-brand-gold mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-brand-dark-brown">Message Transmitted</h3>
                      <p className="text-brand-text-secondary text-sm max-w-sm mx-auto font-sans">
                        Thank you, <span className="text-brand-dark-brown font-semibold">{formData.name}</span>. Our support desk has received your inquiry and will respond to <span className="text-brand-dark-brown font-semibold">{formData.email}</span> shortly.
                      </p>
                    </div>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold text-brand-brown hover:text-brand-dark-brown bg-brand-gold/10 border border-brand-gold/20 transition-colors cursor-pointer font-sans"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
