import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import TravelPackages from './components/TravelPackages';
import LogisticsSolutions from './components/LogisticsSolutions';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#F4EFE6', color: '#3D2314', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <TravelPackages />
        <LogisticsSolutions />
        <Testimonials />
        <BookingForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
