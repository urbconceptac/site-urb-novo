import React from 'react';
import { MessageSquareText, SlidersHorizontal, Rocket, Check } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquareText,
      duration: '5 minutos',
      title: 'Alinhamento Rápido',
      description:
        'Coletamos as informações essenciais do seu negócio, fotografias, serviços oferecidos e diferenciais locais através de um formulário simples e direto pelo WhatsApp.',
      bullet: 'Sem reuniões cansativas ou termos técnicos complicados',
    },
    {
      number: '02',
      icon: SlidersHorizontal,
      duration: '2 a 3 dias úteis',
      title: 'Construção & Ajustes',
      description:
        'Criamos a estrutura visual com foco cirúrgico no seu público local e apresentamos uma prévia funcional no celular para sua aprovação e refinamento imediato.',
      bullet: 'Engenharia de persuasão voltada para o seu bairro e cidade',
    },
    {
      number: '03',
      icon: Rocket,
      duration: 'Chave na Mão',
      title: 'Publicação & Autonomia',
      description:
        'Colocamos seu site no ar integrado ao Google e enviamos um vídeo prático de 3 minutos ensinando com clareza como atualizar qualquer informação sem depender de ninguém.',
      bullet: 'Acesso total e autonomia garantida desde o primeiro dia',
    },
  ];

  return (
    <section id="processo" className="py-24 border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">
            04. PROCESSO
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
            Transparência absoluta do primeiro contato à entrega
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed">
            Sem processos burocráticos. Você foca em atender seus clientes enquanto construímos a máquina de atração digital do seu negócio.
          </p>
        </div>

        {/* 3 Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;

            return (
              <div
                key={idx}
                className="bg-[#121212] border border-[#222222] rounded-lg p-8 relative hover:border-[#00FF66]/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-heading font-extrabold text-[#00FF66]">
                      {step.number}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#A1A1AA] bg-[#181818] border border-[#222222] px-2.5 py-1 rounded">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-[#00FF66] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="pt-4 border-t border-[#1a1a1a] flex items-center gap-2 text-xs font-mono text-neutral-300">
                  <Check className="w-3.5 h-3.5 text-[#00FF66] shrink-0" />
                  <span>{step.bullet}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
