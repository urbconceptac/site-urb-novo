import React from 'react';
import { ExternalLink, CheckCircle2, ArrowRight, Sparkles, TrendingUp, Zap, Shield } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data';

interface PortfolioSectionProps {
  whatsappNumber: string;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ whatsappNumber }) => {
  const featuredProject = PORTFOLIO_PROJECTS.find((p) => p.featured) || PORTFOLIO_PROJECTS[0];
  const otherProjects = PORTFOLIO_PROJECTS.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="py-24 border-b border-[#222222] bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#00FF66]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-[#00FF66]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>03. PORTFÓLIO & CASOS REAIS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
            Projetos de Alto Impacto & Autoridade Local
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed">
            Veja na prática como transformamos negócios locais em referências inquestionáveis de seus segmentos através de design aspiracional, carregamento instantâneo e foco absoluto em conversão no WhatsApp.
          </p>
        </div>

        {/* Featured Case: URB Concept Flagship */}
        {featuredProject && (
          <div className="mb-16 bg-[#121212] border-2 border-[#00FF66]/60 rounded-2xl p-6 sm:p-10 shadow-[0_0_40px_rgba(0,255,102,0.15)] relative group hover:border-[#00FF66] transition-all">
            
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#222222]">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded bg-[#00FF66] text-black text-[11px] font-heading font-extrabold uppercase tracking-wider">
                  CASE OFICIAL
                </span>
                <span className="text-xs font-mono text-neutral-300">
                  {featuredProject.category}
                </span>
              </div>

              <a
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00FF66] hover:text-white transition-colors bg-[#181818] hover:bg-[#222] border border-[#2e2e2e] px-3.5 py-1.5 rounded"
              >
                <span>Acessar Site: urbconcept.com.br</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
              
              {/* Left Column: Image Preview with Realistic Glass Frame */}
              <div className="lg:col-span-7">
                <div className="relative rounded-xl overflow-hidden border border-[#2a2a2a] shadow-2xl bg-[#080808] group/img">
                  
                  {/* Browser Bar */}
                  <div className="px-4 py-2.5 bg-[#0e0e0e] border-b border-[#222222] flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="text-[11px] text-neutral-400">https://www.urbconcept.com.br/</span>
                    <span className="text-[#00FF66] text-[10px] uppercase font-bold">ONLINE</span>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                    {/* Tag overlays */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {featuredProject.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Project Details & Metrics */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Key Results */}
                <div className="space-y-3 bg-[#181818] p-5 rounded-xl border border-[#222222]">
                  <div className="text-xs font-mono text-neutral-300 uppercase tracking-wider font-semibold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#00FF66]" />
                    <span>Resultados da Estrutura</span>
                  </div>
                  <div className="space-y-2">
                    {featuredProject.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={featuredProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center gap-2 bg-[#181818] hover:bg-[#252525] text-white border border-[#333] hover:border-[#00FF66]/50 px-5 py-3 rounded text-xs font-mono transition-colors"
                  >
                    <span>Ver Projeto no Ar</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#00FF66]" />
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      'Olá! Vi o case da URB Concept (urbconcept.com.br) e quero uma estrutura nesse nível para minha empresa.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center gap-2 bg-[#00FF66] hover:bg-[#00e65c] text-black font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)]"
                  >
                    <span>Quero um Site Assim</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Secondary Showcases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#121212] border border-[#222222] hover:border-[#00FF66]/40 rounded-xl p-6 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-4">
                
                {/* Project Image Preview */}
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-[#252525] bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#00FF66] uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-[#00FF66] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#181818] border border-[#222222] text-[10px] font-mono text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results Bullet Points */}
                <div className="pt-3 border-t border-[#1c1c1c] space-y-1.5">
                  {project.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF66] shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Olá! Gostei muito do padrão do projeto ${project.title} e quero um orçamento para minha empresa.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-[#181818] hover:bg-[#222222] text-white hover:text-[#00FF66] border border-[#2e2e2e] hover:border-[#00FF66]/50 py-3 rounded text-xs font-mono font-medium transition-all"
                >
                  <span>Solicitar Orçamento Deste Padrão</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
