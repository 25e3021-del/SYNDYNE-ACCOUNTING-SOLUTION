
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import ServicesSection from './components/ServicesSection';
import WhoWeServe from './components/WhoWeServe';
import MissionVision from './components/MissionVision';
import WhyChooseUs from './components/WhyChooseUs';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-blue-600 selection:text-white">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        {/* Hero is handled separately to allow fixed/absolute positioning */}
        <section id="home">
          <Hero />
        </section>

        <Stats />
        
        <section id="about">
          <About />
        </section>

        <MissionVision />

        <section id="services" className="scroll-mt-20">
          <ServicesSection />
        </section>

        <section id="industries" className="scroll-mt-20">
          <WhoWeServe />
        </section>

        <WhyChooseUs />
        <TechStack />
        
        <section id="contact" className="bg-slate-900 py-32 scroll-mt-20">
          <ContactForm />
        </section>

        <Testimonials />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
