import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../data';

interface PricingSectionProps {
  whatsappNumber: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ whatsappNumber }) => {
  return (
    <section id="investimento" className="py-24 border-b border-[#222222] bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">
            05. INVESTIMENTO
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
            Transparência total. Sem mensalidades ou letras miúdas.
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed">
            Pagamento único. Você se torna dono definitivo de toda a sua estrutura digital sem ficar preso a contratos de manutenção da nossa agência.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const isPerformance = pkg.highlight;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              pkg.whatsappMessage
            )}`;

            return (
              <div
                key={pkg.id}
                className={`bg-[#121212] rounded-xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  isPerformance
                    ? 'border-2 border-[#00FF66] shadow-[0_0_35px_rgba(0,255,102,0.25)] lg:-translate-y-2'
                    : 'border border-[#222222] hover:border-[#333333]'
                }`}
              >
                {/* Badge Mais Recomendado */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00FF66] text-black font-heading font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1 rounded shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 fill-black" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  {/* Category & Title */}
                  <div
                    className={`text-xs font-mono uppercase tracking-wider mb-2 ${
                      isPerformance ? 'text-[#00FF66]' : 'text-[#A1A1AA]'
                    }`}
                  >
                    {pkg.category}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mb-6 min-h-[36px] leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-[#222222]">
                    <div className="text-xs text-[#A1A1AA] font-mono">Pagamento Único</div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span
                        className={`text-sm ${
                          isPerformance ? 'text-[#00FF66]' : 'text-[#A1A1AA]'
                        }`}
                      >
                        R$
                      </span>
                      <span
                        className={`text-4xl font-heading font-extrabold ${
                          isPerformance ? 'text-[#00FF66]' : 'text-white'
                        }`}
                      >
                        {pkg.price.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-3.5 text-xs mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                        <span
                          className={
                            fIdx === 0 && isPerformance
                              ? 'text-white font-medium'
                              : 'text-[#A1A1AA]'
                          }
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 font-heading font-bold text-xs uppercase tracking-wider py-4 rounded transition-all ${
                    isPerformance
                      ? 'bg-[#00FF66] hover:bg-[#00e65c] text-black shadow-[0_0_20px_rgba(0,255,102,0.4)] hover:shadow-[0_0_30px_rgba(0,255,102,0.65)]'
                      : 'bg-[#181818] hover:bg-[#222222] text-white border border-[#222222] hover:border-[#444]'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
