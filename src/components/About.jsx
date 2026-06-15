import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Compass, HeartHandshake } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Delivery Success', value: '99.9%', icon: ShieldCheck },
    { label: 'Destinations Visited', value: '1,200+', icon: Compass },
    { label: 'Customer Retention', value: '94%', icon: HeartHandshake },
    { label: 'Industry Awards', value: '15+', icon: Award },
  ];

  return (
    <section id="about" className="py-28 bg-brand-bg-primary relative overflow-hidden bg-dots">
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Images Composition */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-12 gap-4"
        >
          {/* Main big image */}
          <div className="col-span-8 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-brand-border">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop"
              alt="Premium Tour Bus"
              className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Sub image floating */}
          <div className="col-span-4 flex flex-col justify-between h-full py-8 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-brand-border">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=300&auto=format&fit=crop"
                alt="Flight Booking"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="glass-panel p-5 rounded-2xl flex flex-col justify-center border border-brand-border shadow-lg">
              <h4 className="text-2xl font-bold font-display text-brand-gold">10+</h4>
              <p className="text-[9px] uppercase font-bold tracking-wider text-brand-text-secondary">Years of Service</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Narrative */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark-brown font-display leading-tight">
              Unifying Logistics & Global Journeys
            </h2>
            <p className="text-brand-text-secondary font-sans text-sm md:text-base leading-relaxed font-light">
              Founded on the belief that moving cargo and passenger journeys deserve the same premium care, MARJ Logistics has grown from an express local courier to an all-inclusive travel, tour, and cargo ecosystem across India.
            </p>
            <p className="text-brand-text-secondary font-sans text-sm md:text-base leading-relaxed font-light">
              We leverage modern digital tracking pipelines, strategic airway agreements, and partnerships with luxury travel resorts to ensure every packages gets delivered and every journey leaves a lasting imprint.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg-secondary border border-brand-border flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-brand-dark-brown leading-tight">
                      {stat.value}
                    </h4>
                    <p className="text-xs font-medium text-brand-text-secondary">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
