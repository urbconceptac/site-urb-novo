import json

with open('logo_base64.txt') as f:
    logo_b64 = f.read().strip()

logo_data_uri = f"data:image/png;base64,{logo_b64}"

html_content = f"""<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>URB Concept — Engenharia de Conversão Digital</title>
  <meta name="description" content="Estrutura digital completa para negócios locais transformarem visitantes do Google e Redes Sociais em clientes no WhatsApp 1x1.">
  <meta property="og:title" content="URB Concept — Engenharia de Conversão Digital">
  <meta property="og:description" content="Estrutura digital completa para negócios locais transformarem visitantes do Google e Redes Sociais em clientes no WhatsApp 1x1.">

  <!-- GOOGLE FONTS: Space Grotesk (Títulos) & Inter (Corpo) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet">

  <!-- FONTAWESOME 6 ICONS VIA CDN OFICIAL -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!-- TAILWIND CSS VIA CDN OFICIAL (SEM INSTALAÇÃO, SEM BUILD) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {{
      darkMode: 'class',
      theme: {{
        extend: {{
          colors: {{
            urb: {{
              black: '#080808',
              surface: '#121212',
              surfaceHover: '#181818',
              border: '#222222',
              neon: '#00FF66',
              neonHover: '#00e65c',
              muted: '#A1A1AA',
            }}
          }},
          fontFamily: {{
            sans: ['Inter', 'sans-serif'],
            heading: ['Space Grotesk', 'sans-serif'],
          }}
        }}
      }}
    }}
  </script>

  <style>
    body {{
      background-color: #080808;
      color: #FFFFFF;
      font-family: 'Inter', sans-serif;
    }}
    h1, h2, h3, h4, h5, h6, .font-heading {{
      font-family: 'Space Grotesk', sans-serif;
    }}
    .neon-glow {{
      box-shadow: 0 0 25px rgba(0, 255, 102, 0.4);
    }}
    .neon-glow:hover {{
      box-shadow: 0 0 35px rgba(0, 255, 102, 0.65);
    }}
    .neon-pulse {{
      animation: neonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }}
    @keyframes neonPulse {{
      0%, 100% {{
        box-shadow: 0 0 0 0 rgba(0, 255, 102, 0.6);
      }}
      50% {{
        box-shadow: 0 0 0 14px rgba(0, 255, 102, 0);
      }}
    }}
    ::-webkit-scrollbar {{
      width: 8px;
    }}
    ::-webkit-scrollbar-track {{
      background: #080808;
    }}
    ::-webkit-scrollbar-thumb {{
      background: #222222;
      border-radius: 4px;
    }}
    ::-webkit-scrollbar-thumb:hover {{
      background: #00FF66;
    }}
  </style>
</head>
<body class="bg-[#080808] text-white selection:bg-[#00FF66] selection:text-black antialiased">

  <!-- ========================================================================= -->
  <!-- 1. CABEÇALHO FIXO / NAVBAR                                                -->
  <!-- ========================================================================= -->
  <header class="fixed top-0 left-0 w-full z-50 bg-[#080808]/92 backdrop-blur-md border-b border-[#222222]/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <!-- =================================================================== -->
      <!-- [IMAGEM 1: LOGOMARCA OFICIAL - CABEÇALHO]                           -->
      <!-- ONDE SUBSTITUIR: Troque o valor de src="" abaixo pelo Base64 ou    -->
      <!-- pelo caminho/URL da sua nova imagem.                                -->
      <!-- =================================================================== -->
      <a href="https://www.urbconcept.com.br/" target="_blank" rel="noopener noreferrer" class="flex items-center group py-1" title="Visitar site principal: www.urbconcept.com.br">
        <img
          src="{logo_data_uri}"
          alt="URB Concept"
          class="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      <!-- Links de Navegação (Desktop) -->
      <nav class="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
        <a href="#problema" class="hover:text-[#00FF66] transition-colors">01. Problema</a>
        <a href="#capacidades" class="hover:text-[#00FF66] transition-colors">02. Capacidades</a>
        <a href="#portfolio" class="hover:text-[#00FF66] transition-colors">03. Portfólio</a>
        <a href="#processo" class="hover:text-[#00FF66] transition-colors">04. Processo</a>
        <a href="#investimento" class="hover:text-[#00FF66] transition-colors">05. Investimento</a>
        <a href="#faq" class="hover:text-[#00FF66] transition-colors">06. FAQ</a>
      </nav>

      <!-- CTA WhatsApp Cabeçalho -->
      <div class="flex items-center gap-4">
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20URB%20Concept%20e%20quero%20um%20site%20de%20alta%20convers%C3%A3o%20para%20o%20meu%20neg%C3%B3cio%20local."
          target="_blank"
          rel="noopener noreferrer"
          class="relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#00FF66] text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#00e65c] transition-all transform hover:scale-[1.02]"
        >
          <i class="fa-brands fa-whatsapp text-base"></i>
          <span>Falar no WhatsApp</span>
        </a>
      </div>

    </div>
  </header>

  <!-- ========================================================================= -->
  <!-- 2. HERO SECTION                                                           -->
  <!-- ========================================================================= -->
  <section class="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden border-b border-[#222222]">
    <!-- Background Radial Glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00FF66]/10 blur-[150px] pointer-events-none rounded-full"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        <!-- Coluna Esquerda: Textos Originais do Hero -->
        <div class="lg:col-span-6 text-left space-y-6">
          
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#222222] text-[11px] font-mono tracking-widest text-[#00FF66] uppercase">
            <span class="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
            ENGENHARIA DE CONVERSÃO // URB CONCEPT
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-[54px] font-heading font-extrabold tracking-tight text-white leading-[1.12]">
            Transforme cliques do Google e Redes Sociais em clientes no seu{' '}
            <span class="text-[#00FF66] underline decoration-[#00FF66]/40 underline-offset-8">
              WhatsApp
            </span>.
          </h1>

          <p class="text-base sm:text-lg text-[#A1A1AA] max-w-xl leading-relaxed">
            Criamos a estrutura digital definitiva para o seu negócio local: autoridade visual inquestionável, carregamento em menos de 2 segundos e direcionamento direto para o fechamento 1x1.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20URB%20Concept%20e%20quero%20um%20site%20de%20alta%20convers%C3%A3o%20para%20o%20meu%20neg%C3%B3cio%20local."
              target="_blank"
              rel="noopener noreferrer"
              class="neon-pulse inline-flex justify-center items-center gap-2.5 bg-[#00FF66] hover:bg-[#00e65c] text-black font-heading font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)] hover:shadow-[0_0_35px_rgba(0,255,102,0.65)] hover:-translate-y-0.5"
            >
              <span>Falar no WhatsApp Agora</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>

            <a
              href="#portfolio"
              class="inline-flex justify-center items-center gap-2 bg-[#121212] hover:bg-[#181818] text-white border border-[#222222] hover:border-[#00FF66]/50 font-heading font-semibold text-sm tracking-wider uppercase px-7 py-4 rounded-sm transition-colors"
            >
              <span>Ver Casos de Sucesso</span>
            </a>
          </div>

          <!-- Micro Garantias -->
          <div class="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A1A1AA] font-mono">
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-circle-check text-[#00FF66]"></i>
              <span>Sem mensalidades</span>
            </div>
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-bolt text-[#00FF66]"></i>
              <span>No ar em 3 a 5 dias úteis</span>
            </div>
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-shield-halved text-[#00FF66]"></i>
              <span>100% de autonomia</span>
            </div>
          </div>

        </div>

        <!-- Coluna Direita: Showcase de Dispositivo -->
        <div class="lg:col-span-6">
          <div class="relative group">
            
            <div class="absolute -inset-1 bg-gradient-to-r from-[#00FF66]/30 via-transparent to-[#00FF66]/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div class="relative rounded-xl bg-[#121212] border border-[#2a2a2a] p-2.5 shadow-2xl overflow-hidden">
              
              <div class="flex items-center justify-between px-3 py-2 bg-[#0c0c0c] rounded-t-lg border-b border-[#222222] text-xs font-mono">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#333]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#333]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#333]"></span>
                </div>
                
                <div class="flex items-center gap-2 px-3 py-0.5 rounded bg-[#181818] border border-[#282828] text-[#A1A1AA] text-[11px]">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse"></span>
                  <span class="text-neutral-200">urbconcept.com.br</span>
                </div>

                <div class="text-[10px] text-[#00FF66] uppercase font-bold tracking-wider">
                  PRODUÇÃO 1X1
                </div>
              </div>

              <!-- =================================================================== -->
              <!-- [IMAGEM 2: SHOWCASE / MOCKUP DO HERO]                               -->
              <!-- ONDE SUBSTITUIR: Troque a URL de src="" abaixo pela sua imagem.     -->
              <!-- =================================================================== -->
              <div class="relative aspect-[16/10] overflow-hidden rounded-b-lg bg-[#080808]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Demonstração visual de estrutura digital aspiracional URB Concept"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                <!-- Floating Metric Pill 1 -->
                <div class="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[#00FF66]/40 px-3.5 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,255,102,0.3)] flex items-center gap-2">
                  <i class="fa-solid fa-sparkles text-[#00FF66] text-xs"></i>
                  <span class="text-[11px] font-mono text-white font-semibold">
                    Google + Instagram + Tráfego
                  </span>
                </div>

                <!-- Floating Pill 2 -->
                <div class="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#121212]/90 backdrop-blur-md border border-[#2e2e2e] p-3 rounded-lg shadow-xl flex items-center justify-between sm:justify-start gap-4">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full bg-[#00FF66]/20 border border-[#00FF66] flex items-center justify-center text-[#00FF66]">
                      <i class="fa-solid fa-comments text-xs"></i>
                    </div>
                    <div>
                      <div class="text-xs font-heading font-bold text-white">
                        Atendimento Direto no 1x1
                      </div>
                      <div class="text-[10px] font-mono text-[#00FF66]">
                        Taxa de Conversão +340%
                      </div>
                    </div>
                  </div>

                  <a
                    href="#portfolio"
                    class="text-[11px] font-mono text-neutral-300 hover:text-white flex items-center gap-1 border-l border-[#2e2e2e] pl-3 py-1"
                  >
                    <span>Ver Case</span>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-[#00FF66]"></i>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 3. SEÇÃO 01: O PROBLEMA                                                   -->
  <!-- ========================================================================= -->
  <section id="problema" class="py-24 border-b border-[#222222] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-16 text-left">
        <div class="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">
          01. O PROBLEMA
        </div>
        <h2 class="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
          Por que a maioria dos sites locais não vende nada?
        </h2>
        <p class="mt-4 text-[#A1A1AA] text-base leading-relaxed">
          Ter apenas um endereço na internet não garante vendas. Se a sua página não foi construída com engenharia de conversão imediata, você está jogando dinheiro fora e entregando clientes prontos para fechar nas mãos da concorrência.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Card 1 -->
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8 hover:border-red-500/40 transition-colors relative group">
          <div class="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-credit-card text-2xl"></i>
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
            A 'Armadilha do Cartão Virtual'
          </h3>
          <p class="text-sm text-[#A1A1AA] leading-relaxed">
            Sites lentos, pesados e genéricos que parecem criados em 2010. Não transmitem solidez nem autoridade ao visitante que pesquisa pelo celular antes de decidir onde gastar o próprio dinheiro.
          </p>
          <div class="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center gap-2 text-xs font-mono text-red-400/80">
            <i class="fa-solid fa-circle-exclamation text-xs"></i>
            <span>Gera desconfiança imediata</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8 hover:border-red-500/40 transition-colors relative group">
          <div class="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-arrow-pointer text-2xl"></i>
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
            Falta de Direcionamento Imediato
          </h3>
          <p class="text-sm text-[#A1A1AA] leading-relaxed">
            O cliente local entra com pressa pelo Google ou Instagram, não encontra um botão de WhatsApp claro em 3 segundos, se frustra com formulários frios e fecha a aba para chamar o concorrente.
          </p>
          <div class="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center gap-2 text-xs font-mono text-red-400/80">
            <i class="fa-regular fa-clock text-xs"></i>
            <span>Abandono em menos de 5 segundos</span>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8 hover:border-red-500/40 transition-colors relative group">
          <div class="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-lock text-2xl"></i>
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
            Refém de Agências Tradicionais
          </h3>
          <p class="text-sm text-[#A1A1AA] leading-relaxed">
            Meses de espera burocrática para colocar um site simples no ar e cobrança de mensalidades abusivas só para alterar um número de telefone ou atualizar o endereço físico da sua empresa.
          </p>
          <div class="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center gap-2 text-xs font-mono text-red-400/80">
            <i class="fa-solid fa-shield-virus text-xs"></i>
            <span>Custos recorrentes sem retorno real</span>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 4. SEÇÃO 02: CAPACIDADES                                                  -->
  <!-- ========================================================================= -->
  <section id="capacidades" class="py-24 border-b border-[#222222] bg-[#0a0a0a] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-16 text-left">
        <div class="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">
          02. CAPACIDADES
        </div>
        <h2 class="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
          Projetado exclusivamente para gerar conversas de venda no 1x1
        </h2>
        <p class="mt-4 text-[#A1A1AA] text-base leading-relaxed">
          Eliminamos todo o ruído visual e os elementos que não trazem faturamento para concentrar 100% da atenção no canal de atendimento mais lucrativo do Brasil: o contato direto no WhatsApp.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-7 hover:border-[#00FF66]/50 transition-all group duration-300">
          <div class="w-12 h-12 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] mb-5 group-hover:scale-110 transition-transform">
            <i class="fa-brands fa-whatsapp text-2xl"></i>
          </div>
          <h3 class="text-lg font-heading font-bold text-white mb-2.5 group-hover:text-[#00FF66] transition-colors">
            Aceleração para o WhatsApp
          </h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">
            Cada bloco, gatilho e botão da página conduz o visitante a clicar e iniciar um diálogo direto com a sua equipe no 1x1, com mensagens pré-formatadas para facilitar a resposta.
          </p>
        </div>

        <div class="bg-[#121212] border border-[#222222] rounded-lg p-7 hover:border-[#00FF66]/50 transition-all group duration-300">
          <div class="w-12 h-12 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] mb-5 group-hover:scale-110 transition-transform">
            <i class="fa-solid fa-shield-halved text-2xl"></i>
          </div>
          <h3 class="text-lg font-heading font-bold text-white mb-2.5 group-hover:text-[#00FF66] transition-colors">
            Autoridade Visual Instantânea
          </h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">
            Visual escuro refinado, tipografia editorial moderna e acabamento de alto padrão para posicionar a sua empresa como a opção número 1 indiscutível da sua cidade e região.
          </p>
        </div>

        <div class="bg-[#121212] border border-[#222222] rounded-lg p-7 hover:border-[#00FF66]/50 transition-all group duration-300">
          <div class="w-12 h-12 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] mb-5 group-hover:scale-110 transition-transform">
            <i class="fa-solid fa-bolt text-2xl"></i>
          </div>
          <h3 class="text-lg font-heading font-bold text-white mb-2.5 group-hover:text-[#00FF66] transition-colors">
            Entrega em Tempo Recorde
          </h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">
            Seu projeto estruturado, revisado e colocado no ar em poucos dias úteis (3 a 5 dias), pronto para receber visitantes do Google e começar a gerar conversas imediatamente.
          </p>
        </div>

        <div class="bg-[#121212] border border-[#222222] rounded-lg p-7 hover:border-[#00FF66]/50 transition-all group duration-300">
          <div class="w-12 h-12 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] mb-5 group-hover:scale-110 transition-transform">
            <i class="fa-solid fa-key text-2xl"></i>
          </div>
          <h3 class="text-lg font-heading font-bold text-white mb-2.5 group-hover:text-[#00FF66] transition-colors">
            Autonomia Total (Zero Lock-in)
          </h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">
            Sem mensalidades surpresa nem contratos que prendem você a nós. O site é 100% seu. Você tem liberdade e autonomia para alterar textos, fotos e telefones quando quiser.
          </p>
        </div>

      </div>

    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 5. SEÇÃO 03: PORTFÓLIO                                                    -->
  <!-- ========================================================================= -->
  <section id="portfolio" class="py-24 border-b border-[#222222] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div class="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">
            03. PORTFÓLIO
          </div>
          <h2 class="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
            Casos reais de alta conversão entregues
          </h2>
          <p class="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            Estruturas digitais em operação gerando solicitações de orçamento e agendamentos diretos todos os dias.
          </p>
        </div>
        <div class="mt-4 md:mt-0 text-xs font-mono text-[#00FF66]">
          Clique no card para abrir os detalhes
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- ================================================================= -->
        <!-- [IMAGEM 3: CASE 1 - URB CONCEPT ARQUITETURA]                     -->
        <!-- ONDE SUBSTITUIR: Troque a URL de src="" abaixo pela sua imagem.   -->
        <!-- ================================================================= -->
        <div class="bg-[#121212] border border-[#222222] rounded-xl overflow-hidden group hover:border-[#00FF66]/50 transition-all flex flex-col justify-between">
          <div>
            <div class="aspect-[16/10] overflow-hidden bg-[#080808] relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="URB Concept — Arquitetura, Interiores & Construções"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono text-white border border-white/10">
                Arquitetura & Engenharia
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-lg font-heading font-bold text-white mb-2 group-hover:text-[#00FF66] transition-colors">
                URB Concept — Arquitetura, Interiores & Construções
              </h3>
              <p class="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                Estúdio de arquitetura contemporânea e obras de alto padrão. Estrutura digital imersiva desenvolvida para posicionar autoridade imediata e receber clientes qualificados para projetos residenciais e comerciais.
              </p>

              <div class="space-y-1.5 pt-3 border-t border-[#1c1c1c] text-xs font-mono text-[#00FF66]">
                <div>• +340% em contatos qualificados via WhatsApp</div>
                <div>• Tempo de carregamento &lt; 1.0s (Score 98 no Google)</div>
                <div>• 100% de autonomia e zero taxas de mensalidade</div>
              </div>
            </div>
          </div>

          <div class="p-6 pt-0">
            <a
              href="https://www.urbconcept.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded bg-[#181818] hover:bg-[#222222] text-white text-xs font-mono border border-[#2a2a2a] hover:border-[#00FF66]/40 transition-colors"
            >
              <span>Visitar Site Oficial</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[11px] text-[#00FF66]"></i>
            </a>
          </div>
        </div>

        <!-- ================================================================= -->
        <!-- [IMAGEM 4: CASE 2 - CLÍNICA LUMINA]                              -->
        <!-- ONDE SUBSTITUIR: Troque a URL de src="" abaixo pela sua imagem.   -->
        <!-- ================================================================= -->
        <div class="bg-[#121212] border border-[#222222] rounded-xl overflow-hidden group hover:border-[#00FF66]/50 transition-all flex flex-col justify-between">
          <div>
            <div class="aspect-[16/10] overflow-hidden bg-[#080808] relative">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                alt="Clínica Lumina — Dermatologia & Estética Avançada"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono text-white border border-white/10">
                Saúde & Estética Local
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-lg font-heading font-bold text-white mb-2 group-hover:text-[#00FF66] transition-colors">
                Clínica Lumina — Dermatologia & Estética Avançada
              </h3>
              <p class="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                Ambiente digital minimalista e sofisticado para clínica médica de luxo. Focado em transformar seguidores do Instagram e buscas locais em agendamentos diretos de consultas no WhatsApp.
              </p>

              <div class="space-y-1.5 pt-3 border-t border-[#1c1c1c] text-xs font-mono text-[#00FF66]">
                <div>• 2.8x mais agendamentos semanais</div>
                <div>• Zero abandono por formulários complexos</div>
                <div>• Botão inteligente integrado de triagem WhatsApp</div>
              </div>
            </div>
          </div>

          <div class="p-6 pt-0">
            <a
              href="#investimento"
              class="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded bg-[#181818] hover:bg-[#222222] text-white text-xs font-mono border border-[#2a2a2a] hover:border-[#00FF66]/40 transition-colors"
            >
              <span>Ver Pacote Recomendado</span>
              <i class="fa-solid fa-arrow-right text-[11px] text-[#00FF66]"></i>
            </a>
          </div>
        </div>

        <!-- ================================================================= -->
        <!-- [IMAGEM 5: CASE 3 - VANGUARD ADVOCACIA]                          -->
        <!-- ONDE SUBSTITUIR: Troque a URL de src="" abaixo pela sua imagem.   -->
        <!-- ================================================================= -->
        <div class="bg-[#121212] border border-[#222222] rounded-xl overflow-hidden group hover:border-[#00FF66]/50 transition-all flex flex-col justify-between">
          <div>
            <div class="aspect-[16/10] overflow-hidden bg-[#080808] relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt="Vanguard — Advocacia Empresarial & Tributária"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono text-white border border-white/10">
                Direito & Consultoria Corporativa
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-lg font-heading font-bold text-white mb-2 group-hover:text-[#00FF66] transition-colors">
                Vanguard — Advocacia Empresarial & Tributária
              </h3>
              <p class="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                Posicionamento sóbrio e autoritário para captação de clientes jurídicos e empresariais. Design dark mode editorial com transmissão instantânea de solidez e sigilo.
              </p>

              <div class="space-y-1.5 pt-3 border-t border-[#1c1c1c] text-xs font-mono text-[#00FF66]">
                <div>• Captação ativa de contratos B2B</div>
                <div>• Presença institucional de prestígio regional</div>
                <div>• Entrega chave na mão em 4 dias úteis</div>
              </div>
            </div>
          </div>

          <div class="p-6 pt-0">
            <a
              href="#investimento"
              class="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded bg-[#181818] hover:bg-[#222222] text-white text-xs font-mono border border-[#2a2a2a] hover:border-[#00FF66]/40 transition-colors"
            >
              <span>Ver Pacote Recomendado</span>
              <i class="fa-solid fa-arrow-right text-[11px] text-[#00FF66]"></i>
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 6. SEÇÃO 04: PROCESSO                                                     -->
  <!-- ========================================================================= -->
  <section id="processo" class="py-24 border-b border-[#222222] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-16 text-left">
        <div class="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">
          04. PROCESSO
        </div>
        <h2 class="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
          Transparência absoluta do primeiro contato à entrega
        </h2>
        <p class="mt-4 text-[#A1A1AA] text-base leading-relaxed">
          Sem processos burocráticos. Você foca em atender seus clientes enquanto construímos a máquina de atração digital do seu negócio.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8 relative hover:border-[#00FF66]/50 transition-all group">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-lg bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-comment-dots text-xl"></i>
              </div>
              <span class="text-2xl font-heading font-extrabold text-[#00FF66]">01</span>
            </div>
            <span class="text-xs font-mono text-[#A1A1AA] bg-[#181818] border border-[#222222] px-2.5 py-1 rounded">
              5 minutos
            </span>
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3 group-hover:text-[#00FF66] transition-colors">
            Alinhamento Rápido
          </h3>
          <p class="text-sm text-[#A1A1AA] leading-relaxed mb-6">
            Coletamos as informações essenciais do seu negócio, fotografias, serviços oferecidos e diferenciais locais através de um formulário simples e direto pelo WhatsApp.
          </p>
          <div class="pt-4 border-t border-[#1a1a1a] flex items-center gap-2 text-xs font-mono text-neutral-300">
            <i class="fa-solid fa-check text-[#00FF66]"></i>
            <span>Sem reuniões cansativas ou termos técnicos</span>
          </div>
        </div>

        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8 relative hover:border-[#00FF66]/50 transition-all group">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-lg bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-sliders text-xl"></i>
              </div>
              <span class="text-2xl font-heading font-extrabold text-[#00FF66]">02</span>
            </div>
            <span class="text-xs font-mono text-[#A1A1AA] bg-[#181818] border border-[#222222] px-2.5 py-1 rounded">
              2 a 3 dias úteis
            </span>
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3 group-hover:text-[#00FF66] transition-colors">
            Construção & Ajustes
          </h3>
          <p class="text-sm text-[#A1A1AA] leading-relaxed mb-6">
            Criamos a estrutura visual com foco cirúrgico no seu público local e apresentamos uma prévia funcional no celular para sua aprovação e refinamento imediato.
          </p>
          <div class="pt-4 border-t border-[#1a1a1a] flex items-center gap-2 text-xs font-mono text-neutral-300">
            <i class="fa-solid fa-check text-[#00FF66]"></i>
            <span>Engenharia de persuasão voltada para sua cidade</span>
          </div>
        </div>

        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8 relative hover:border-[#00FF66]/50 transition-all group">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-lg bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-rocket text-xl"></i>
              </div>
              <span class="text-2xl font-heading font-extrabold text-[#00FF66]">03</span>
            </div>
            <span class="text-xs font-mono text-[#A1A1AA] bg-[#181818] border border-[#222222] px-2.5 py-1 rounded">
              Chave na Mão
            </span>
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3 group-hover:text-[#00FF66] transition-colors">
            Publicação & Autonomia
          </h3>
          <p class="text-sm text-[#A1A1AA] leading-relaxed mb-6">
            Colocamos seu site no ar integrado ao Google e enviamos um vídeo prático de 3 minutos ensinando com clareza como atualizar qualquer informação sem depender de ninguém.
          </p>
          <div class="pt-4 border-t border-[#1a1a1a] flex items-center gap-2 text-xs font-mono text-neutral-300">
            <i class="fa-solid fa-check text-[#00FF66]"></i>
            <span>Acesso total e autonomia garantida desde o dia 1</span>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 7. SEÇÃO 05: INVESTIMENTO (3 PACOTES REAIS)                               -->
  <!-- ========================================================================= -->
  <section id="investimento" class="py-24 border-b border-[#222222] bg-[#0a0a0a] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-16 text-left">
        <div class="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">
          05. INVESTIMENTO
        </div>
        <h2 class="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
          Transparência total. Sem mensalidades ou letras miúdas.
        </h2>
        <p class="mt-4 text-[#A1A1AA] text-base leading-relaxed">
          Pagamento único. Você se torna dono definitivo de toda a sua estrutura digital sem ficar preso a contratos de manutenção da nossa agência.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        <!-- PACOTE 1: ESSENCIAL -->
        <div class="bg-[#121212] rounded-xl p-8 flex flex-col justify-between relative transition-all duration-300 border border-[#222222] hover:border-[#333333]">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider mb-2 text-[#A1A1AA]">
              Início Rápido
            </div>
            <h3 class="text-2xl font-heading font-bold text-white mb-2">
              Pacote Essencial
            </h3>
            <p class="text-xs text-[#A1A1AA] mb-6 min-h-[36px] leading-relaxed">
              Ideal para autônomos, consultórios e pequenos prestadores de serviços locais.
            </p>

            <div class="mb-6 pb-6 border-b border-[#222222]">
              <div class="text-xs text-[#A1A1AA] font-mono">Pagamento Único</div>
              <div class="flex items-baseline gap-1 mt-1">
                <span class="text-sm text-[#A1A1AA]">R$</span>
                <span class="text-4xl font-heading font-extrabold text-white">970</span>
              </div>
            </div>

            <ul class="space-y-3.5 text-xs mb-8">
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Landing page de 1 página focada em conversão direta</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Botão integrado de WhatsApp com mensagem pré-formatada</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Design 100% responsivo otimizado para celulares</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Hospedagem configurada sem taxas recorrentes</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Vídeo tutorial de 3 minutos com autonomia total</span>
              </li>
            </ul>
          </div>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Pacote%20Essencial%20(R%24%20970)%20da%20URB%20Concept%20para%20estruturar%20meu%20site%20local."
            target="_blank"
            rel="noopener noreferrer"
            class="w-full flex items-center justify-center gap-2 font-heading font-bold text-xs uppercase tracking-wider py-4 rounded transition-all bg-[#181818] hover:bg-[#222222] text-white border border-[#222222] hover:border-[#444]"
          >
            <span>Escolher Essencial</span>
            <i class="fa-solid fa-arrow-right text-[11px]"></i>
          </a>
        </div>

        <!-- PACOTE 2: PERFORMANCE (DESTAQUE) -->
        <div class="bg-[#121212] rounded-xl p-8 flex flex-col justify-between relative transition-all duration-300 border-2 border-[#00FF66] shadow-[0_0_35px_rgba(0,255,102,0.25)] lg:-translate-y-2">
          
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00FF66] text-black font-heading font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1 rounded shadow-md flex items-center gap-1.5">
            <i class="fa-solid fa-sparkles text-[10px]"></i>
            <span>MAIS RECOMENDADO</span>
          </div>

          <div>
            <div class="text-xs font-mono uppercase tracking-wider mb-2 text-[#00FF66]">
              Máxima Conversão
            </div>
            <h3 class="text-2xl font-heading font-bold text-white mb-2">
              Pacote Performance
            </h3>
            <p class="text-xs text-[#A1A1AA] mb-6 min-h-[36px] leading-relaxed">
              O mais vendido. Estrutura completa de autoridade local e otimização para Google Maps.
            </p>

            <div class="mb-6 pb-6 border-b border-[#222222]">
              <div class="text-xs text-[#A1A1AA] font-mono">Pagamento Único</div>
              <div class="flex items-baseline gap-1 mt-1">
                <span class="text-sm text-[#00FF66]">R$</span>
                <span class="text-4xl font-heading font-extrabold text-[#00FF66]">1.870</span>
              </div>
            </div>

            <ul class="space-y-3.5 text-xs mb-8">
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-white font-medium">Tudo incluso no Pacote Essencial</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Integração e Otimização para Google Maps & Meu Negócio</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Botão flutuante de WhatsApp com pulso de atenção</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Carregamento ultrarrápido (Score 90+ em celulares)</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Seção de Depoimentos & Prova Social regional</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Guia tático de atendimento persuasivo 1x1 no WhatsApp</span>
              </li>
            </ul>
          </div>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20o%20Pacote%20Performance%20(R%24%201.870)%20da%20URB%20Concept%20para%20dominar%20as%20buscas%20locais."
            target="_blank"
            rel="noopener noreferrer"
            class="neon-pulse w-full flex items-center justify-center gap-2 font-heading font-bold text-xs uppercase tracking-wider py-4 rounded transition-all bg-[#00FF66] hover:bg-[#00e65c] text-black shadow-[0_0_20px_rgba(0,255,102,0.4)] hover:shadow-[0_0_30px_rgba(0,255,102,0.65)]"
          >
            <span>Garantir Pacote Performance</span>
            <i class="fa-solid fa-arrow-right text-[11px]"></i>
          </a>
        </div>

        <!-- PACOTE 3: DOMINÂNCIA -->
        <div class="bg-[#121212] rounded-xl p-8 flex flex-col justify-between relative transition-all duration-300 border border-[#222222] hover:border-[#333333]">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider mb-2 text-[#A1A1AA]">
              Liderança Regional
            </div>
            <h3 class="text-2xl font-heading font-bold text-white mb-2">
              Pacote Dominância
            </h3>
            <p class="text-xs text-[#A1A1AA] mb-6 min-h-[36px] leading-relaxed">
              Para empresas que querem liderar o mercado regional e acelerar o fechamento de vendas.
            </p>

            <div class="mb-6 pb-6 border-b border-[#222222]">
              <div class="text-xs text-[#A1A1AA] font-mono">Pagamento Único</div>
              <div class="flex items-baseline gap-1 mt-1">
                <span class="text-sm text-[#A1A1AA]">R$</span>
                <span class="text-4xl font-heading font-extrabold text-white">2.970</span>
              </div>
            </div>

            <ul class="space-y-3.5 text-xs mb-8">
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-white font-medium">Tudo incluso no Pacote Performance</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Scripts e roteiros de atendimento persuasivo 1x1 para sua equipe</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Configuração avançada de rastreamento (Meta Pixel + GTM)</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">Copywriting focado em diferenciais contra concorrentes locais</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-check text-[#00FF66] text-xs mt-0.5"></i>
                <span class="text-[#A1A1AA]">30 dias de suporte prioritário direto com os fundadores</span>
              </li>
            </ul>
          </div>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20o%20Pacote%20Domin%C3%A2ncia%20(R%24%202.970)%20da%20URB%20Concept%20para%20liderar%20meu%20segmento%20na%20regi%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            class="w-full flex items-center justify-center gap-2 font-heading font-bold text-xs uppercase tracking-wider py-4 rounded transition-all bg-[#181818] hover:bg-[#222222] text-white border border-[#222222] hover:border-[#444]"
          >
            <span>Dominar Minha Região</span>
            <i class="fa-solid fa-arrow-right text-[11px]"></i>
          </a>
        </div>

      </div>

    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 8. SEÇÃO 06: FAQ                                                          -->
  <!-- ========================================================================= -->
  <section id="faq" class="py-24 border-b border-[#222222] relative">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-left mb-16">
        <div class="text-xs font-mono font-bold tracking-widest text-[#00FF66] uppercase mb-2">
          06. FAQ
        </div>
        <h2 class="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
          Perguntas Frequentes
        </h2>
        <p class="mt-4 text-[#A1A1AA] text-base leading-relaxed">
          Tire suas dúvidas antes de dar o próximo passo para acelerar suas vendas no WhatsApp.
        </p>
      </div>

      <div class="space-y-4">
        
        <div class="border border-[#222222] rounded-lg bg-[#121212] overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full p-6 text-left font-heading font-bold text-sm text-white flex justify-between items-center gap-4 hover:text-[#00FF66] transition-colors">
            <span>Vou ter que pagar mensalidade para manter o site no ar?</span>
            <i class="fa-solid fa-chevron-down text-xs text-[#A1A1AA] transition-transform duration-300"></i>
          </button>
          <div class="hidden px-6 pb-6 text-xs text-[#A1A1AA] leading-relaxed">
            Não! Diferente de agências tradicionais que cobram R$ 150 a R$ 500 por mês, na URB Concept você paga um valor único. O código é 100% seu e não existem mensalidades de manutenção obrigatórias.
          </div>
        </div>

        <div class="border border-[#222222] rounded-lg bg-[#121212] overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full p-6 text-left font-heading font-bold text-sm text-white flex justify-between items-center gap-4 hover:text-[#00FF66] transition-colors">
            <span>Como altero informações no site depois de pronto?</span>
            <i class="fa-solid fa-chevron-down text-xs text-[#A1A1AA] transition-transform duration-300"></i>
          </button>
          <div class="hidden px-6 pb-6 text-xs text-[#A1A1AA] leading-relaxed">
            Você tem total autonomia. Junto com a entrega do site, enviamos um vídeo direto e prático de 3 minutos ensinando como atualizar fotos, textos e números de WhatsApp em instantes, sem precisar de programador.
          </div>
        </div>

        <div class="border border-[#222222] rounded-lg bg-[#121212] overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full p-6 text-left font-heading font-bold text-sm text-white flex justify-between items-center gap-4 hover:text-[#00FF66] transition-colors">
            <span>Quanto tempo demora para meu site estar no ar?</span>
            <i class="fa-solid fa-chevron-down text-xs text-[#A1A1AA] transition-transform duration-300"></i>
          </button>
          <div class="hidden px-6 pb-6 text-xs text-[#A1A1AA] leading-relaxed">
            Nosso prazo padrão de entrega é de 3 a 5 dias úteis após o envio das informações básicas do seu negócio no formulário rápido de alinhamento.
          </div>
        </div>

        <div class="border border-[#222222] rounded-lg bg-[#121212] overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full p-6 text-left font-heading font-bold text-sm text-white flex justify-between items-center gap-4 hover:text-[#00FF66] transition-colors">
            <span>Eu já tenho domínio registrado ou preciso comprar um novo?</span>
            <i class="fa-solid fa-chevron-down text-xs text-[#A1A1AA] transition-transform duration-300"></i>
          </button>
          <div class="hidden px-6 pb-6 text-xs text-[#A1A1AA] leading-relaxed">
            Se você já possui um domínio (ex: suaempresa.com.br), conectamos diretamente nele sem custo adicional. Se não tiver, orientamos você a registrar pelo preço oficial de custo no Registro.br (apenas R$ 40/ano), mantendo a titularidade 100% sua.
          </div>
        </div>

        <div class="border border-[#222222] rounded-lg bg-[#121212] overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full p-6 text-left font-heading font-bold text-sm text-white flex justify-between items-center gap-4 hover:text-[#00FF66] transition-colors">
            <span>Por que o foco é levar para o WhatsApp e não um formulário comum?</span>
            <i class="fa-solid fa-chevron-down text-xs text-[#A1A1AA] transition-transform duration-300"></i>
          </button>
          <div class="hidden px-6 pb-6 text-xs text-[#A1A1AA] leading-relaxed">
            Dados de negócios locais comprovam que mais de 85% dos usuários móveis abandonam páginas ao ver formulários extensos. No WhatsApp 1x1, você atende na hora, tira dúvidas, passa credibilidade humana e fecha orçamentos com taxa de conversão até 5x maior.
          </div>
        </div>

        <div class="border border-[#222222] rounded-lg bg-[#121212] overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full p-6 text-left font-heading font-bold text-sm text-white flex justify-between items-center gap-4 hover:text-[#00FF66] transition-colors">
            <span>Como funciona a compatibilidade "Zero Lock-in"?</span>
            <i class="fa-solid fa-chevron-down text-xs text-[#A1A1AA] transition-transform duration-300"></i>
          </button>
          <div class="hidden px-6 pb-6 text-xs text-[#A1A1AA] leading-relaxed">
            Seu site é um arquivo único semântico com Tailwind CSS. Ele roda em qualquer servidor, hospedagem cPanel, Vercel ou até mesmo dando dois cliques localmente no seu computador, sem nenhuma dependência de plataformas proprietárias.
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- 9. RODAPÉ                                                                 -->
  <!-- ========================================================================= -->
  <footer class="py-12 bg-[#080808] text-[#A1A1AA] text-xs font-mono border-t border-[#222222]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      
      <!-- =================================================================== -->
      <!-- [IMAGEM 6: LOGOMARCA OFICIAL - RODAPÉ]                              -->
      <!-- ONDE SUBSTITUIR: Troque o valor de src="" abaixo pelo Base64 ou    -->
      <!-- pelo caminho/URL da sua nova imagem.                                -->
      <!-- =================================================================== -->
      <a href="https://www.urbconcept.com.br/" target="_blank" rel="noopener noreferrer" class="flex items-center group" title="Visitar site principal: www.urbconcept.com.br">
        <img
          src="{logo_data_uri}"
          alt="URB Concept"
          class="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      <div class="flex flex-wrap items-center gap-6">
        <a href="#problema" class="hover:text-white transition-colors">01. Problema</a>
        <a href="#capacidades" class="hover:text-white transition-colors">02. Capacidades</a>
        <a href="#portfolio" class="hover:text-white transition-colors">03. Portfólio</a>
        <a href="#processo" class="hover:text-white transition-colors">04. Processo</a>
        <a href="#investimento" class="hover:text-white transition-colors">05. Investimento</a>
        <a href="#faq" class="hover:text-white transition-colors">06. FAQ</a>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" class="text-[#00FF66] hover:underline">WhatsApp Oficial</a>
      </div>

      <div>&copy; 2026 URB Concept. Todos os direitos reservados.</div>
    </div>
  </footer>

  <!-- ========================================================================= -->
  <!-- 10. BOTÃO FLUTUANTE WHATSAPP (CANTO INFERIOR DIREITO)                      -->
  <!-- ========================================================================= -->
  <aside aria-label="Atendimento via WhatsApp" class="fixed bottom-6 right-6 z-50 flex items-center gap-3">
    <div class="hidden md:flex items-center bg-[#121212]/95 border border-[#282828] py-2 px-3.5 rounded-full shadow-2xl backdrop-blur-md">
      <span class="w-2 h-2 rounded-full bg-[#00FF66] animate-ping mr-2"></span>
      <span class="text-xs font-heading font-medium text-white">Online • Resposta imediata</span>
    </div>
    
    <a
      href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20URB%20Concept%20e%20quero%20um%20site%20de%20alta%20convers%C3%A3o%20para%20o%20meu%20neg%C3%B3cio%20local."
      target="_blank"
      rel="noopener noreferrer"
      class="neon-pulse w-14 h-14 rounded-full bg-[#00FF66] hover:bg-[#00e65c] text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
      title="Falar com a URB Concept no WhatsApp"
    >
      <i class="fa-brands fa-whatsapp text-2xl"></i>
    </a>
  </aside>

  <!-- JavaScript Interno para Acordeão do FAQ -->
  <script>
    function toggleFaq(button) {{
      const content = button.nextElementSibling;
      const icon = button.querySelector('i');
      if (content.classList.contains('hidden')) {{
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      }} else {{
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      }}
    }}
  </script>

</body>
</html>
"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Generated index.html successfully, size:", len(html_content))
