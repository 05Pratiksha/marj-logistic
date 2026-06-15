import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, MapPin, Truck, Plane, Train, Compass, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [serviceType, setServiceType] = useState('courier'); // 'courier' | 'flight' | 'train' | 'tour'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    origin: '',
    destination: '',
    date: '',
    weight: '1',
    travelers: '1',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.origin || !formData.destination || !formData.date) {
      return; // Basic validation
    }
    // Simulate successful form submission
    setShowSuccess(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      origin: '',
      destination: '',
      date: '',
      weight: '1',
      travelers: '1',
    });
    setShowSuccess(false);
  };

  const servicesList = [
    { id: 'courier', name: 'Courier Service', icon: Truck },
    { id: 'flight', name: 'Flight Ticket', icon: Plane },
    { id: 'train', name: 'Train Ticket', icon: Train },
    { id: 'tour', name: 'Tour Package', icon: Compass },
  ];

  return (
    <section id="booking" className="py-28 bg-brand-bg-primary relative overflow-hidden border-t border-brand-border bg-dots">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-8 relative">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4 font-sans">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-sans">
            RESERVATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark-brown font-display leading-tight">
            Book In Seconds
          </h2>
          <p className="text-brand-text-secondary text-sm font-sans">
            Select your service category, enter shipping or passenger details, and schedule your booking instantly.
          </p>
        </div>

        {/* Booking Container */}
        <div className="bg-brand-card rounded-3xl overflow-hidden border border-brand-border shadow-xl">
          {/* Service Tabs */}
          <div className="grid grid-cols-4 border-b border-brand-border bg-brand-bg-primary/50">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setServiceType(service.id)}
                  className={`py-5 text-center flex flex-col items-center gap-2 font-display font-semibold text-xs transition-all relative cursor-pointer ${
                    serviceType === service.id ? 'text-brand-gold' : 'text-brand-text-secondary hover:text-brand-dark-brown'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline font-sans">{service.name}</span>
                  {serviceType === service.id && (
                    <motion.div layoutId="activeBookingTab" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider flex items-center gap-1.5 font-sans">
                  <User className="w-3.5 h-3.5 text-brand-gold" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-2xl bg-brand-bg-primary border border-brand-border text-brand-dark-brown placeholder-brand-text-secondary/60 text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans"
                />
              </div>

              {/* Phone field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider flex items-center gap-1.5 font-sans">
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter 10-digit mobile"
                  className="w-full px-4 py-3 rounded-2xl bg-brand-bg-primary border border-brand-border text-brand-dark-brown placeholder-brand-text-secondary/60 text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans"
                />
              </div>

              {/* Origin field (conditional styling/labels) */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider flex items-center gap-1.5 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  {serviceType === 'courier' ? 'Pickup Pincode' : 'Departure City'}
                </label>
                <input
                  type="text"
                  name="origin"
                  required
                  value={formData.origin}
                  onChange={handleInputChange}
                  placeholder={serviceType === 'courier' ? 'e.g. 110001 (Delhi)' : 'e.g. Mumbai'}
                  className="w-full px-4 py-3 rounded-2xl bg-brand-bg-primary border border-brand-border text-brand-dark-brown placeholder-brand-text-secondary/60 text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans"
                />
              </div>

              {/* Destination field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider flex items-center gap-1.5 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  {serviceType === 'courier' ? 'Delivery Pincode' : 'Destination / Arrival City'}
                </label>
                <input
                  type="text"
                  name="destination"
                  required
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder={serviceType === 'courier' ? 'e.g. 560001 (Bangalore)' : 'e.g. Goa'}
                  className="w-full px-4 py-3 rounded-2xl bg-brand-bg-primary border border-brand-border text-brand-dark-brown placeholder-brand-text-secondary/60 text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans"
                />
              </div>

              {/* Date field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider flex items-center gap-1.5 font-sans">
                  <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                  {serviceType === 'courier' ? 'Pickup Date' : 'Travel Date'}
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-2xl bg-brand-bg-primary border border-brand-border text-brand-dark-brown placeholder-brand-text-secondary/60 text-sm focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans"
                />
              </div>

              {/* Conditional parameter field */}
              {serviceType === 'courier' ? (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider font-sans">
                    Approx. Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    min="1"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl bg-brand-bg-primary border border-brand-border text-brand-dark-brown text-sm focus:outline-none focus:border-brand-gold/50 transition-all font-sans"
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider font-sans">
                    Passengers / Travelers
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl bg-brand-bg-primary border border-brand-border text-brand-dark-brown text-sm focus:outline-none focus:border-brand-gold/50 transition-all font-sans"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num} className="text-brand-dark-brown">{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-brand-text-secondary max-w-sm font-sans text-center sm:text-left">
                * By submitting, you agree to our service terms. We will verify availability and confirm within 15 minutes.
              </p>
              <button
                type="submit"
                className="px-8 py-4 rounded-full text-xs font-semibold text-brand-bg-secondary bg-brand-gold hover:bg-[#C89463] hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300 cursor-pointer font-sans"
              >
                Confirm Booking Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal Dialogue */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetForm}
              className="absolute inset-0 bg-brand-dark-brown/70 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-brand-bg-secondary p-8 rounded-3xl border border-brand-border shadow-2xl z-10 text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/20 flex items-center justify-center text-brand-gold mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-brand-dark-brown">Booking Requested</h3>
                <p className="text-brand-text-secondary text-sm font-sans">
                  Thank you, <span className="text-brand-dark-brown font-semibold">{formData.name}</span>. Your request has been logged successfully.
                </p>
              </div>

              <div className="bg-brand-bg-primary border border-brand-border p-4 rounded-2xl text-left space-y-2 text-xs font-sans">
                <div className="flex justify-between">
                  <span className="text-brand-text-secondary">Service Category:</span>
                  <span className="text-brand-dark-brown font-semibold uppercase">{serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-secondary">Destination:</span>
                  <span className="text-brand-dark-brown font-semibold">{formData.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-secondary">Booking Date:</span>
                  <span className="text-brand-dark-brown font-semibold">{formData.date}</span>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="w-full py-3.5 rounded-full text-xs font-semibold text-brand-bg-secondary bg-brand-gold hover:bg-[#C89463] transition-colors cursor-pointer font-sans"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
