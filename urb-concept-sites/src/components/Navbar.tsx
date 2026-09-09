import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import profileLogo from '../assets/images/ProfileLogo_trimmed.png';

interface NavbarProps {
  whatsappNumber: string;
}

export const Navbar: React.FC<NavbarProps> = ({ whatsappNumber }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Vim pelo site da URB Concept e quero um site de alta conversão para o meu negócio.'
  )}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#080808]/92 backdrop-blur-md border-b border-[#222222]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logomarca enviada pelo usuário com redirecionamento para o site principal */}
        <a
          href="https://www.urbconcept.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center group py-1"
          title="Visitar URB Concept (www.urbconcept.com.br)"
        >
          <img
            src={profileLogo}
            alt="URB Concept"
            className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Links de Navegação (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
          <a href="#problema" className="hover:text-[#00FF66] transition-colors">01. Problema</a>
          <a href="#capacidades" className="hover:text-[#00FF66] transition-colors">02. Capacidades</a>
          <a href="#portfolio" className="hover:text-[#00FF66] transition-colors">03. Portfólio</a>
          <a href="#processo" className="hover:text-[#00FF66] transition-colors">04. Processo</a>
          <a href="#investimento" className="hover:text-[#00FF66] transition-colors">05. Investimento</a>
          <a href="#faq" className="hover:text-[#00FF66] transition-colors">06. FAQ</a>
        </nav>

        {/* CTA Principal WhatsApp */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00FF66] hover:bg-[#00e65c] text-black font-heading font-bold text-xs uppercase tracking-wider px-4 sm:px-6 py-2.5 rounded-sm transition-all shadow-[0_0_20px_rgba(0,255,102,0.35)] hover:shadow-[0_0_30px_rgba(0,255,102,0.65)] hover:-translate-y-0.5"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-black" />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 hidden sm:inline" />
          </a>
        </div>

      </div>
    </header>
  );
};
