import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Search, ChevronRight, CheckCircle2, ArrowRight, ShieldCheck, Scale } from 'lucide-react';

export default function LogisticsSolutions() {
  const [activeTab, setActiveTab] = useState('track'); // 'track' | 'calculate'
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [weight, setWeight] = useState(2);
  const [speed, setSpeed] = useState('express'); // 'standard' | 'express' | 'same-day'

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    // Simulate tracking response
    setTrackingResult({
      id: trackingId.toUpperCase(),
      status: 'In Transit',
      eta: 'Tomorrow, by 6:00 PM',
      steps: [
        { title: 'Package Picked Up', desc: 'Indira Gandhi Cargo Terminal, Delhi', time: 'June 13, 04:30 PM', done: true },
        { title: 'Sorted & Dispatched', desc: 'MARJ North Hub Consolidation Center', time: 'June 13, 09:15 PM', done: true },
        { title: 'In Transit', desc: 'Express transport route to destination hub', time: 'June 14, 02:40 AM', done: true },
        { title: 'Out for Delivery', desc: 'Courier agent assigned at local delivery station', time: 'Pending', done: false },
      ]
    });
  };

  const calculateEstimate = () => {
    let rate = 80; // base standard rate per kg
    if (speed === 'express') rate = 150;
    if (speed === 'same-day') rate = 320;
    return rate * weight;
  };

  const calculateETA = () => {
    if (speed === 'standard') return '3 - 5 Business Days';
    if (speed === 'express') return '1 - 2 Business Days';
    return 'Same Day Guaranteed';
  };

  return (
    <section id="logistics" className="py-28 bg-brand-bg-secondary/40 relative overflow-hidden border-t border-brand-border bg-dots">
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Context & Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-sans">
                Enterprise Logistics
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark-brown font-display leading-tight">
                Next-Gen Courier Solutions
              </h2>
              <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed font-sans">
                Empower your business with MARJ's digital tracking platform. Track priority cargo routes, calculate instant freight estimates, and enjoy automated warehousing logs.
              </p>
            </div>

            {/* Feature small cards */}
            <div className="space-y-4 font-sans">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark-brown text-sm font-display">Full Route Insurance</h4>
                  <p className="text-xs text-brand-text-secondary mt-0.5">Complimentary protection on high-priority electronics & documents.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark-brown text-sm font-display">Automated Digital Proof of Delivery</h4>
                  <p className="text-xs text-brand-text-secondary mt-0.5">Geofenced signature check sent directly to your phone.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Panel */}
          <div className="lg:col-span-7">
            <div className="bg-brand-card rounded-3xl overflow-hidden border border-brand-border shadow-xl">
              
              {/* Tab Selector */}
              <div className="flex border-b border-brand-border bg-brand-bg-primary/50">
                <button
                  onClick={() => { setActiveTab('track'); setTrackingResult(null); }}
                  className={`flex-1 py-5 text-center font-display font-semibold text-sm transition-all relative cursor-pointer ${
                    activeTab === 'track' ? 'text-brand-gold' : 'text-brand-text-secondary hover:text-brand-dark-brown'
                  }`}
                >
                  Courier Tracking
                  {activeTab === 'track' && (
                    <motion.div layoutId="logisticsTab" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('calculate')}
                  className={`flex-1 py-5 text-center font-display font-semibold text-sm transition-all relative cursor-pointer ${
                    activeTab === 'calculate' ? 'text-brand-gold' : 'text-brand-text-secondary hover:text-brand-dark-brown'
                  }`}
                >
                  Rate Estimator
                  {activeTab === 'calculate' && (
                    <motion.div layoutId="logisticsTab" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold" />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                
                {/* Tab: Tracking */}
                {activeTab === 'track' && (
                  <div className="space-y-8 font-sans">
                    <form onSubmit={handleTrackSubmit} className="flex gap-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-secondary/60" />
                        <input
                          type="text"
                          value={trackingId}
                          onChange={(e) => setTrackingId(e.target.value)}
                          placeholder="Enter Tracking ID (e.g. MARJ-749)"
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-brand-bg-primary border border-brand-border text-brand-dark-brown placeholder-brand-text-secondary/60 text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-3.5 rounded-2xl bg-brand-gold text-brand-bg-secondary font-semibold text-sm hover:bg-[#C89463] hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300 flex items-center gap-1.5 shrink-0 cursor-pointer font-sans"
                      >
                        Track Package
                      </button>
                    </form>

                    <AnimatePresence mode="wait">
                      {trackingResult ? (
                        <motion.div
                          key="result"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="space-y-6 pt-4 border-t border-brand-border"
                        >
                          <div className="flex justify-between items-center bg-brand-gold/5 border border-brand-gold/20 p-4 rounded-2xl">
                            <div>
                              <span className="text-[10px] text-brand-gold uppercase font-bold tracking-wider block font-sans">Estimated Delivery</span>
                              <h4 className="text-brand-dark-brown font-bold text-base mt-0.5 font-sans">{trackingResult.eta}</h4>
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 bg-brand-gold/10 text-brand-brown rounded-full border border-brand-gold/20 font-sans">
                              {trackingResult.status}
                            </span>
                          </div>

                          {/* Stepper */}
                          <div className="relative pl-6 border-l border-brand-border space-y-8 ml-2">
                            {trackingResult.steps.map((step, idx) => (
                              <div key={idx} className="relative">
                                {/* Dot indicator */}
                                <div className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                                  step.done 
                                    ? 'bg-brand-gold border-brand-gold text-brand-bg-secondary' 
                                    : 'bg-brand-bg-primary border-brand-border text-brand-text-secondary/60'
                                }`}>
                                  {step.done && <div className="w-1.5 h-1.5 rounded-full bg-brand-bg-secondary" />}
                                </div>
                                <div>
                                  <h4 className={`text-sm font-semibold font-display ${step.done ? 'text-brand-dark-brown' : 'text-brand-text-secondary/60'}`}>
                                    {step.title}
                                  </h4>
                                  <p className="text-xs text-brand-text-secondary mt-0.5 font-sans">{step.desc}</p>
                                  <span className="text-[10px] text-brand-text-secondary/80 block mt-1 font-sans">{step.time}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="empty"
                          className="flex flex-col items-center justify-center py-12 text-center text-brand-text-secondary space-y-3 font-sans"
                        >
                          <Package className="w-10 h-10 text-brand-gold/50" />
                          <div>
                            <p className="text-sm font-semibold text-brand-dark-brown font-display">Ready to Track</p>
                            <p className="text-xs text-brand-text-secondary max-w-xs mt-1">Enter a valid packaging ID to check shipping stages and courier dispatch timestamps.</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Tab: Calculate */}
                {activeTab === 'calculate' && (
                  <div className="space-y-8 font-sans">
                    {/* Weight Slider */}
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <label className="text-brand-dark-brown font-medium flex items-center gap-1.5 font-sans">
                          <Scale className="w-4 h-4 text-brand-gold" />
                          Package Weight
                        </label>
                        <span className="text-brand-gold font-bold font-sans">{weight} kg</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-gold"
                      />
                      <div className="flex justify-between text-[10px] text-brand-text-secondary/70 font-semibold font-sans">
                        <span>1 kg</span>
                        <span>25 kg</span>
                        <span>50 kg</span>
                      </div>
                    </div>

                    {/* Speed selection */}
                    <div className="space-y-3">
                      <label className="text-brand-dark-brown text-sm font-medium font-sans">Service Delivery Class</label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { key: 'standard', name: 'Standard', desc: '3-5 Days' },
                          { key: 'express', name: 'Express', desc: '1-2 Days' },
                          { key: 'same-day', name: 'Same Day', desc: 'Guaranteed' },
                        ].map((item) => (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => setSpeed(item.key)}
                            className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer font-sans ${
                              speed === item.key
                                ? 'bg-brand-gold/10 border-brand-gold text-brand-dark-brown'
                                : 'bg-brand-bg-primary border-brand-border text-brand-text-secondary hover:border-brand-gold/30 hover:text-brand-dark-brown'
                            }`}
                          >
                            <span className="text-xs font-bold uppercase tracking-wider">{item.name}</span>
                            <span className="text-[10px] mt-2 block opacity-80">{item.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Estimate results */}
                    <div className="bg-brand-gold/5 border border-brand-gold/20 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="text-center md:text-left space-y-1">
                        <span className="text-[10px] text-brand-gold uppercase font-bold tracking-wider block font-sans">Estimated fare</span>
                        <h4 className="text-brand-dark-brown font-bold text-3xl font-sans">₹{calculateEstimate()}</h4>
                        <span className="text-[10px] text-brand-text-secondary/70 block font-sans">Surcharges & taxes included.</span>
                      </div>
                      <div className="text-center md:text-right space-y-1">
                        <span className="text-[10px] text-brand-text-secondary uppercase font-semibold block font-sans">ETA Speed</span>
                        <h4 className="text-brand-dark-brown font-semibold text-sm font-sans">{calculateETA()}</h4>
                        <a
                          href="#booking"
                          className="mt-2 text-xs font-semibold text-brand-gold flex items-center gap-1 hover:text-brand-brown transition-colors font-sans"
                        >
                          Proceed to Book
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
