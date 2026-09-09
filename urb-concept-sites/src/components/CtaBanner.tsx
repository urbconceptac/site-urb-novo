import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  whatsappNumber: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ whatsappNumber }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Vim pelo site da URB Concept e quero um site de alta conversão para o meu negócio local.'
  )}`;

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#080808] border-b border-[#222222] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00FF66]/10 text-[#00FF66] text-xs font-mono uppercase tracking-widest border border-[#00FF66]/20">
          <Sparkles className="w-3 h-3" />
          <span>Inicie Hoje Mesmo</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Preparado para transformar buscas no Google em clientes no seu WhatsApp?
        </h2>

        <p className="text-[#A1A1AA] text-base max-w-xl mx-auto leading-relaxed">
          Fale diretamente com nossa equipe agora mesmo e posicione a sua empresa como referência indiscutível da sua cidade antes dos seus concorrentes.
        </p>

        <div className="pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#00FF66] hover:bg-[#00e65c] text-black font-heading font-bold text-sm uppercase tracking-wider px-9 py-4 rounded-sm transition-all shadow-[0_0_30px_rgba(0,255,102,0.45)] hover:shadow-[0_0_45px_rgba(0,255,102,0.7)] hover:-translate-y-0.5"
          >
            <span>Falar no WhatsApp Agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
