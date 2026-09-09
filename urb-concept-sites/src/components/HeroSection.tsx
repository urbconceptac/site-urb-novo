import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Shield, Sparkles, MessageSquare, ExternalLink, TrendingUp, Gauge } from 'lucide-react';
import heroCharacter from '../assets/images/hero_character.png';

interface HeroSectionProps {
  whatsappNumber: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ whatsappNumber }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Vim pelo site da URB Concept e quero um site de alta conversão para o meu negócio local.'
  )}`;

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden border-b border-[#222222]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#00FF66]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#00FF66]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Concise & Punchy Hero Copy */}
          <div className="lg:col-span-6 text-left space-y-7">
            
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#282828] text-[11px] font-mono tracking-widest text-[#00FF66] uppercase shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
              ENGENHARIA DE CONVERSÃO // URB CONCEPT
            </div>

            {/* Headline H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-heading font-extrabold tracking-tight text-white leading-[1.12]">
              Transforme cliques do Google e Redes Sociais em clientes no seu{' '}
              <span className="text-[#00FF66] underline decoration-[#00FF66]/40 underline-offset-8">
                WhatsApp
              </span>.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl leading-relaxed">
              Criamos a estrutura digital definitiva para o seu negócio local: autoridade visual inquestionável, carregamento em menos de 2 segundos e direcionamento direto para o fechamento 1x1.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2.5 bg-[#00FF66] hover:bg-[#00e65c] text-black font-heading font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all shadow-[0_0_30px_rgba(0,255,102,0.45)] hover:shadow-[0_0_40px_rgba(0,255,102,0.7)] hover:-translate-y-0.5"
              >
                <span>Falar no WhatsApp Agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex justify-center items-center gap-2 bg-[#121212] hover:bg-[#181818] text-white border border-[#282828] hover:border-[#00FF66]/50 font-heading font-semibold text-sm tracking-wider uppercase px-7 py-4 rounded-sm transition-colors"
              >
                <span>Ver Casos de Sucesso</span>
              </a>
            </div>

            {/* Micro Guarantees */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A1A1AA] font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
                <span>Sem mensalidades</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#00FF66]" />
                <span>No ar em 3 a 5 dias úteis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#00FF66]" />
                <span>100% de autonomia</span>
              </div>
            </div>

          </div>

          {/* Right Column: Key Visual Art (Seamless & Frameless - Formix Style) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px] flex items-center justify-center">
              
              {/* Grand Glowing Ambient Ring in the background matching the neon halo */}
              <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#00FF66]/15 blur-[120px] -z-10 animate-pulse pointer-events-none" />

              {/* Personagem com Arco de Luz Verde integrado organicamente à cena (Sem Fundo) */}
              <div className="relative w-full aspect-square flex items-center justify-center">
                <img
                  src={heroCharacter}
                  alt="Liderança e autoridade em conversão digital URB Concept"
                  className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_0_40px_rgba(0,255,102,0.2)] transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Selo 1: Google PageSpeed (Floating Seal Top-Right) */}
                <div className="absolute top-2 sm:top-4 right-0 sm:-right-2 z-20 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121212]/90 border border-[#282828] shadow-[0_12px_30px_rgba(0,0,0,0.85)] backdrop-blur-md">
                  <div className="w-7 h-7 rounded-full bg-[#00FF66]/15 border border-[#00FF66]/30 flex items-center justify-center text-[#00FF66]">
                    <Gauge className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left font-mono">
                    <span className="text-[9px] text-[#A1A1AA] uppercase tracking-wider block leading-none mb-0.5">
                      Google PageSpeed
                    </span>
                    <span className="text-xs font-heading font-bold text-white leading-tight flex items-center gap-1.5">
                      Score 98+ <span className="text-[#00FF66] font-mono text-[11px] font-normal">(Ultra Rápido)</span>
                    </span>
                  </div>
                </div>

                {/* Selo 2: Atendimento WhatsApp + Conversão + Cases (Floating Seal Bottom) */}
                <div className="absolute -bottom-3 sm:bottom-2 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 z-20 inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#121212]/90 border border-[#282828] shadow-[0_15px_35px_rgba(0,0,0,0.9)] backdrop-blur-md whitespace-nowrap">
                  <div className="w-8 h-8 rounded-full bg-[#00FF66] text-black flex items-center justify-center font-bold shadow-[0_0_15px_rgba(0,255,102,0.4)]">
                    <MessageSquare className="w-4 h-4 fill-current" />
                  </div>
                  <div className="text-left font-mono">
                    <span className="text-xs font-heading font-bold text-white block leading-tight">
                      Atendimento Direto no WhatsApp
                    </span>
                    <span className="text-[11px] font-mono text-[#00FF66]">
                      Taxa de Conversão +340%
                    </span>
                  </div>
                  <a
                    href="#portfolio"
                    className="ml-2 pl-3 border-l border-[#2e2e2e] text-[11px] font-mono text-neutral-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Cases</span>
                    <ExternalLink className="w-3 h-3 text-[#00FF66]" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Strip inspired by Formix */}
        <div className="mt-16 pt-8 border-t border-[#1e1e1e] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#121212]/60 border border-[#222222] p-4 rounded-xl">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              &lt; 2.0s
            </div>
            <div className="text-xs text-[#A1A1AA] font-mono mt-1">
              Velocidade no Google
            </div>
          </div>

          <div className="bg-[#121212]/60 border border-[#222222] p-4 rounded-xl">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#00FF66]">
              +340%
            </div>
            <div className="text-xs text-[#A1A1AA] font-mono mt-1">
              Conversão no WhatsApp
            </div>
          </div>

          <div className="bg-[#121212]/60 border border-[#222222] p-4 rounded-xl">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              0 Mensalidade
            </div>
            <div className="text-xs text-[#A1A1AA] font-mono mt-1">
              100% de Autonomia
            </div>
          </div>

          <div className="bg-[#121212]/60 border border-[#222222] p-4 rounded-xl">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              3 a 5 Dias
            </div>
            <div className="text-xs text-[#A1A1AA] font-mono mt-1">
              Prazo de Entrega
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
