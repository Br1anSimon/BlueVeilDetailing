import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing onServiceSelect={handleServiceSelect} />
        <About />
        <Contact selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}

export default App;