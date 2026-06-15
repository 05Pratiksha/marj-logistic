import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Navigation, Compass, Package, Users, Truck } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '10K+', label: 'Happy Customers', icon: Users },
    { value: '500+', label: 'Deliveries Monthly', icon: Truck },
    { value: '24/7', label: 'Support SLA', icon: Shield },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-dots overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-brand-brown/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-8"
        >
          {/* Partner Badge */}
          <div className="inline-flex">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-brand-gold bg-brand-gold/10 border border-brand-gold/25">
              <Shield className="w-3.5 h-3.5" />
              Trusted Logistics & Travel Partner
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-dark-brown leading-tight font-display">
              Moving Packages.<br />
              <span className="italic font-light text-brand-brown">
                Creating Journeys.
              </span>
            </h1>
            <p className="text-base font-light text-brand-text-secondary max-w-lg leading-relaxed">
              Reliable courier services, travel bookings, and customized tour packages across India. Experience warm hospitality and speed combined.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="btn-primary"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#tours"
              className="btn-outline"
            >
              <Compass className="w-4 h-4" />
              Book a Trip
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-brand-border w-full max-w-md" />

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col space-y-1">
                  <div className="flex items-center gap-2 text-brand-dark-brown">
                    <Icon className="w-4 h-4 text-brand-gold" />
                    <span className="font-display font-bold text-2xl md:text-3xl tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-brand-text-secondary uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center items-center h-[500px]"
        >
          {/* Central artistic background sphere */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-brand-gold/10 to-brand-brown/10 blur-2xl animate-pulse" />

          {/* Main Hero Visual Card */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-brand-border group">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
              alt="Premium Travel Journey"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark vignette gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-brown/85 via-brand-dark-brown/20 to-transparent" />

            {/* In-image details */}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">Featured Tour</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">Scenic Kerala Backwaters</h3>
              <p className="text-xs text-brand-bg-primary/90 mt-2">Book complete travel packages including flights & luxury stay.</p>
            </div>
          </div>

          {/* Floating Card 1: Flight Boarding Pass */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="absolute -top-6 -left-6 md:-left-12 glass-panel p-5 rounded-3xl w-64 shadow-xl border border-brand-border"
          >
            <div className="flex justify-between items-center pb-3 border-b border-brand-border">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-brand-gold rotate-45" />
                <span className="text-[9px] font-bold tracking-widest text-brand-text-secondary uppercase">BOARDING PASS</span>
              </div>
              <span className="text-[9px] font-semibold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full">First Class</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <div>
                <p className="text-[9px] text-brand-text-secondary font-semibold tracking-wider">FROM</p>
                <h4 className="text-xl font-bold font-display text-brand-dark-brown">DEL</h4>
                <p className="text-[9px] text-brand-text-secondary">Delhi, IN</p>
              </div>
              <div className="w-12 h-px bg-brand-border relative">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-gold" />
              </div>
              <div className="text-right">
                <p className="text-[9px] text-brand-text-secondary font-semibold tracking-wider">TO</p>
                <h4 className="text-xl font-bold font-display text-brand-dark-brown">GOI</h4>
                <p className="text-[9px] text-brand-text-secondary">Goa, IN</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-brand-border text-xs">
              <div>
                <p className="text-[9px] text-brand-text-secondary">Seat</p>
                <p className="font-semibold text-brand-dark-brown">12A</p>
              </div>
              <div>
                <p className="text-[9px] text-brand-text-secondary">Gate</p>
                <p className="font-semibold text-brand-dark-brown">A3</p>
              </div>
              <div>
                <p className="text-[9px] text-brand-text-secondary">Boarding</p>
                <p className="font-semibold text-brand-gold">08:15</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2: Courier Live Tracker */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            className="absolute -bottom-6 -right-6 md:-right-12 glass-panel p-5 rounded-3xl w-64 shadow-xl border border-brand-border"
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                <span className="text-[9px] font-bold text-brand-text-secondary tracking-wider">COURIER TRANSIT</span>
              </div>
              <span className="text-[9px] font-semibold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full">Fast Shipping</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-bg-primary border border-brand-border flex items-center justify-center">
                <Package className="w-5 h-5 text-brand-gold" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-[10px] font-bold">
                  <span className="text-brand-dark-brown">ID #MARJ-749</span>
                  <span className="text-brand-gold">In Transit</span>
                </div>
                <p className="text-[9px] text-brand-text-secondary mt-0.5">Mumbai Hub → Bangalore Hub</p>
              </div>
            </div>
            {/* Progress line */}
            <div className="mt-4 h-1 w-full bg-brand-border rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-brand-gold rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
