import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Compass, Plane, Train, Bus, Briefcase, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Courier Services',
    description: 'Ultra-fast parcel shipping and document delivery with real-time tracking across 19,000+ pin codes in India.',
    icon: Truck,
    accent: '#2D5A3D',
    bg: 'rgba(45,90,61,0.06)',
  },
  {
    title: 'Travel Packages',
    description: 'Curated holiday plans, romantic retreats, and adventure tours complete with premium accommodations.',
    icon: Compass,
    accent: '#B56B3F',
    bg: 'rgba(181,107,63,0.06)',
  },
  {
    title: 'Flight Booking',
    description: 'Search, compare, and book domestic & international flights at best rates with 24/7 seat assistance.',
    icon: Plane,
    accent: '#4A7C59',
    bg: 'rgba(74,124,89,0.06)',
  },
  {
    title: 'Train Booking',
    description: 'Hassle-free IRCTC e-ticket reservations, seat availability lookup, and direct PNR status alerts.',
    icon: Train,
    accent: '#7A4428',
    bg: 'rgba(122,68,40,0.06)',
  },
  {
    title: 'Bus Booking',
    description: 'Premium sleeper and AC bus bookings connecting remote routes with verified luxury fleet operators.',
    icon: Bus,
    accent: '#3B5E2E',
    bg: 'rgba(59,94,46,0.06)',
  },
  {
    title: 'Business Logistics',
    description: 'Bulk enterprise shipping, custom supply chain consulting, express air cargo, and dedicated warehouse support.',
    icon: Briefcase,
    accent: '#7A6E62',
    bg: 'rgba(122,110,98,0.06)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '96px 0',
        backgroundColor: '#EDE7D9',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27,58,45,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '10%', right: 0,
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181,107,63,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 72px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span className="section-badge" style={{ justifyContent: 'center' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4A7C59' }} />
            Core Offerings
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
            Premium Services,<br />
            <em style={{ fontWeight: 400, color: '#B56B3F' }}>Tailored For You</em>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            color: '#7A6E62',
            lineHeight: 1.7,
            margin: 0,
          }}>
            From seamless package shipping to custom travel packages, MARJ combines speed, technology, and trust to deliver a premium logistics & travel ecosystem.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
          className="services-grid"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                style={{
                  background: 'white',
                  border: '1px solid rgba(208, 198, 179, 0.6)',
                  borderRadius: '24px',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 2px 16px rgba(27,58,45,0.04)',
                  gap: '24px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 24px 50px rgba(27,58,45,0.12), 0 0 0 1.5px rgba(74,124,89,0.3)';
                  e.currentTarget.style.borderColor = 'rgba(74, 124, 89, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 16px rgba(27,58,45,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(208, 198, 179, 0.6)';
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Icon box */}
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '16px',
                    background: service.bg,
                    border: `1px solid ${service.accent}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={24} color={service.accent} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      color: '#1B3A2D',
                      margin: 0,
                    }}>{service.title}</h3>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.85rem',
                      color: '#7A6E62',
                      lineHeight: 1.65,
                      margin: 0,
                    }}>{service.description}</p>
                  </div>
                </div>

                {/* Footer action */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(208, 198, 179, 0.5)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: service.accent,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Explore Service
                  <ArrowUpRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
