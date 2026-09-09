import React from 'react';
import { MessageSquare, ShieldCheck, Zap, KeyRound, Sparkles, Smartphone } from 'lucide-react';

export const CapacidadesSection: React.FC = () => {
  const capabilities = [
    {
      icon: MessageSquare,
      title: 'Aceleração para o WhatsApp',
      description:
        'Cada bloco, gatilho e botão da página conduz o visitante a clicar e iniciar um diálogo direto com a sua equipe no 1x1, com mensagens pré-formatadas para facilitar a resposta.',
    },
    {
      icon: ShieldCheck,
      title: 'Design Sob Medida e Flexibilidade Total',
      description:
        'Esqueça layouts engessados. Criamos um sistema modular onde você define a cara do seu site. Escolha entre diagramações profissionais e alterne cores, mídias ou blocos com um clique. A identidade visual perfeita e o controle absoluto do design ficam inteiramente nas suas mãos, adaptando-se a qualquer momento do seu negócio.',
    },
    {
      icon: Zap,
      title: 'Entrega em Tempo Recorde',
      description:
        'Seu projeto estruturado, revisado e colocado no ar em poucos dias úteis (3 a 5 dias), pronto para receber visitantes do Google e começar a gerar conversas imediatamente.',
    },
    {
      icon: KeyRound,
      title: 'Autonomia Total (Zero Lock-in)',
      description:
        'Sem mensalidades surpresa nem contratos que prendem você a nós. O site é 100% seu. Você tem liberdade e autonomia para alterar textos, fotos e telefones quando quiser.',
    },
  ];

  return (
    <section id="capacidades" className="py-24 border-b border-[#222222] bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">
            02. CAPACIDADES
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
            Projetado exclusivamente para gerar conversas de venda no 1x1
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed">
            Eliminamos todo o ruído visual e os elementos que não trazem faturamento para concentrar 100% da atenção no canal de atendimento mais lucrativo do Brasil: o contato direto no WhatsApp.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-[#121212] border border-[#222222] rounded-lg p-7 hover:border-[#00FF66]/50 transition-all group duration-300"
              >
                <div className="w-12 h-12 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] mb-5 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2.5 group-hover:text-[#00FF66] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
