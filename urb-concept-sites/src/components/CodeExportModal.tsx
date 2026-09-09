import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>URB Concept — Engenharia de Conversão Local</title>
  <meta name="description" content="Estrutura digital completa para negócios locais transformarem buscas no Google em clientes reais no WhatsApp 1x1.">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS via CDN (v3) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            urb: {
              black: '#080808',
              surface: '#121212',
              surfaceHover: '#181818',
              border: '#222222',
              neon: '#00FF66',
              neonHover: '#00e65c',
              muted: '#A1A1AA',
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Space Grotesk', 'sans-serif'],
          }
        }
      }
    }
  </script>
  
  <style>
    body {
      background-color: #080808;
      color: #FFFFFF;
      font-family: 'Inter', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, .font-heading {
      font-family: 'Space Grotesk', sans-serif;
    }
    .neon-pulse {
      animation: neonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes neonPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(0, 255, 102, 0.6); }
      50% { box-shadow: 0 0 0 12px rgba(0, 255, 102, 0); }
    }
  </style>
</head>
<body class="bg-[#080808] text-white selection:bg-[#00FF66] selection:text-black antialiased relative">

  <!-- NAVBAR -->
  <header class="fixed top-0 left-0 w-full z-50 bg-[#080808]/90 backdrop-blur-md border-b border-[#222222]/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2.5">
        <div class="bg-[#00FF66] text-black font-heading font-extrabold px-2.5 py-1 text-sm tracking-tighter rounded-sm shadow-[0_0_15px_rgba(0,255,102,0.4)]">
          URB
        </div>
        <span class="font-heading font-bold text-lg tracking-wider text-white">CONCEPT</span>
      </a>

      <nav class="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-[#A1A1AA]">
        <a href="#problema" class="hover:text-[#00FF66] transition-colors">01. O Problema</a>
        <a href="#capacidades" class="hover:text-[#00FF66] transition-colors">02. Capacidades</a>
        <a href="#processo" class="hover:text-[#00FF66] transition-colors">03. Processo</a>
        <a href="#investimento" class="hover:text-[#00FF66] transition-colors">04. Investimento</a>
        <a href="#faq" class="hover:text-[#00FF66] transition-colors">05. FAQ</a>
      </nav>

      <a href="https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20URB%20Concept%20e%20quero%20um%20site%20para%20o%20meu%20neg%C3%B3cio." 
         target="_blank" 
         class="inline-flex items-center gap-2 bg-[#00FF66] hover:bg-[#00e65c] text-black font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all shadow-[0_0_20px_rgba(0,255,102,0.35)]">
        Falar no WhatsApp
      </a>
    </div>
  </header>

  <!-- HERO -->
  <section class="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#222222]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-[#222222] text-[11px] font-mono text-[#00FF66] uppercase">
            <span class="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
            URB CONCEPT // ENGENHARIA DE CONVERSÃO LOCAL
          </div>
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
            Transforme buscas no Google em clientes reais conversando no seu <span class="text-[#00FF66]">WhatsApp</span> todos os dias.
          </h1>
          <p class="text-base sm:text-lg text-[#A1A1AA] max-w-2xl leading-relaxed">
            Criamos a estrutura digital completa para o seu negócio local transparecer autoridade imediata, dominar sua região e levar o cliente do Google direto para o seu atendimento no 1x1.
          </p>
          <div class="pt-2 flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20URB%20Concept%20e%20quero%20um%20site%20para%20o%20meu%20neg%C3%B3cio." 
               target="_blank" 
               class="inline-flex justify-center items-center gap-2 bg-[#00FF66] text-black font-heading font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-sm shadow-[0_0_25px_rgba(0,255,102,0.4)]">
              Falar no WhatsApp Agora
            </a>
            <a href="#processo" class="inline-flex justify-center items-center bg-[#121212] text-white border border-[#222222] font-heading font-semibold text-sm tracking-wider uppercase px-7 py-4 rounded-sm">
              Ver Como Funciona
            </a>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="bg-[#121212] border border-[#222222] rounded-xl p-6 shadow-2xl space-y-4">
            <div class="flex items-center justify-between border-b border-[#222222] pb-3 text-xs font-mono">
              <span class="text-white flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> Google para WhatsApp 1x1</span>
              <span class="text-[#00FF66]">+340% Conversão</span>
            </div>
            <div class="bg-[#181818] p-4 rounded-lg border border-[#222222] space-y-2">
              <div class="text-[10px] text-[#A1A1AA] font-mono">NOVA CONVERSA INICIADA (GOOGLE MAPS)</div>
              <div class="text-xs text-neutral-200 border-l-2 border-[#00FF66] pl-2.5">
                "Olá! Vi a autoridade da sua empresa no Google e quero um orçamento hoje."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 01. O PROBLEMA -->
  <section id="problema" class="py-24 border-b border-[#222222]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <div class="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">01. O PROBLEMA</div>
        <h2 class="text-2xl sm:text-4xl font-heading font-bold text-white">Por que a maioria dos sites locais não vende nada?</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8">
          <div class="w-10 h-10 rounded bg-red-500/10 text-red-400 flex items-center justify-center font-mono font-bold mb-4">01</div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">A 'Armadilha do Cartão Virtual'</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">Sites lentos e genéricos que parecem criados em 2010 e não passam confiança.</p>
        </div>
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8">
          <div class="w-10 h-10 rounded bg-red-500/10 text-red-400 flex items-center justify-center font-mono font-bold mb-4">02</div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Falta de Direcionamento</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">O cliente entra, não acha o botão de contato rápido e fecha a página em 5 segundos.</p>
        </div>
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8">
          <div class="w-10 h-10 rounded bg-red-500/10 text-red-400 flex items-center justify-center font-mono font-bold mb-4">03</div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Refém de Agências</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">Meses de espera para criar um site e cobrança de mensalidades abusivas para alterar um telefone.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 02. CAPACIDADES -->
  <section id="capacidades" class="py-24 border-b border-[#222222] bg-[#0a0a0a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <div class="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">02. CAPACIDADES</div>
        <h2 class="text-2xl sm:text-4xl font-heading font-bold text-white">Projetado exclusivamente para gerar conversas de venda</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-6">
          <h3 class="text-base font-heading font-bold text-white mb-2 text-[#00FF66]">Aceleração para o WhatsApp</h3>
          <p class="text-xs text-[#A1A1AA]">Cada bloco da página conduz o visitante a clicar e iniciar um diálogo direto no 1x1.</p>
        </div>
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-6">
          <h3 class="text-base font-heading font-bold text-white mb-2 text-[#00FF66]">Design de Alto Impacto</h3>
          <p class="text-xs text-[#A1A1AA]">Visual refinado para posicionar sua empresa como a opção número 1 da sua cidade.</p>
        </div>
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-6">
          <h3 class="text-base font-heading font-bold text-white mb-2 text-[#00FF66]">Entrega em Tempo Recorde</h3>
          <p class="text-xs text-[#A1A1AA]">Seu projeto pronto e no ar em poucos dias (3 a 5 dias úteis), pronto para rodar.</p>
        </div>
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-6">
          <h3 class="text-base font-heading font-bold text-white mb-2 text-[#00FF66]">Autonomia Total</h3>
          <p class="text-xs text-[#A1A1AA]">Sem mensalidades surpresa. O site é 100% seu e você altera textos e fotos em minutos.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 03. PROCESSO -->
  <section id="processo" class="py-24 border-b border-[#222222]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <div class="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">03. PROCESSO</div>
        <h2 class="text-2xl sm:text-4xl font-heading font-bold text-white">Processo transparente em 3 passos</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8">
          <div class="text-3xl font-heading font-bold text-[#00FF66] mb-3">01</div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Alinhamento Rápido</h3>
          <p class="text-xs text-[#A1A1AA]">Coletamos as informações do seu negócio em um formulário simples de 5 minutos.</p>
        </div>
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8">
          <div class="text-3xl font-heading font-bold text-[#00FF66] mb-3">02</div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Construção & Ajustes</h3>
          <p class="text-xs text-[#A1A1AA]">Criamos a estrutura visual focada no seu público local e apresentamos para você.</p>
        </div>
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8">
          <div class="text-3xl font-heading font-bold text-[#00FF66] mb-3">03</div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Publicação & Chave na Mão</h3>
          <p class="text-xs text-[#A1A1AA]">Colocamos seu site no ar integrado ao Google e enviamos um vídeo de 3 minutos ensinando tudo.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 04. INVESTIMENTO -->
  <section id="investimento" class="py-24 border-b border-[#222222] bg-[#0a0a0a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <div class="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">04. INVESTIMENTO</div>
        <h2 class="text-2xl sm:text-4xl font-heading font-bold text-white">Tabela de Pacotes & Transparência</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Essencial -->
        <div class="bg-[#121212] border border-[#222222] rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-heading font-bold text-white mb-1">Pacote Essencial</h3>
            <div class="text-3xl font-heading font-extrabold text-white my-4">R$ 970</div>
            <p class="text-xs text-[#A1A1AA] mb-6">Ideal para autônomos e pequenos prestadores de serviços.</p>
          </div>
          <a href="https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Pacote%20Essencial." class="w-full text-center bg-[#181818] hover:bg-[#222] text-white py-3 rounded text-xs font-bold uppercase">Escolher Essencial</a>
        </div>
        <!-- Performance -->
        <div class="bg-[#121212] border-2 border-[#00FF66] rounded-xl p-8 flex flex-col justify-between shadow-[0_0_35px_rgba(0,255,102,0.2)]">
          <div>
            <div class="text-[#00FF66] text-xs font-mono font-bold uppercase tracking-widest mb-1">MAIS RECOMENDADO</div>
            <h3 class="text-xl font-heading font-bold text-white mb-1">Pacote Performance</h3>
            <div class="text-3xl font-heading font-extrabold text-[#00FF66] my-4">R$ 1.870</div>
            <p class="text-xs text-[#A1A1AA] mb-6">Estrutura completa de autoridade local com otimização para Google Maps e botão flutuante.</p>
          </div>
          <a href="https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Quero%20o%20Pacote%20Performance." class="w-full text-center bg-[#00FF66] text-black py-3 rounded text-xs font-bold uppercase">Garantir Performance</a>
        </div>
        <!-- Dominância -->
        <div class="bg-[#121212] border border-[#222222] rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-heading font-bold text-white mb-1">Pacote Dominância</h3>
            <div class="text-3xl font-heading font-extrabold text-white my-4">R$ 2.970</div>
            <p class="text-xs text-[#A1A1AA] mb-6">Para empresas que querem liderar o mercado regional com scripts 1x1 inclusos.</p>
          </div>
          <a href="https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Quero%20o%20Pacote%20Domin%C3%A2ncia." class="w-full text-center bg-[#181818] hover:bg-[#222] text-white py-3 rounded text-xs font-bold uppercase">Dominar Região</a>
        </div>
      </div>
    </div>
  </section>

  <!-- 05. FAQ -->
  <section id="faq" class="py-24 border-b border-[#222222]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">05. FAQ</div>
        <h2 class="text-3xl font-heading font-bold text-white">Dúvidas Frequentes</h2>
      </div>
      <div class="space-y-4">
        <details class="bg-[#121212] border border-[#222222] rounded-lg p-5">
          <summary class="font-heading font-semibold text-sm cursor-pointer text-white hover:text-[#00FF66]">Vou ter que pagar mensalidade?</summary>
          <p class="mt-3 text-xs text-[#A1A1AA] leading-relaxed">Não, o pagamento é único. O código é 100% seu sem custos recorrentes.</p>
        </details>
        <details class="bg-[#121212] border border-[#222222] rounded-lg p-5">
          <summary class="font-heading font-semibold text-sm cursor-pointer text-white hover:text-[#00FF66]">Como altero informações no site depois?</summary>
          <p class="mt-3 text-xs text-[#A1A1AA] leading-relaxed">Você recebe acesso total e um vídeo curto de 3 minutos ensinando a alterar textos e fotos.</p>
        </details>
        <details class="bg-[#121212] border border-[#222222] rounded-lg p-5">
          <summary class="font-heading font-semibold text-sm cursor-pointer text-white hover:text-[#00FF66]">Quanto tempo demora para ficar pronto?</summary>
          <p class="mt-3 text-xs text-[#A1A1AA] leading-relaxed">Entre 3 a 5 dias úteis após o envio dos dados no formulário de alinhamento.</p>
        </details>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="py-8 bg-[#080808] border-t border-[#222222] text-center text-xs font-mono text-[#71717A]">
    &copy; 2026 URB Concept. Arquitetura Zero Lock-in. Todos os direitos reservados.
  </footer>

  <!-- FLOATING WHATSAPP -->
  <aside class="fixed bottom-6 right-6 z-50">
    <a href="https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20URB%20Concept." 
       target="_blank" 
       class="neon-pulse inline-flex items-center gap-2 bg-[#00FF66] text-black font-heading font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-full shadow-[0_0_25px_rgba(0,255,102,0.5)]">
      Falar com Especialista
    </a>
  </aside>

