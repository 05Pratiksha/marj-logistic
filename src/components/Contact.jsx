import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactItems = [
  { icon: Phone, label: 'Toll-Free Helpline', value: '1800-210-9000' },
  { icon: Mail, label: 'Corporate Support', value: 'support@marjlogistics.com' },
  { icon: MapPin, label: 'Mumbai Headquarters', value: 'Level 8, Maker Maxity, BKC, Mumbai - 400051' },
];

const inputStyle = {
  width: '100%',
  padding: '13px 16px',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.875rem',
  color: '#3D2314',
  backgroundColor: '#F4EFE6',
  border: '1.5px solid rgba(208, 198, 179, 0.7)',
  borderRadius: '14px',
  outline: 'none',
  transition: 'border-color 0.25s ease',
};

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
    <section
      id="contact"
      style={{
        padding: '96px 0',
        backgroundColor: '#EDE7D9',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(208, 198, 179, 0.5)',
      }}
    >
      <div style={{
        position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)',
        width: '450px', height: '450px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181,107,63,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '64px' }} className="contact-grid">

          {/* Left: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="section-badge">
                <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4A7C59' }} />
                Get In Touch
              </span>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                color: '#1B3A2D',
                margin: 0,
                lineHeight: 1.15,
              }}>
                Connect With <em style={{ fontWeight: 400, color: '#B56B3F' }}>MARJ</em>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#7A6E62', lineHeight: 1.75, margin: 0 }}>
                Have an enterprise shipping inquiry or looking to plan a private group holiday? Write to us or stop by one of our regional headquarters.
              </p>
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '12px',
                      background: 'rgba(45,90,61,0.08)',
                      border: '1px solid rgba(45,90,61,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={18} color="#2D5A3D" />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B5ADA0', margin: 0 }}>
                        {item.label}
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: '#1B3A2D', margin: '4px 0 0' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hub map SVG */}
            <div style={{
              background: 'white',
              border: '1px solid rgba(208,198,179,0.5)',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 4px 20px rgba(27,58,45,0.05)',
            }}>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#7A6E62',
                display: 'block',
                marginBottom: '16px',
              }}>
                Main Transit Hub Connectors
              </span>
              <div style={{ aspectRatio: '4/3', background: '#F4EFE6', borderRadius: '14px', overflow: 'hidden' }}>
                <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%' }}>
                  <path d="M 200,60 L 150,150" stroke="#4A7C59" strokeWidth="1.5" strokeDasharray="5,4" />
                  <path d="M 200,60 L 250,220" stroke="#4A7C59" strokeWidth="1.5" strokeDasharray="5,4" />
                  <path d="M 150,150 L 250,220" stroke="#B56B3F" strokeWidth="1.5" strokeDasharray="5,4" />
                  <path d="M 200,60 L 320,130" stroke="#4A7C59" strokeWidth="1.5" strokeDasharray="5,4" />
                  <circle cx="200" cy="60" r="7" fill="#1B3A2D" />
                  <circle cx="150" cy="150" r="7" fill="#4A7C59" />
                  <circle cx="250" cy="220" r="7" fill="#1B3A2D" />
                  <circle cx="320" cy="130" r="7" fill="#B56B3F" />
                  <circle cx="200" cy="60" r="3" fill="#A8D5B5" />
                  <circle cx="150" cy="150" r="3" fill="#A8D5B5" />
                  <circle cx="250" cy="220" r="3" fill="#A8D5B5" />
                  <circle cx="320" cy="130" r="3" fill="#F4EFE6" />
                  <text x="212" y="63" fill="#1B3A2D" fontSize="10" fontWeight="bold" fontFamily="Inter, sans-serif">DELHI</text>
                  <text x="96" y="153" fill="#1B3A2D" fontSize="10" fontWeight="bold" fontFamily="Inter, sans-serif">MUMBAI</text>
                  <text x="260" y="223" fill="#3D2314" fontSize="10" fontWeight="bold" fontFamily="Inter, sans-serif">BANGALORE</text>
                  <text x="330" y="133" fill="#3D2314" fontSize="10" fontWeight="bold" fontFamily="Inter, sans-serif">KOLKATA</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div style={{
            background: 'white',
            padding: '44px 40px',
            borderRadius: '28px',
            border: '1px solid rgba(208, 198, 179, 0.5)',
            boxShadow: '0 20px 60px rgba(27,58,45,0.07)',
          }}>
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}
                >
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: '#1B3A2D', margin: '0 0 6px' }}>
                      Send us a message
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#7A6E62', margin: 0 }}>
                      We typically respond within 2-4 hours on business days.
                    </p>
                  </div>

                  <div>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A6E62', display: 'block', marginBottom: '8px' }}>
                      Your Name
                    </label>
                    <input type="text" required value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      placeholder="John Doe" style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#4A7C59'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(208, 198, 179, 0.7)'; }} />
                  </div>

                  <div>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A6E62', display: 'block', marginBottom: '8px' }}>
                      Email Address
                    </label>
                    <input type="email" required value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      placeholder="john@example.com" style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#4A7C59'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(208, 198, 179, 0.7)'; }} />
                  </div>

                  <div>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A6E62', display: 'block', marginBottom: '8px' }}>
                      Message
                    </label>
                    <textarea required rows="5" value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      placeholder="How can we assist you?"
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={(e) => { e.target.style.borderColor = '#4A7C59'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(208, 198, 179, 0.7)'; }} />
                  </div>

                  <button type="submit" className="btn-earth" style={{ justifyContent: 'center', width: '100%' }}>
                    Send Message <Send size={14} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '20px', padding: '40px 0' }}
                >
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    background: 'rgba(45,90,61,0.1)',
                    border: '1px solid rgba(45,90,61,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <CheckCircle2 size={30} color="#2D5A3D" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: '#1B3A2D', margin: '0 0 8px' }}>
                      Message Sent!
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#7A6E62', lineHeight: 1.65, margin: 0, maxWidth: '300px' }}>
                      Thank you, <strong style={{ color: '#1B3A2D' }}>{formData.name}</strong>. We'll respond to <strong style={{ color: '#1B3A2D' }}>{formData.email}</strong> shortly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    style={{
                      padding: '10px 24px',
                      borderRadius: '9999px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#2D5A3D',
                      background: 'rgba(45,90,61,0.08)',
                      border: '1px solid rgba(45,90,61,0.2)',
                      cursor: 'pointer',
                    }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
