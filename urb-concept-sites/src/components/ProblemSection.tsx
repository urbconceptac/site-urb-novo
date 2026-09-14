import React from 'react';
import { CreditCard, MousePointerClick, Lock, AlertCircle, Clock, ShieldAlert } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-24 border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">
            01. O PROBLEMA
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
            Por que a maioria dos sites locais não vende nada?
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed">
            Ter apenas um endereço na internet não garante vendas. Se a sua página não foi construída com engenharia de conversão imediata, você está jogando dinheiro fora e entregando clientes prontos para fechar nas mãos da concorrência.
          </p>
        </div>

        {/* 3 Dark Cards with dedicated icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: A 'Armadilha do Cartão Virtual' */}
          <div className="bg-[#121212] border border-[#222222] rounded-lg p-8 hover:border-red-500/40 transition-colors relative group">
            <div className="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-105 transition-transform">
              <CreditCard className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
              A 'Armadilha do Cartão Virtual'
            </h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Sites lentos, pesados e genéricos que parecem criados em 2010. Não transmitem solidez nem autoridade ao visitante que pesquisa pelo celular antes de decidir onde gastar o próprio dinheiro.
            </p>
            <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center gap-2 text-xs font-mono text-red-400/80">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Gera desconfiança imediata</span>
            </div>
          </div>

          {/* Card 2: Falta de Direcionamento Imediato */}
          <div className="bg-[#121212] border border-[#222222] rounded-lg p-8 hover:border-red-500/40 transition-colors relative group">
            <div className="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-105 transition-transform">
              <MousePointerClick className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
              Falta de Direcionamento Imediato
            </h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              O cliente local entra com pressa pelo Google ou Instagram, não encontra um botão de WhatsApp claro em 3 segundos, se frustra com formulários frios e fecha a aba para chamar o concorrente.
            </p>
            <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center gap-2 text-xs font-mono text-red-400/80">
              <Clock className="w-3.5 h-3.5" />
              <span>Abandono em menos de 5 segundos</span>
            </div>
          </div>

          {/* Card 3: Refém de Agências Tradicionais */}
          <div className="bg-[#121212] border border-[#222222] rounded-lg p-8 hover:border-red-500/40 transition-colors relative group">
            <div className="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-105 transition-transform">
              <Lock className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
              Refém de Agências Tradicionais
            </h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Meses de espera burocrática para colocar um site simples no ar e cobrança de mensalidades abusivas só para alterar um número de telefone ou atualizar o endereço físico da sua empresa.
            </p>
            <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center gap-2 text-xs font-mono text-red-400/80">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Custos recorrentes sem retorno real</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
