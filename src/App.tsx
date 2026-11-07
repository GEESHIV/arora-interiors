import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Enquiry from '@/components/sections/Enquiry';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import WhyChoose from '@/components/sections/WhyChoose';

export default function App() {
  const [presetService, setPresetService] = useState('');

  const handleEnquire = (service: string) => {
    setPresetService(service);
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onEnquire={handleEnquire} />
        <Portfolio />
        <Philosophy />
        <WhyChoose />
        <Enquiry presetService={presetService} />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
