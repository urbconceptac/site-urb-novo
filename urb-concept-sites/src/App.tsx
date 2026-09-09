/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { CapacidadesSection } from './components/CapacidadesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [whatsappNumber, setWhatsappNumber] = useState<string>('5511999998888');

  // Load custom WhatsApp number if saved previously
  useEffect(() => {
    const saved = localStorage.getItem('urb_whatsapp_number');
    if (saved && saved.length >= 10) {
      setWhatsappNumber(saved);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[#00FF66] selection:text-black font-sans antialiased relative">
      
      {/* Top Fixed Navigation */}
      <Navbar whatsappNumber={whatsappNumber} />

      {/* Main Content Sections */}
      <main>
        <HeroSection whatsappNumber={whatsappNumber} />
        <ProblemSection />
        <CapacidadesSection />
        <PortfolioSection whatsappNumber={whatsappNumber} />
        <ProcessSection />
        <PricingSection whatsappNumber={whatsappNumber} />
        <FaqSection />
        <CtaBanner whatsappNumber={whatsappNumber} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill with Continuous Neon Pulse */}
      <FloatingWhatsApp whatsappNumber={whatsappNumber} />

    </div>
  );
}
