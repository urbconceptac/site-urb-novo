import React from 'react';
import { PROPOSAL_DETAILS } from '../data/spotsData';

export const MinimalFooter: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#0c0d10] text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Agency / Producer Brand */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <img src="logo-urb.png" alt="URB" className="h-8 w-auto object-contain" />
          <div>
            <span className="font-mono font-bold text-sm text-white uppercase tracking-wider block">
              Produtora de Áudio
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              Criação & Produção Publicitária
            </span>
          </div>
        </div>

        {/* Right: Client & Proposal Information */}
        <div className="text-center sm:text-right space-y-1">
          <div className="flex items-center justify-center sm:justify-end gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e60012]" />
            <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider">
              {PROPOSAL_DETAILS.clientName}
            </span>
          </div>
          <p className="text-[11px] font-mono text-zinc-600">
            Proposta Comercial • 6 Textos de Áudio • {PROPOSAL_DETAILS.campaignName}
          </p>
        </div>
      </div>
    </footer>
  );
};
