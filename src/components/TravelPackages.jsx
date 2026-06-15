import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, X, Check, Star, ArrowRight } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Kashmir Paradise Tour',
    image: 'https://images.unsplash.com/photo-1598324422814-29117f66e47a?q=80&w=600&auto=format&fit=crop',
    price: '₹24,999',
    originalPrice: '₹29,999',
    duration: '5 Nights, 6 Days',
    rating: 4.9,
    reviews: 120,
    tag: 'Most Popular',
    tagColor: '#2D5A3D',
    description: 'Experience the crown of India. Sail in premium Shikaras on Dal Lake, stay in luxury houseboats, and explore the snow-covered slopes of Gulmarg.',
    highlights: ['Luxury Houseboat Stay', 'Gulmarg Gondola Ride', 'Private Chauffeur Tour', 'Traditional Wazwan Dinner'],
  },
  {
    id: 2,
    title: 'Luxury Goa Escape',
    image: 'https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=600&auto=format&fit=crop',
    price: '₹18,499',
    originalPrice: '₹22,000',
    duration: '4 Nights, 5 Days',
    rating: 4.8,
    reviews: 94,
    tag: 'Best Value',
    tagColor: '#B56B3F',
    description: 'Unwind at premium 5-star private beach resorts in North & South Goa. Enjoy sunset cruise packages and guided heritage tour bookings.',
    highlights: ['5-Star Beach Resort', 'Sunset Yacht Charter', 'Private Heritage Tour', 'Scuba & Water Sports'],
  },
  {
    id: 3,
    title: 'Himalayan Manali Retreat',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600&auto=format&fit=crop',
    price: '₹15,999',
    originalPrice: '₹19,500',
    duration: '5 Nights, 6 Days',
    rating: 4.7,
    reviews: 86,
    tag: 'Adventure',
    tagColor: '#4A7C59',
    description: 'Explore the majestic Solang Valley, drive through the Atal Tunnel, and relax in luxurious cozy wooden boutique villas.',
    highlights: ['Premium Wooden Villa', 'Solang Paragliding', 'Atal Tunnel Excursion', 'Riverside Dinner Setup'],
  },
  {
    id: 4,
    title: 'Kerala Backwaters Cruise',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600&auto=format&fit=crop',
    price: '₹21,500',
    originalPrice: '₹26,000',
    duration: '4 Nights, 5 Days',
    rating: 4.9,
    reviews: 112,
    tag: 'Nature & Serenity',
    tagColor: '#3B5E2E',
    description: 'Discover the Venice of the East. Sail down the serene backwaters of Alleppey in your own private, air-conditioned premium houseboat.',
    highlights: ['Private Houseboat Cruise', 'Ayurvedic Spa Sessions', 'Kumarakom Bird Sanctuary', 'Traditional Toddy Tasting'],
  },
];

