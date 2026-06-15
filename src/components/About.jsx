import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Compass, HeartHandshake } from 'lucide-react';

const stats = [
  { label: 'Delivery Success', value: '99.9%', icon: ShieldCheck },
  { label: 'Destinations Covered', value: '1,200+', icon: Compass },
  { label: 'Customer Retention', value: '94%', icon: HeartHandshake },
  { label: 'Industry Awards', value: '15+', icon: Award },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '96px 0',
        backgroundColor: '#F4EFE6',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent blobs */}
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181,107,63,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}
          className="about-grid">

          {/* Left: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            style={{ position: 'relative', display: 'grid', gridTemplateColumns: '8fr 4fr', gap: '16px', alignItems: 'stretch' }}
          >
            {/* Main image */}
            <div style={{
              aspectRatio: '4/5',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(27,58,45,0.15)',
              border: '1px solid rgba(208,198,179,0.5)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop"
                alt="Travel Experience"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Side column */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
              <div style={{
                aspectRatio: '1/1',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(27,58,45,0.12)',
                border: '1px solid rgba(208,198,179,0.5)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=300&auto=format&fit=crop"
                  alt="Flight Booking"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{
                padding: '20px',
                background: '#1B3A2D',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 16px 40px rgba(27,58,45,0.2)',
                textAlign: 'center',
              }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: '#A8D5B5',
                  lineHeight: 1,
                }}>10+</span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,239,230,0.65)',
                  marginTop: '6px',
                }}>Years of Service</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="section-badge">
                <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4A7C59' }} />
                Our Journey
              </span>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                color: '#1B3A2D',
                margin: 0,
                lineHeight: 1.15,
              }}>
                Unifying Logistics
                <br />
                <em style={{ fontWeight: 400, color: '#B56B3F' }}>&amp; Global Journeys</em>
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.92rem',
                color: '#7A6E62',
                lineHeight: 1.75,
                margin: 0,
              }}>
                Founded on the belief that moving cargo and passenger journeys deserve the same premium care, MARJ Logistics has grown from an express local courier to an all-inclusive travel, tour, and cargo ecosystem across India.
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.92rem',
                color: '#7A6E62',
                lineHeight: 1.75,
                margin: 0,
              }}>
                We leverage modern digital tracking, strategic airway agreements, and partnerships with luxury travel resorts to ensure every package gets delivered and every journey leaves a lasting imprint.
              </p>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', paddingTop: '8px' }}>
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex', gap: '14px', alignItems: 'center',
                      padding: '16px 20px',
                      background: 'white',
                      borderRadius: '16px',
                      border: '1px solid rgba(208,198,179,0.5)',
                      boxShadow: '0 2px 12px rgba(27,58,45,0.04)',
                    }}
                  >
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '12px',
                      background: 'rgba(45,90,61,0.07)',
                      border: '1px solid rgba(45,90,61,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={18} color="#2D5A3D" />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: '#1B3A2D',
                        lineHeight: 1,
                      }}>{stat.value}</div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.7rem',
                        color: '#7A6E62',
                        fontWeight: 500,
                        marginTop: '4px',
                      }}>{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