</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadHtmlFile = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#121212] border border-[#222222] rounded-xl flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#0c0c0c]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66]">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-white">
                Código Autônomo Zero Lock-in (index.html)
              </h3>
              <p className="text-[11px] font-mono text-[#A1A1AA]">
                100% autônomo • Roda em qualquer navegador via file:// ou GitHub Pages
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-sm hover:bg-[#1a1a1a] transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="px-6 py-3 bg-[#181818] border-b border-[#222222] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-neutral-300">
            Arquivo Único: <span className="text-[#00FF66]">index.html</span> (com Tailwind CDN + Google Fonts)
          </span>

          <div className="flex items-center gap-2">
            <a
              href="/standalone.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#222] hover:bg-[#2a2a2a] text-xs font-mono text-white transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#00FF66]" />
              <span>Abrir standalone.html</span>
            </a>

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#00FF66] hover:bg-[#00e65c] text-black font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,102,0.3)]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Código</span>
                </>
              )}
            </button>

            <button
              onClick={downloadHtmlFile}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#222222] hover:bg-[#2e2e2e] text-white border border-[#333] text-xs font-mono transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#00FF66]" />
              <span>Baixar .html</span>
            </button>
          </div>
        </div>

        {/* Code View Body */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-neutral-300 bg-[#080808] leading-relaxed select-all">
          <pre className="whitespace-pre-wrap">{standaloneHtmlCode}</pre>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-[#222222] bg-[#0c0c0c] text-[11px] font-mono text-neutral-400 flex items-center justify-between">
          <span>Compatibilidade: Chrome, Safari, Edge, Firefox, cPanel, Vercel, Netlify.</span>
          <button onClick={onClose} className="text-[#00FF66] hover:underline">
            Fechar Janela
          </button>
        </div>

      </div>
    </div>
  );
};