export default function TravelPackages() {
  const [activePackage, setActivePackage] = useState(null);

  return (
    <section
      id="tours"
      style={{
        padding: '96px 0',
        backgroundColor: '#EDE7D9',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(208, 198, 179, 0.5)',
      }}
    >
      <div style={{
        position: 'absolute', top: '30%', right: 0,
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181,107,63,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '520px' }}>
            <span className="section-badge">
              <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4A7C59' }} />
              Curated Expeditions
            </span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              color: '#1B3A2D',
              margin: 0,
              lineHeight: 1.15,
            }}>
              Featured <em style={{ fontWeight: 400, color: '#B56B3F' }}>Travel Packages</em>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              color: '#7A6E62',
              lineHeight: 1.7,
              margin: 0,
            }}>
              Handpicked itineraries curated by local guides. Complete packages covering airport transport, luxury resorts, and custom activities.
            </p>
          </div>
          <a href="#booking" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#4A7C59',
            textDecoration: 'none',
          }}>
            Request Custom Itinerary
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="packages-grid">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pkg.id * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(208, 198, 179, 0.5)',
                boxShadow: '0 4px 20px rgba(27,58,45,0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(27,58,45,0.14)';
                e.currentTarget.style.borderColor = 'rgba(74,124,89,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(27,58,45,0.05)';
                e.currentTarget.style.borderColor = 'rgba(208, 198, 179, 0.5)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
                />
                {/* Tag */}
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  background: `rgba(244, 239, 230, 0.92)`,
                  backdropFilter: 'blur(8px)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: pkg.tagColor,
                  fontFamily: "'Inter', sans-serif",
                  border: `1px solid ${pkg.tagColor}33`,
                }}>
                  {pkg.tag}
                </div>
                {/* Duration */}
                <div style={{
                  position: 'absolute', bottom: '12px', right: '12px',
                  background: 'rgba(27, 58, 45, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  color: '#A8D5B5',
                  fontFamily: "'Inter', sans-serif",
                  display: 'flex', alignItems: 'center', gap: '4px',
                }}>
                  <Calendar size={10} />
                  {pkg.duration}
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={13} fill="#B56B3F" color="#B56B3F" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, color: '#3D2314' }}>
                    {pkg.rating}
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: '#7A6E62' }}>
                    ({pkg.reviews} reviews)
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#1B3A2D',
                  margin: 0,
                  lineHeight: 1.2,
                }}>{pkg.title}</h3>

                {/* Footer */}
                <div style={{
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                  paddingTop: '12px',
                  marginTop: 'auto',
                  borderTop: '1px solid rgba(208, 198, 179, 0.5)',
                }}>
                  <div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.65rem',
                      color: '#B5ADA0',
                      textDecoration: 'line-through',
                      fontWeight: 500,
                    }}>{pkg.originalPrice}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#1B3A2D',
                      lineHeight: 1,
                    }}>{pkg.price}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.62rem',
                      color: '#7A6E62',
                      marginTop: '2px',
                    }}>per person</div>
                  </div>
                  <button
                    onClick={() => setActivePackage(pkg)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '9999px',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                      color: '#2D5A3D',
                      background: 'rgba(45,90,61,0.08)',
                      border: '1px solid rgba(45,90,61,0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#1B3A2D';
                      e.target.style.color = '#F4EFE6';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(45,90,61,0.08)';
                      e.target.style.color = '#2D5A3D';
                    }}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activePackage && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePackage(null)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(27,58,45,0.75)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              style={{
                position: 'relative', zIndex: 1,
                background: 'white',
                borderRadius: '28px',
                width: '100%',
                maxWidth: '640px',
                overflow: 'hidden',
                boxShadow: '0 50px 100px rgba(27,58,45,0.3)',
                border: '1px solid rgba(208, 198, 179, 0.5)',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '260px' }}>
                <img src={activePackage.image} alt={activePackage.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(244,239,230,1) 0%, rgba(244,239,230,0.3) 50%, transparent 100%)' }} />
                <button
                  onClick={() => setActivePackage(null)}
                  style={{
                    position: 'absolute', top: '16px', right: '16px',
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(244,239,230,0.9)',
                    border: '1px solid rgba(208,198,179,0.6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#7A6E62',
                  }}
                >
                  <X size={16} />
                </button>
                <div style={{ position: 'absolute', bottom: '20px', left: '28px', right: '28px' }}>
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4A7C59', fontFamily: "'Inter', sans-serif" }}>
                    Featured Package
                  </span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 700, color: '#1B3A2D', margin: '4px 0 0' }}>
                    {activePackage.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Meta */}
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#4A4035', fontFamily: "'Inter', sans-serif" }}>
                    <Calendar size={15} color="#4A7C59" />
                    {activePackage.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#4A4035', fontFamily: "'Inter', sans-serif" }}>
                    <Users size={15} color="#4A7C59" />
                    Group & Private Options
                  </div>
                </div>

                {/* Description */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B56B3F', fontFamily: "'Inter', sans-serif" }}>
                    Package Description
                  </span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#7A6E62', lineHeight: 1.7, margin: 0 }}>
                    {activePackage.description}
                  </p>
                </div>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B56B3F', fontFamily: "'Inter', sans-serif" }}>
                    What's Included
                  </span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {activePackage.highlights.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          width: '20px', height: '20px', borderRadius: '50%',
                          background: 'rgba(45,90,61,0.1)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Check size={11} color="#2D5A3D" />
                        </div>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#4A4035' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(208,198,179,0.5)',
                  flexWrap: 'wrap', gap: '16px',
                }}>
                  <div>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#B5ADA0', fontFamily: "'Inter', sans-serif" }}>Starting from</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.6rem', fontWeight: 700, color: '#1B3A2D' }}>
                        {activePackage.price}
                      </span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#B5ADA0', textDecoration: 'line-through' }}>
                        {activePackage.originalPrice}
                      </span>
                    </div>
                  </div>
                  <a href="#booking" onClick={() => setActivePackage(null)} className="btn-earth">
                    Book Journey Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) { .packages-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .packages-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
