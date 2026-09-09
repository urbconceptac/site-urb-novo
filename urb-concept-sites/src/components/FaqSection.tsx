import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { FAQS } from '../data';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">
            06. FAQ
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
            Dúvidas Frequentes
          </h2>
          <p className="mt-3 text-sm text-[#A1A1AA]">
            Respostas diretas e sem rodeios para você tomar sua decisão com total segurança.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border rounded-lg bg-[#121212] transition-colors duration-200 overflow-hidden ${
                  isOpen ? 'border-[#00FF66]/50 shadow-[0_0_15px_rgba(0,255,102,0.08)]' : 'border-[#222222]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center text-sm sm:text-base font-heading font-semibold text-white hover:text-[#00FF66] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className={`ml-2 flex items-center justify-center w-7 h-7 rounded-full border transition-all ${
                      isOpen
                        ? 'border-[#00FF66] text-[#00FF66] bg-[#00FF66]/10'
                        : 'border-[#333333] text-[#A1A1AA]'
                    }`}
                  >
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-[#1c1c1c] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
