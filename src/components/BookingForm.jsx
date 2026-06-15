import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, MapPin, Truck, Plane, Train, Compass, CheckCircle } from 'lucide-react';

const servicesList = [
  { id: 'courier', name: 'Courier Service', icon: Truck },
  { id: 'flight', name: 'Flight Ticket', icon: Plane },
  { id: 'train', name: 'Train Ticket', icon: Train },
  { id: 'tour', name: 'Tour Package', icon: Compass },
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

const labelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#7A6E62',
  marginBottom: '8px',
};

export default function BookingForm() {
  const [serviceType, setServiceType] = useState('courier');
  const [formData, setFormData] = useState({
    name: '', phone: '', origin: '', destination: '', date: '', weight: '1', travelers: '1',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.origin || !formData.destination || !formData.date) return;
    setShowSuccess(true);
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', origin: '', destination: '', date: '', weight: '1', travelers: '1' });
    setShowSuccess(false);
  };

  return (
    <section
      id="booking"
      style={{
        padding: '96px 0',
        backgroundColor: '#EDE7D9',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(208, 198, 179, 0.5)',
      }}
    >
      <div style={{
        position: 'absolute', top: '25%', right: 0,
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181,107,63,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 56px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span className="section-badge" style={{ justifyContent: 'center' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4A7C59' }} />
            Reservations
            <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4A7C59' }} />
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 700,
            color: '#1B3A2D',
            margin: 0,
            lineHeight: 1.15,
          }}>
            Book <em style={{ fontWeight: 400, color: '#B56B3F' }}>In Seconds</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#7A6E62', lineHeight: 1.7, margin: 0 }}>
            Select your service, enter details, and schedule your booking instantly.
          </p>
        </div>

        {/* Form container */}
        <div style={{
          background: 'white',
          borderRadius: '28px',
          overflow: 'hidden',
          border: '1px solid rgba(208, 198, 179, 0.6)',
          boxShadow: '0 20px 60px rgba(27,58,45,0.08)',
        }}>
          {/* Service tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: '1px solid rgba(208, 198, 179, 0.5)', backgroundColor: '#F4EFE6' }}>
            {servicesList.map((service) => {
              const Icon = service.icon;
              const active = serviceType === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setServiceType(service.id)}
                  style={{
                    padding: '18px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    borderBottom: `2.5px solid ${active ? '#2D5A3D' : 'transparent'}`,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: active ? '#1B3A2D' : '#7A6E62',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <Icon size={17} color={active ? '#2D5A3D' : '#B5ADA0'} />
                  <span className="booking-tab-label">{service.name}</span>
                </button>
              );
            })}
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} style={{ padding: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="booking-form-grid">
              {/* Name */}
              <div>
                <label style={labelStyle}><User size={12} color="#4A7C59" /> Full Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleInputChange}
                  placeholder="Enter your name" style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = '#4A7C59'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(208, 198, 179, 0.7)'; }} />
              </div>
              {/* Phone */}
              <div>
                <label style={labelStyle}><Phone size={12} color="#4A7C59" /> Phone Number</label>
                <input type="tel" name="phone" required pattern="[0-9]{10}" value={formData.phone} onChange={handleInputChange}
                  placeholder="10-digit mobile" style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = '#4A7C59'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(208, 198, 179, 0.7)'; }} />
              </div>
              {/* Origin */}
              <div>
                <label style={labelStyle}><MapPin size={12} color="#4A7C59" />
                  {serviceType === 'courier' ? 'Pickup Pincode' : 'Departure City'}
                </label>
                <input type="text" name="origin" required value={formData.origin} onChange={handleInputChange}
                  placeholder={serviceType === 'courier' ? 'e.g. 110001 (Delhi)' : 'e.g. Mumbai'}
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = '#4A7C59'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(208, 198, 179, 0.7)'; }} />
              </div>
              {/* Destination */}
              <div>
                <label style={labelStyle}><MapPin size={12} color="#B56B3F" />
                  {serviceType === 'courier' ? 'Delivery Pincode' : 'Destination City'}
                </label>
                <input type="text" name="destination" required value={formData.destination} onChange={handleInputChange}
                  placeholder={serviceType === 'courier' ? 'e.g. 560001 (Bangalore)' : 'e.g. Goa'}
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = '#4A7C59'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(208, 198, 179, 0.7)'; }} />
              </div>
              {/* Date */}
              <div>
                <label style={labelStyle}><Calendar size={12} color="#4A7C59" />
                  {serviceType === 'courier' ? 'Pickup Date' : 'Travel Date'}
                </label>
                <input type="date" name="date" required value={formData.date} onChange={handleInputChange}
                  style={{ ...inputStyle, colorScheme: 'light' }}
                  onFocus={(e) => { e.target.style.borderColor = '#4A7C59'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(208, 198, 179, 0.7)'; }} />
              </div>
              {/* Conditional */}
              {serviceType === 'courier' ? (
                <div>
                  <label style={labelStyle}>Approx. Weight (kg)</label>
                  <input type="number" name="weight" min="1" value={formData.weight} onChange={handleInputChange}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#4A7C59'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(208, 198, 179, 0.7)'; }} />
                </div>
              ) : (
                <div>
                  <label style={labelStyle}>Passengers / Travelers</label>
                  <select name="travelers" value={formData.travelers} onChange={handleInputChange}
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Submit */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              paddingTop: '28px', marginTop: '28px',
              borderTop: '1px solid rgba(208, 198, 179, 0.5)',
              flexWrap: 'wrap', gap: '16px',
            }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#B5ADA0', maxWidth: '320px', margin: 0 }}>
                * By submitting, you agree to our service terms. We'll confirm within 15 minutes.
              </p>
              <button type="submit" className="btn-earth">
                Confirm Booking Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetForm}
              style={{ position: 'absolute', inset: 0, background: 'rgba(27,58,45,0.75)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              style={{
                position: 'relative', zIndex: 1,
                background: 'white',
                borderRadius: '28px',
                padding: '44px 40px',
                width: '100%',
                maxWidth: '420px',
                textAlign: 'center',
                boxShadow: '0 40px 80px rgba(27,58,45,0.25)',
                border: '1px solid rgba(208, 198, 179, 0.5)',
              }}
            >
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                background: 'rgba(45,90,61,0.1)',
                border: '1px solid rgba(45,90,61,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <CheckCircle size={30} color="#2D5A3D" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', fontWeight: 700, color: '#1B3A2D', margin: '0 0 10px' }}>
                Booking Requested!
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#7A6E62', lineHeight: 1.6, margin: '0 0 24px' }}>
                Thank you, <strong style={{ color: '#1B3A2D' }}>{formData.name}</strong>. Your request has been logged. We'll confirm shortly.
              </p>
              <div style={{
                background: '#F4EFE6', border: '1px solid rgba(208,198,179,0.6)',
                borderRadius: '16px', padding: '16px 20px',
                textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px',
                marginBottom: '24px',
              }}>
                {[
                  ['Service', serviceType.charAt(0).toUpperCase() + serviceType.slice(1)],
                  ['Destination', formData.destination],
                  ['Date', formData.date],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem' }}>
                    <span style={{ color: '#7A6E62' }}>{k}:</span>
                    <span style={{ color: '#1B3A2D', fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
              <button onClick={resetForm} className="btn-earth" style={{ width: '100%', justifyContent: 'center' }}>
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .booking-form-grid { grid-template-columns: 1fr !important; }
          .booking-tab-label { display: none; }
        }
      `}</style>
    </section>
  );
}
