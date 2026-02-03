
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Stats from './components/Stats.tsx';
import About from './components/About.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import WhoWeServe from './components/WhoWeServe.tsx';
import MissionVision from './components/MissionVision.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import TechStack from './components/TechStack.tsx';
import ContactForm from './components/ContactForm.tsx';
import Testimonials from './components/Testimonials.tsx';
import ChatBot from './components/ChatBot.tsx';
import Footer from './components/Footer.tsx';

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
        <section id="home">
          <Hero />
        </section>

        <Stats />
        
        <section id="about" className="scroll-mt-20">
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
