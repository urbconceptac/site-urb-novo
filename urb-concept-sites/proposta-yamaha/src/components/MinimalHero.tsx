import React from 'react';
import { PROPOSAL_DETAILS } from '../data/spotsData';

export const MinimalHero: React.FC = () => {
  return (
    <section id="hero" className="relative py-20 sm:py-28 border-b border-white/10 overflow-hidden bg-[#0c0d10]">
      {/* Background Studio Microphone Image: B&W tone-on-tone with 40% opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/studio_microphone_classic.jpg"
          alt="Studio Microphone"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-90 opacity-40 mix-blend-screen scale-105"
        />
        {/* Subtle radial & linear gradients for elegant tone-on-tone atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d10]/80 via-[#0c0d10]/60 to-[#0c0d10]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0c0d10_90%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-10">
        {/* Clean Category / Client Tag */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full border border-white/15 bg-black/60 backdrop-blur-md text-[11px] font-mono tracking-widest uppercase">
          <span className="text-zinc-400">Proposta Comercial de Áudio</span>
          <span className="text-zinc-600">•</span>
          <span className="text-white font-bold">
            Cruzeiro Motors <span className="text-[#e60012]">Yamaha</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="text-zinc-400 hidden sm:inline font-mono">
            {PROPOSAL_DETAILS.campaignName}
          </span>
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Criação & Produção de <br className="hidden sm:inline" />
            <span className="text-[#e60012]">6 Textos de Áudio</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            5 spots de 30 segundos e 1 spot master de 1 minuto. Material produzido em estúdio profissional, pronto para rodar durante todo o mês no rádio e em todas as mídias da sua loja.
          </p>
        </div>

        {/* 3 Key Metric Blocks - Minimalist Monochrome Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
          <div className="bg-[#111318]/80 backdrop-blur-sm border border-white/10 p-5 rounded-2xl space-y-1 shadow-lg">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Volume</span>
            <p className="text-xl font-bold text-white">6 Roteiros Inéditos</p>
            <p className="text-xs text-zinc-400">5 de 30 segundos + 1 Master de 60 segundos.</p>
          </div>

          <div className="bg-[#111318]/80 backdrop-blur-sm border border-white/10 p-5 rounded-2xl space-y-1 shadow-lg">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Uso & Mídias</span>
            <p className="text-xl font-bold text-white">100% Livre</p>
            <p className="text-xs text-zinc-400">Rádio, carros de som, Instagram, TikTok e loja.</p>
          </div>

          <div className="bg-[#111318]/80 backdrop-blur-sm border border-white/10 p-5 rounded-2xl space-y-1 shadow-lg">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Investimento</span>
            <p className="text-xl font-bold text-[#e60012]">{PROPOSAL_DETAILS.investmentValue}</p>
            <p className="text-xs text-zinc-400">Pacote completo com texto, voz e masterização.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
