import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Lock, Users, PhoneCall, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Fast Delivery',
      description: 'SLA-backed priority routes ensuring next-day courier delivery to major Indian cities.',
      icon: Zap,
      accent: 'bg-brand-gold/15 text-brand-brown',
    },
    {
      title: 'Affordable Pricing',
      description: 'Transparent pricing matrix with zero hidden commissions on flights, trains, and shipping bookings.',
      icon: DollarSign,
      accent: 'bg-brand-brown/15 text-brand-brown',
    },
    {
      title: 'Secure Shipping',
      description: 'Tamper-proof transit seals, GPS vehicle fleets, and comprehensive cargo damage protection.',
      icon: Lock,
      accent: 'bg-brand-dark-brown/15 text-brand-dark-brown',
    },
    {
      title: 'Personalized Tours',
      description: 'Tailor-made vacation plans configured by certified travel directors to match your pace.',
      icon: Users,
      accent: 'bg-brand-gold/15 text-brand-brown',
    },
    {
      title: '24/7 Support',
      description: 'A dedicated, human-operated concierge desk resolving re-bookings and delay escalations instantly.',
      icon: PhoneCall,
      accent: 'bg-brand-brown/15 text-brand-brown',
    },
    {
      title: 'Verified Partners',
      description: 'Direct corporate ties with certified flight carriers, premium hotels, and IRCTC networks.',
      icon: CheckCircle,
      accent: 'bg-brand-dark-brown/15 text-brand-dark-brown',
    },
  ];

  return (
    <section className="py-28 bg-brand-bg-secondary/50 relative overflow-hidden border-t border-brand-border">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-sans">
            Core Edge
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark-brown font-display leading-tight">
            Built For Speed. Designed For Comfort.
          </h2>
          <p className="text-brand-text-secondary font-sans text-sm md:text-base leading-relaxed">
            Whether forwarding a high-priority enterprise document or planning a dream Himalayan family escape, see why thousands choose MARJ.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon with elegant accent badge */}
                  <div className={`w-12 h-12 rounded-2xl ${feature.accent} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-display font-semibold text-lg text-brand-dark-brown">
                      {feature.title}
                    </h3>
                    <p className="text-brand-text-secondary text-sm leading-relaxed font-sans">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
