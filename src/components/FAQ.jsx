import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

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

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 bg-brand-bg-secondary relative overflow-hidden border-t border-brand-border bg-dots">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-8 relative">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4 font-sans">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-sans">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark-brown font-display leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-text-secondary text-sm font-sans">
            Quick answers regarding shipping durations, travel package customizations, ticket refund terms, and business support.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 font-sans">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-brand-card rounded-2xl overflow-hidden border border-brand-border shadow-sm hover:border-brand-gold/30 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-brand-bg-primary/30 transition-colors gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-brand-gold' : 'text-brand-text-secondary/70'}`} />
                    <span className="text-sm font-semibold text-brand-dark-brown tracking-wide font-display">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg border transition-colors ${isOpen ? 'border-brand-gold text-brand-gold bg-brand-gold/5' : 'border-brand-border text-brand-text-secondary'}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-brand-text-secondary leading-relaxed font-sans border-t border-brand-border">
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
