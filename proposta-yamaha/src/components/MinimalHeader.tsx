import React from 'react';
import { PROPOSAL_DETAILS } from '../data/spotsData';
import { MessageCircle } from 'lucide-react';

interface MinimalHeaderProps {
  onScrollTo: (id: string) => void;
}

export const MinimalHeader: React.FC<MinimalHeaderProps> = ({ onScrollTo }) => {
  const whatsappUrl = PROPOSAL_DETAILS.whatsappDirectUrl;

  return (
    <header className="sticky top-0 z-50 bg-[#0c0d10]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Left: Clean Brand Logo & Client Identifier */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Agency / Producer Logo container */}
          <div className="flex items-center gap-3">
            <img src="logo-urb.png" alt="URB" className="h-10 w-auto object-contain" />
            <div className="flex flex-col justify-center">
              <span className="font-mono text-sm sm:text-base font-black tracking-wider uppercase text-white">
                Produtora de Áudio
              </span>
              <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">
                Proposta Comercial
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-white/15 hidden sm:block" />

          {/* Client: Cruzeiro Motors Yamaha */}
          <div className="hidden sm:flex flex-col justify-center">
            <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">
              Apresentado a
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e60012]" />
              <span className="font-mono text-xs font-bold text-zinc-200 tracking-wide uppercase">
                Cruzeiro Motors <span className="text-[#e60012]">Yamaha</span>
              </span>
            </div>
          </div>
        </div>

        {/* Center / Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-zinc-400">
          <button
            onClick={() => onScrollTo('hero')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Início
          </button>
          <button
            onClick={() => onScrollTo('proposta')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Proposta
          </button>
          <button
            onClick={() => onScrollTo('roteiros')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Roteiros & Áudio
          </button>
          <button
            onClick={() => onScrollTo('investimento')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Investimento
          </button>
        </nav>

        {/* Right: WhatsApp Direct Approval CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e60012] hover:bg-[#ff1a2b] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all active:scale-95 shadow-md shadow-[#e60012]/25 uppercase tracking-wider"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">Aprovar Proposta</span>
            <span className="sm:hidden">Aprovar</span>
          </a>
        </div>
      </div>
    </header>
  );
};
