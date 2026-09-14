import React from 'react';
import { Layers, Radio, Megaphone, CheckCircle2, FileAudio, RefreshCw } from 'lucide-react';

export const MinimalProposal: React.FC = () => {
  return (
    <section id="proposta" className="py-16 sm:py-20 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#e60012] uppercase">
            01 • Estrutura da Proposta
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Por que 6 textos diferentes ao longo do mês?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            A repetição excessiva da mesma mensagem gera saturação no ouvinte. A criação de 6 peças temáticas mantém a campanha viva e surpreendente todos os dias.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: 5 Spots de 30s */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                5 Textos • 30 Segundos
              </span>
              <RefreshCw className="w-4 h-4 text-zinc-500" />
            </div>
            <h3 className="text-lg font-bold text-white">Giro Temático Diário</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Cada dia ou horário foca em um pilar comercial diferente:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e60012]" />
                <strong>Spot 1:</strong> Edições Marvel (FZ15 Deadpool & Crosser Wolverine)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e60012]" />
                <strong>Spot 2:</strong> Condições de Pagamento, Consórcio & Liberacred
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e60012]" />
                <strong>Spot 3:</strong> Capacete de Brinde & Frete Grátis na hora
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e60012]" />
                <strong>Spot 4:</strong> Localização das 3 Lojas (Centro, Praça, Aeroporto)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e60012]" />
                <strong>Spot 5:</strong> Varejo Rápido e Chamada de Urgência
              </li>
            </ul>
          </div>

          {/* Card 2: 1 Spot Master de 60s */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#e60012] bg-[#e60012]/10 border border-[#e60012]/20 px-3 py-1 rounded-full">
                1 Texto • 60 Segundos (Master)
              </span>
              <Megaphone className="w-4 h-4 text-[#e60012]" />
            </div>
            <h3 className="text-lg font-bold text-white">Spot Master Completo</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Uma produção imersiva e completa com 1 minuto de duração, reunindo todos os lançamentos, vantagens e endereços em uma narrativa envolvente.
            </p>
            <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-zinc-400">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Ideal para aberturas e encerramentos de blocos no rádio.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Perfeito para veiculação em carros de som por toda a cidade.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Áudio de impacto para Reels, Stories e mensagens de WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
