import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Search, ShieldCheck, CheckCircle2, ArrowRight, Scale } from 'lucide-react';

export default function LogisticsSolutions() {
  const [activeTab, setActiveTab] = useState('track');
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [weight, setWeight] = useState(2);
  const [speed, setSpeed] = useState('express');

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setTrackingResult({
      id: trackingId.toUpperCase(),
      status: 'In Transit',
      eta: 'Tomorrow, by 6:00 PM',
      steps: [
        { title: 'Package Picked Up', desc: 'Indira Gandhi Cargo Terminal, Delhi', time: 'June 13, 04:30 PM', done: true },
        { title: 'Sorted & Dispatched', desc: 'MARJ North Hub Consolidation Center', time: 'June 13, 09:15 PM', done: true },
        { title: 'In Transit', desc: 'Express transport route to destination hub', time: 'June 14, 02:40 AM', done: true },
        { title: 'Out for Delivery', desc: 'Courier agent assigned at local delivery station', time: 'Pending', done: false },
      ],
    });
  };

  const calculateEstimate = () => {
    const rates = { standard: 80, express: 150, 'same-day': 320 };
    return (rates[speed] || 150) * weight;
  };

  const calculateETA = () => {
    if (speed === 'standard') return '3 - 5 Business Days';
    if (speed === 'express') return '1 - 2 Business Days';
    return 'Same Day Guaranteed';
  };

  const tabStyle = (active) => ({
    flex: 1,
    padding: '18px',
    textAlign: 'center',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    color: active ? '#1B3A2D' : '#7A6E62',
    borderBottom: `2px solid ${active ? '#4A7C59' : 'transparent'}`,
    transition: 'all 0.25s ease',
  });

  return (
    <section
      id="logistics"
      style={{
        padding: '96px 0',
        backgroundColor: '#F4EFE6',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(208, 198, 179, 0.5)',
      }}
    >
      <div style={{
        position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)',
        width: '450px', height: '450px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,90,61,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '64px', alignItems: 'center' }}
          className="logistics-grid">

          {/* Left: Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="section-badge">
                <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4A7C59' }} />
                Enterprise Logistics
              </span>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                color: '#1B3A2D',
                margin: 0,
                lineHeight: 1.15,
              }}>
                Next-Gen <em style={{ fontWeight: 400, color: '#B56B3F' }}>Courier Solutions</em>
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                color: '#7A6E62',
                lineHeight: 1.75,
                margin: 0,
              }}>
                Empower your business with MARJ's digital tracking platform. Track priority cargo routes, calculate freight estimates, and enjoy automated warehousing logs.
              </p>
            </div>

            {/* Feature points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  icon: ShieldCheck,
                  title: 'Full Route Insurance',
                  desc: 'Complimentary protection on high-priority electronics & documents.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Digital Proof of Delivery',
                  desc: 'Geofenced signature check sent directly to your phone.',
                },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      background: 'rgba(45,90,61,0.1)',
                      border: '1px solid rgba(45,90,61,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={16} color="#2D5A3D" />
                    </div>
                    <div>
                      <h4 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#1B3A2D',
                        margin: '0 0 4px',
                      }}>{f.title}</h4>
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.8rem',
                        color: '#7A6E62',
                        margin: 0,
                        lineHeight: 1.55,
                      }}>{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive Panel */}
          <div style={{
            background: 'white',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(208, 198, 179, 0.6)',
            boxShadow: '0 20px 60px rgba(27,58,45,0.08)',
          }}>
            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(208, 198, 179, 0.5)', background: '#F4EFE6' }}>
              <button onClick={() => { setActiveTab('track'); setTrackingResult(null); }} style={tabStyle(activeTab === 'track')}>
                Courier Tracking
              </button>
              <button onClick={() => setActiveTab('calculate')} style={tabStyle(activeTab === 'calculate')}>
                Rate Estimator
              </button>
            </div>

            <div style={{ padding: '32px' }}>
              {/* Tracking Tab */}
              {activeTab === 'track' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                  <form onSubmit={handleTrackSubmit} style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                      <Search size={15} color="#B5ADA0" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        type="text"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        placeholder="Enter ID (e.g. MARJ-749)"
                        className="earth-input"
                        style={{ paddingLeft: '40px' }}
                      />
                    </div>
                    <button
                      type="submit"
                      style={{
                        padding: '12px 20px',
                        borderRadius: '12px',
                        background: '#1B3A2D',
                        color: 'white',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={(e) => { e.target.style.background = '#2D5A3D'; }}
                      onMouseLeave={(e) => { e.target.style.background = '#1B3A2D'; }}
                    >
                      Track
                    </button>
                  </form>

                  <AnimatePresence mode="wait">
                    {trackingResult ? (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                      >
                        {/* Status card */}
                        <div style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          background: 'rgba(45,90,61,0.06)',
                          border: '1px solid rgba(45,90,61,0.15)',
                          padding: '16px 20px',
                          borderRadius: '16px',
                        }}>
                          <div>
                            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4A7C59', fontFamily: "'Inter', sans-serif" }}>
                              Estimated Delivery
                            </span>
                            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: '#1B3A2D', margin: '4px 0 0' }}>
                              {trackingResult.eta}
                            </h4>
                          </div>
                          <span style={{
                            fontSize: '0.68rem', fontWeight: 600,
                            padding: '6px 14px', borderRadius: '9999px',
                            background: 'rgba(45,90,61,0.1)',
                            color: '#2D5A3D',
                            fontFamily: "'Inter', sans-serif",
                          }}>
                            {trackingResult.status}
                          </span>
                        </div>

                        {/* Stepper */}
                        <div style={{ paddingLeft: '24px', borderLeft: '2px solid rgba(208,198,179,0.7)', display: 'flex', flexDirection: 'column', gap: '28px', marginLeft: '8px' }}>
                          {trackingResult.steps.map((step, idx) => (
                            <div key={idx} style={{ position: 'relative' }}>
                              <div style={{
                                position: 'absolute', left: '-33px', top: '2px',
                                width: '18px', height: '18px', borderRadius: '50%',
                                background: step.done ? '#2D5A3D' : 'white',
                                border: `2px solid ${step.done ? '#2D5A3D' : '#D0C6B3'}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                              }}>
                                {step.done && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }} />}
                              </div>
                              <h4 style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: '1rem', fontWeight: 600,
                                color: step.done ? '#1B3A2D' : '#B5ADA0',
                                margin: 0,
                              }}>{step.title}</h4>
                              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#7A6E62', margin: '4px 0 2px' }}>{step.desc}</p>
                              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', color: '#B5ADA0' }}>{step.time}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="empty"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 0', gap: '12px', textAlign: 'center' }}
                      >
                        <Package size={40} color="rgba(45,90,61,0.3)" />
                        <div>
                          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#1B3A2D', margin: 0 }}>
                            Ready to Track
                          </p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#7A6E62', margin: '6px 0 0', maxWidth: '260px' }}>
                            Enter a valid packaging ID to check shipping stages and courier dispatch timestamps.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Calculator Tab */}
              {activeTab === 'calculate' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                  {/* Weight slider */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 500, color: '#1B3A2D', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Scale size={15} color="#4A7C59" />
                        Package Weight
                      </label>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 700, color: '#2D5A3D' }}>{weight} kg</span>
                    </div>
                    <input
                      type="range" min="1" max="50" value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#2D5A3D', cursor: 'pointer' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: '#B5ADA0', fontWeight: 600 }}>
                      <span>1 kg</span><span>25 kg</span><span>50 kg</span>
                    </div>
                  </div>

                  {/* Speed selection */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 500, color: '#1B3A2D' }}>
                      Delivery Class
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                      {[
                        { key: 'standard', name: 'Standard', desc: '3-5 Days' },
                        { key: 'express', name: 'Express', desc: '1-2 Days' },
                        { key: 'same-day', name: 'Same Day', desc: 'Guaranteed' },
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => setSpeed(item.key)}
                          style={{
                            padding: '14px 10px',
                            borderRadius: '14px',
                            border: `1.5px solid ${speed === item.key ? '#2D5A3D' : 'rgba(208,198,179,0.6)'}`,
                            background: speed === item.key ? 'rgba(45,90,61,0.08)' : '#F4EFE6',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{
                            display: 'block',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: speed === item.key ? '#1B3A2D' : '#7A6E62',
                          }}>{item.name}</span>
                          <span style={{
                            display: 'block',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.65rem',
                            color: speed === item.key ? '#4A7C59' : '#B5ADA0',
                            marginTop: '4px',
                          }}>{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div style={{
                    background: 'rgba(27,58,45,0.06)',
                    border: '1px solid rgba(27,58,45,0.12)',
                    borderRadius: '20px',
                    padding: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '16px',
                  }}>
                    <div>
                      <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4A7C59', fontFamily: "'Inter', sans-serif" }}>
                        Estimated Fare
                      </span>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '2rem', fontWeight: 700, color: '#1B3A2D', lineHeight: 1, marginTop: '6px' }}>
                        ₹{calculateEstimate()}
                      </div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: '#7A6E62', marginTop: '4px' }}>
                        Surcharges & taxes included.
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7A6E62' }}>
                        ETA
                      </span>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#1B3A2D', marginTop: '4px' }}>
                        {calculateETA()}
                      </div>
                      <a href="#booking" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '4px',
                        marginTop: '8px',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: '#4A7C59',
                        textDecoration: 'none',
                      }}>
                        Proceed to Book <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .logistics-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
