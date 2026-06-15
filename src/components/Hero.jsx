import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Package, MapPin, Navigation } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '500+', label: 'Monthly Deliveries' },
  { value: '24/7', label: 'Support Available' },
  { value: '10+', label: 'Years of Trust' },
];

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#F4EFE6',
      }}
    >
      {/* Organic background blobs */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '650px', height: '650px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,90,61,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181,107,63,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Leaf pattern */}
      <div className="leaf-overlay" style={{
        position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 32px',
        width: '100%', position: 'relative', zIndex: 1,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}
          className="hero-grid">

          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            {/* Badge */}
            <motion.div custom={0.1} variants={fadeUp}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '8px 18px', borderRadius: '9999px',
                background: 'rgba(27, 58, 45, 0.08)',
                border: '1px solid rgba(27, 58, 45, 0.18)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#2D5A3D',
              }}>
                <Leaf size={12} />
                Trusted Logistics & Travel Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div custom={0.2} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                color: '#1B3A2D',
                margin: 0,
              }}>
                Moving Packages.
                <br />
                <span style={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  background: 'linear-gradient(135deg, #2D5A3D 0%, #B56B3F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Creating Journeys.
                </span>
              </h1>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                fontWeight: 400,
                color: '#7A6E62',
                maxWidth: '440px',
                lineHeight: 1.7,
                margin: 0,
              }}>
                Reliable courier services, travel bookings, and customized tour packages across India. Experience the harmony of speed and care.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div custom={0.35} variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="#booking" className="btn-earth">
                Get Started
                <ArrowRight size={15} />
              </a>
              <a href="#tours" className="btn-outline-earth">
                <Navigation size={15} />
                Explore Tours
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div custom={0.5} variants={fadeUp}>
              <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #D0C6B3, transparent)', marginBottom: '24px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                {stats.map((stat, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: '#1B3A2D',
                      lineHeight: 1,
                    }}>{stat.value}</span>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#7A6E62',
                    }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', height: '560px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* Main image card */}
            <div style={{
              width: '100%', maxWidth: '400px', aspectRatio: '4/5',
              borderRadius: '28px', overflow: 'hidden',
              boxShadow: '0 40px 80px -20px rgba(27,58,45,0.2), 0 0 0 1px rgba(208,198,179,0.5)',
              position: 'relative',
            }}>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop"
                alt="Nature & Travel Journey"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(27,58,45,0.85) 0%, rgba(27,58,45,0.15) 50%, transparent 100%)',
              }} />
              {/* Bottom label */}
              <div style={{ position: 'absolute', bottom: '28px', left: '28px', right: '28px' }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A8D5B5',
                }}>Featured Package</span>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600,
                  color: 'white', margin: '6px 0 8px',
                }}>Scenic Kerala Backwaters</h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '0.72rem',
                  color: 'rgba(244,239,230,0.85)', lineHeight: 1.5, margin: 0,
                }}>Complete travel package including flights & luxury stay.</p>
              </div>
            </div>

            {/* Floating card: Boarding Pass */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
              style={{
                position: 'absolute', top: '10px', left: '-20px',
                background: 'rgba(244, 239, 230, 0.92)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(208, 198, 179, 0.8)',
                borderRadius: '24px',
                padding: '20px',
                width: '220px',
                boxShadow: '0 20px 50px rgba(27,58,45,0.12)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Navigation size={12} color="#4A7C59" />
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7A6E62' }}>Boarding Pass</span>
                </div>
                <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#2D5A3D', background: 'rgba(27,58,45,0.08)', padding: '3px 8px', borderRadius: '9999px' }}>First Class</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: '1px solid #D0C6B3', borderBottom: '1px solid #D0C6B3' }}>
                <div>
                  <p style={{ fontSize: '0.6rem', color: '#7A6E62', fontWeight: 600, margin: 0 }}>FROM</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, color: '#1B3A2D', margin: '2px 0' }}>DEL</p>
                  <p style={{ fontSize: '0.6rem', color: '#7A6E62', margin: 0 }}>Delhi, IN</p>
                </div>
                <div style={{ fontSize: '1.2rem' }}>✈</div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '0.6rem', color: '#7A6E62', fontWeight: 600, margin: 0 }}>TO</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, color: '#1B3A2D', margin: '2px 0' }}>GOI</p>
                  <p style={{ fontSize: '0.6rem', color: '#7A6E62', margin: 0 }}>Goa, IN</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                {[['Seat', '12A'], ['Gate', 'A3'], ['Boarding', '08:15']].map(([label, val], i) => (
                  <div key={i}>
                    <p style={{ fontSize: '0.58rem', color: '#7A6E62', margin: 0 }}>{label}</p>
                    <p style={{ fontSize: '0.78rem', fontWeight: 700, color: i === 2 ? '#4A7C59' : '#1B3A2D', margin: '2px 0 0' }}>{val}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating card: Live Tracker */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
              style={{
                position: 'absolute', bottom: '10px', right: '-20px',
                background: 'rgba(27, 58, 45, 0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(74, 124, 89, 0.35)',
                borderRadius: '24px',
                padding: '20px',
                width: '220px',
                boxShadow: '0 20px 50px rgba(27,58,45,0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A8D5B5', display: 'block', animation: 'pulse 2s infinite' }} />
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.7)' }}>Live Tracking</span>
                </div>
                <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#A8D5B5', background: 'rgba(168,213,181,0.15)', padding: '3px 8px', borderRadius: '9999px' }}>In Transit</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(168,213,181,0.15)', border: '1px solid rgba(168,213,181,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Package size={18} color="#A8D5B5" />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'white' }}>ID #MARJ-749</span>
                  </div>
                  <p style={{ fontSize: '0.62rem', color: 'rgba(244,239,230,0.6)', margin: '3px 0 0', lineHeight: 1.4 }}>Mumbai Hub → Bangalore Hub</p>
                </div>
              </div>
              <div style={{ marginTop: '14px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, #4A7C59, #A8D5B5)', borderRadius: '9999px' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                <span style={{ fontSize: '0.58rem', color: 'rgba(244,239,230,0.5)' }}>Mumbai</span>
                <span style={{ fontSize: '0.58rem', color: '#A8D5B5', fontWeight: 600 }}>65%</span>
                <span style={{ fontSize: '0.58rem', color: 'rgba(244,239,230,0.5)' }}>Bangalore</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
