import React from 'react';
import { PROPOSAL_DETAILS } from '../data/spotsData';
import { MessageCircle, Check, ArrowRight } from 'lucide-react';

export const MinimalInvestment: React.FC = () => {
  const whatsappUrl = PROPOSAL_DETAILS.whatsappDirectUrl;

  return (
    <section id="investimento" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#e60012] uppercase">
            03 • Proposta Comercial & Fechamento
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Investimento Total do Pacote
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Criação e produção completa dos 6 textos de áudio para o Mês do Cliente.
          </p>
        </div>

        {/* Investment Card */}
        <div className="bg-[#111318] border border-white/15 rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#e60012]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Pricing Value */}
          <div className="space-y-2 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Valor Total da Criação & Produção
            </span>
            <div className="text-5xl sm:text-7xl font-black text-white tracking-tight">
              {PROPOSAL_DETAILS.investmentValue}
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Pagamento único • Sem mensalidades adicionais
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div className="max-w-md mx-auto bg-white/[0.02] border border-white/10 rounded-2xl p-6 text-left space-y-3.5 text-xs sm:text-sm text-zinc-200 relative z-10">
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#e60012] shrink-0" />
              <span><strong>5 Spots de 30 Segundos</strong> (Giro temático diário)</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#e60012] shrink-0" />
              <span><strong>1 Spot Master de 60 Segundos</strong> (1 minuto completo)</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#e60012] shrink-0" />
              <span><strong>Produção e Masterização</strong> em estúdio profissional</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#e60012] shrink-0" />
              <span><strong>Uso 100% livre</strong> durante todo o mês em todas as mídias</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#e60012] shrink-0" />
              <span><strong>Entrega imediata dos arquivos MP3</strong> (320kbps)</span>
            </div>
          </div>

          {/* Action CTA: Direct WhatsApp Approval */}
          <div className="pt-2 relative z-10 flex flex-col items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#e60012] hover:bg-[#ff1a2b] text-white font-bold px-10 py-4.5 rounded-xl text-sm sm:text-base uppercase tracking-wider transition-all active:scale-95 shadow-xl shadow-[#e60012]/30"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Aprovar Proposta no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-xs text-zinc-500 font-mono">
              Clique para abrir o WhatsApp e confirmar a aprovação imediata.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
