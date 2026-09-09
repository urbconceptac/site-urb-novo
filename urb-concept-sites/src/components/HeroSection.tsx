import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Shield, Sparkles, MessageSquare, ExternalLink } from 'lucide-react';
import heroImage from '../assets/images/new_hero_showcase_1788961726902.jpg';

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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00FF66]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Concise & Punchy Hero Copy */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#222222] text-[11px] font-mono tracking-widest text-[#00FF66] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
              ENGENHARIA DE CONVERSÃO // URB CONCEPT
            </div>

            {/* Headline H1 (Concise, opens to Google + Redes Sociais) */}
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
                className="inline-flex justify-center items-center gap-2.5 bg-[#00FF66] hover:bg-[#00e65c] text-black font-heading font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)] hover:shadow-[0_0_35px_rgba(0,255,102,0.65)] hover:-translate-y-0.5"
              >
                <span>Falar no WhatsApp Agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex justify-center items-center gap-2 bg-[#121212] hover:bg-[#181818] text-white border border-[#222222] hover:border-[#00FF66]/50 font-heading font-semibold text-sm tracking-wider uppercase px-7 py-4 rounded-sm transition-colors"
              >
                <span>Ver Casos de Sucesso</span>
              </a>
            </div>

            {/* Micro Guarantees */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A1A1AA] font-mono">
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

          {/* Right Column: Aspirational Device Showcase */}
          <div className="lg:col-span-6">
            <div className="relative group">
              
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF66]/30 via-transparent to-[#00FF66]/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Main Device Showcase Frame */}
              <div className="relative rounded-xl bg-[#121212] border border-[#2a2a2a] p-2.5 shadow-2xl overflow-hidden">
                
                {/* Browser-style Top Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#0c0c0c] rounded-t-lg border-b border-[#222222] text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                  </div>
                  
                  <div className="flex items-center gap-2 px-3 py-0.5 rounded bg-[#181818] border border-[#282828] text-[#A1A1AA] text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                    <span className="text-neutral-200">urbconcept.com.br</span>
                  </div>

                  <div className="text-[10px] text-[#00FF66] uppercase font-bold tracking-wider">
                    PRODUÇÃO 1X1
                  </div>
                </div>

                {/* Aspirational Image Display */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-b-lg bg-[#080808]">
                  <img
                    src={heroImage}
                    alt="Demonstração visual de estrutura digital aspiracional URB Concept"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Metric Pill 1 (Top Right) */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[#00FF66]/40 px-3.5 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,255,102,0.3)] flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#00FF66]" />
                    <span className="text-[11px] font-mono text-white font-semibold">
                      Google + Instagram + Tráfego
                    </span>
                  </div>

                  {/* Floating Pill 2 (Bottom Left) */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#121212]/90 backdrop-blur-md border border-[#2e2e2e] p-3 rounded-lg shadow-xl flex items-center justify-between sm:justify-start gap-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#00FF66]/20 border border-[#00FF66] flex items-center justify-center text-[#00FF66]">
                        <MessageSquare className="w-4 h-4 fill-current" />
                      </div>
                      <div>
                        <div className="text-xs font-heading font-bold text-white">
                          Atendimento Direto no 1x1
                        </div>
                        <div className="text-[10px] font-mono text-[#00FF66]">
                          Taxa de Conversão +340%
                        </div>
                      </div>
                    </div>

                    <a
                      href="#portfolio"
                      className="text-[11px] font-mono text-neutral-300 hover:text-white flex items-center gap-1 border-l border-[#2e2e2e] pl-3 py-1"
                    >
                      <span>Ver Case</span>
                      <ExternalLink className="w-3 h-3 text-[#00FF66]" />
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
