import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import profileLogo from '../assets/images/ProfileLogo_trimmed.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#080808] text-[#A1A1AA] text-xs font-mono border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#1c1c1c]">
          
          {/* Logo enviada pelo usuário com link para site principal */}
          <a
            href="https://www.urbconcept.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center group"
            title="Visitar URB Concept (www.urbconcept.com.br)"
          >
            <img
              src={profileLogo}
              alt="URB Concept"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Quick nav */}
          <div className="flex flex-wrap items-center gap-6">
            <a href="#problema" className="hover:text-white transition-colors">01. Problema</a>
            <a href="#capacidades" className="hover:text-white transition-colors">02. Capacidades</a>
            <a href="#portfolio" className="hover:text-[#00FF66] transition-colors text-white font-medium">03. Portfólio</a>
            <a href="#processo" className="hover:text-white transition-colors">04. Processo</a>
            <a href="#investimento" className="hover:text-white transition-colors">05. Investimento</a>
            <a href="#faq" className="hover:text-white transition-colors">06. FAQ</a>
          </div>

          {/* Scroll top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-[#00FF66] transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#71717A] text-[11px]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Arquitetura de Alta Conversão • Direcionamento 1x1 no WhatsApp</span>
            </span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} URB Concept. Todos os direitos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
};
