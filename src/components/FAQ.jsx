import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Leaf } from 'lucide-react';

const faqs = [
  {
    question: 'What is the estimated delivery time for express courier shipping?',
    answer: 'For major metropolitan hubs across India (Delhi, Mumbai, Bangalore, Chennai), express orders are delivered within 24 to 48 hours. Regional locations can take up to 3 to 4 business days. Real-time GPS status is available on our tracking interface.',
  },
  {
    question: 'Can I customize a featured travel package or add destinations?',
    answer: 'Absolutely. All travel packages on MARJ are fully customizable. Once you submit a booking request or custom itinerary request, a dedicated certified tour director will contact you to add/modify hotel classes, flights, and activities.',
  },
  {
    question: 'Does MARJ cover domestic and international cargo insurance?',
    answer: 'Yes. Every parcel sent via our premium delivery tier has complementary basic route damage coverage. For high-value enterprise logistics or heavy goods shipping, we offer additional comprehensive insurance extensions up to full declared values.',
  },
  {
    question: 'Are flight, train, and bus booking tickets refundable?',
    answer: 'Cancellations and refunds are governed directly by the primary carrier policies (individual airlines, IRCTC, or private bus fleet operators). However, MARJ does not levy any additional platform processing fees for cancellations.',
  },
  {
    question: 'Do you offer specialized corporate rates for business logistics?',
    answer: 'Yes, we provide custom enterprise consoles with volume-based pricing discounts, API integrations for your e-commerce platform, monthly invoicing facilities, and dedicated account managers for warehouses.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="faq"
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
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,90,61,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 64px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span className="section-badge" style={{ justifyContent: 'center' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4A7C59' }} />
            FAQ
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
            Frequently Asked <em style={{ fontWeight: 400, color: '#B56B3F' }}>Questions</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#7A6E62', lineHeight: 1.7, margin: 0 }}>
            Quick answers about shipping durations, travel packages, ticket refunds, and business support.
          </p>
        </div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: `1.5px solid ${isOpen ? 'rgba(74,124,89,0.35)' : 'rgba(208, 198, 179, 0.5)'}`,
                  boxShadow: isOpen ? '0 8px 30px rgba(27,58,45,0.08)' : '0 2px 8px rgba(27,58,45,0.03)',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <Leaf size={15} color={isOpen ? '#2D5A3D' : '#B5ADA0'} style={{ flexShrink: 0, transition: 'color 0.25s' }} />
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: isOpen ? '#1B3A2D' : '#3D2314',
                      lineHeight: 1.3,
                    }}>
                      {faq.question}
                    </span>
                  </div>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                    background: isOpen ? 'rgba(45,90,61,0.1)' : '#F4EFE6',
                    border: `1px solid ${isOpen ? 'rgba(45,90,61,0.25)' : 'rgba(208,198,179,0.6)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.25s',
                  }}>
                    {isOpen
                      ? <Minus size={13} color="#2D5A3D" />
                      : <Plus size={13} color="#7A6E62" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '0 24px 22px 53px',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.88rem',
                        color: '#7A6E62',
                        lineHeight: 1.75,
                        borderTop: '1px solid rgba(208,198,179,0.4)',
                        paddingTop: '16px',
                      }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
