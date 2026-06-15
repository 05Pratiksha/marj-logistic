import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Lock, Users, PhoneCall, CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Fast Delivery',
    description: 'SLA-backed priority routes ensuring next-day courier delivery to major Indian cities.',
    icon: Zap,
    iconColor: '#2D5A3D',
    iconBg: 'rgba(45,90,61,0.1)',
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent pricing matrix with zero hidden commissions on flights, trains, and shipping.',
    icon: DollarSign,
    iconColor: '#B56B3F',
    iconBg: 'rgba(181,107,63,0.1)',
  },
  {
    title: 'Secure Shipping',
    description: 'Tamper-proof transit seals, GPS vehicle fleets, and comprehensive cargo damage protection.',
    icon: Lock,
    iconColor: '#4A7C59',
    iconBg: 'rgba(74,124,89,0.1)',
  },
  {
    title: 'Personalized Tours',
    description: 'Tailor-made vacation plans configured by certified travel directors to match your pace.',
    icon: Users,
    iconColor: '#7A4428',
    iconBg: 'rgba(122,68,40,0.1)',
  },
  {
    title: '24/7 Support',
    description: 'A dedicated, human-operated concierge desk resolving re-bookings and delay escalations instantly.',
    icon: PhoneCall,
    iconColor: '#3B5E2E',
    iconBg: 'rgba(59,94,46,0.1)',
  },
  {
    title: 'Verified Partners',
    description: 'Direct corporate ties with certified flight carriers, premium hotels, and IRCTC networks.',
    icon: CheckCircle,
    iconColor: '#5A7A40',
    iconBg: 'rgba(90,122,64,0.1)',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      style={{
        padding: '96px 0',
        backgroundColor: '#F4EFE6',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(208, 198, 179, 0.5)',
      }}
    >
      {/* Top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '250px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,90,61,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 72px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span className="section-badge" style={{ justifyContent: 'center' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4A7C59' }} />
            Our Edge
            <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4A7C59' }} />
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            color: '#1B3A2D',
            margin: 0,
            lineHeight: 1.15,
          }}>
            Built For Speed.
            <br />
            <em style={{ fontWeight: 400, color: '#B56B3F' }}>Designed For Comfort.</em>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            color: '#7A6E62',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Whether forwarding a high-priority enterprise document or planning a dream Himalayan escape, see why thousands choose MARJ.
          </p>
        </div>

        {/* Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="why-grid">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                style={{
                  padding: '32px 28px',
                  background: 'rgba(244, 239, 230, 0.75)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(208, 198, 179, 0.7)',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  cursor: 'default',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 2px 12px rgba(27,58,45,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(27,58,45,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(74,124,89,0.35)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.85)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(27,58,45,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(208, 198, 179, 0.7)';
                  e.currentTarget.style.background = 'rgba(244, 239, 230, 0.75)';
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: feature.iconBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={22} color={feature.iconColor} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#1B3A2D',
                    margin: 0,
                  }}>{feature.title}</h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.85rem',
                    color: '#7A6E62',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
