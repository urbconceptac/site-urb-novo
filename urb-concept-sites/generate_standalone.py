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
  
  <!-- Google Fonts: Space Grotesk & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- FontAwesome Icons 6 via CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!-- Tailwind CSS via CDN -->
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

  <!-- ======================================================= -->
  <!-- 1. CABEÇALHO / HEADER FIXO                              -->
  <!-- ======================================================= -->
  <header class="fixed top-0 left-0 w-full z-50 bg-[#080808]/92 backdrop-blur-md border-b border-[#222222]/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <!-- Logomarca Oficial enviada pelo usuário com link para site principal -->
      <a href="https://www.urbconcept.com.br/" target="_blank" rel="noopener noreferrer" class="flex items-center group py-1" title="Visitar URB Concept (www.urbconcept.com.br)">
        <img src="{logo_data_uri}" alt="URB Concept" class="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
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
        <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20URB%20Concept%20e%20quero%20um%20site%20de%20alta%20convers%C3%A3o%20para%20o%20meu%20neg%C3%B3cio." target="_blank" rel="noopener noreferrer" class="relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#00FF66] text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#00e65c] transition-all transform hover:scale-[1.02]">
          <i class="fa-brands fa-whatsapp text-base"></i>
          <span>Falar no WhatsApp</span>
        </a>
      </div>

    </div>
  </header>

  <!-- ======================================================= -->
  <!-- 2. HERO SECTION                                         -->
  <!-- ======================================================= -->
  <section class="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
    <!-- Grid sutil de fundo -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Conteúdo Textual -->
        <div class="lg:col-span-7 space-y-6 text-left">
          
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#262626] text-xs font-mono text-[#00FF66]">
            <span class="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
            <span>ENGENHARIA DE CONVERSÃO DIGITAL</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
            Não entregamos apenas um site.<br />
            Construímos sua <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00FF66] to-[#00FF66]">máquina de clientes no WhatsApp.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#A1A1AA] max-w-2xl font-normal leading-relaxed">
            Estrutura digital de alto impacto focada em negócios locais que não podem perder clientes para páginas lentas, cartões virtuais amadores e agências burocráticas.
          </p>

          <!-- Badges de Autoridade -->
          <div class="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A1A1AA] pt-2">
            <div class="flex items-center gap-2 bg-[#121212] px-3 py-1.5 rounded border border-[#222222]">
              <i class="fa-solid fa-bolt text-[#00FF66]"></i>
              <span>Carregamento &lt; 1.0s</span>
            </div>
            <div class="flex items-center gap-2 bg-[#121212] px-3 py-1.5 rounded border border-[#222222]">
              <i class="fa-solid fa-mobile-screen text-[#00FF66]"></i>
              <span>100% Mobile-First</span>
            </div>
            <div class="flex items-center gap-2 bg-[#121212] px-3 py-1.5 rounded border border-[#222222]">
              <i class="fa-solid fa-key text-[#00FF66]"></i>
              <span>Sem Mensalidades Ocultas</span>
            </div>
          </div>

          <!-- Ações -->
          <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20URB%20Concept%20e%20quero%20um%20site%20de%20alta%20convers%C3%A3o%20para%20o%20meu%20neg%C3%B3cio." target="_blank" rel="noopener noreferrer" class="neon-pulse inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#00FF66] text-black font-heading font-bold text-sm uppercase tracking-wider hover:bg-[#00e65c] transition-all transform hover:-translate-y-0.5">
              <i class="fa-brands fa-whatsapp text-lg"></i>
              <span>Quero Minha Estrutura Agora</span>
            </a>

            <a href="#portfolio" class="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#121212] border border-[#262626] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#1c1c1c] hover:border-[#00FF66]/50 transition-all">
              <span>Ver Projetos Entregues</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>

        </div>

        <!-- Showcase Visual (Mockup / Imagem Unsplash Alta Resolução) -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-[#262626] bg-[#121212] shadow-2xl group">
            <div class="p-4 border-b border-[#222222] flex items-center justify-between bg-[#161616]">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span class="text-[11px] font-mono text-[#A1A1AA]">urbconcept.com.br/conversao</span>
              <span class="text-[10px] font-mono text-[#00FF66] bg-[#00FF66]/10 px-2 py-0.5 rounded">ONLINE</span>
            </div>
            
            <div class="aspect-[4/3] relative overflow-hidden bg-black">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85" 
                alt="Showcase Aspiracional URB Concept" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              <!-- Floating Conversion Badge -->
              <div class="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#080808]/90 backdrop-blur-md border border-[#262626] flex items-center justify-between">
                <div>
                  <div class="text-[10px] font-mono text-[#A1A1AA]">TAXA DE RESPOSTA</div>
                  <div class="text-sm font-heading font-bold text-white flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-[#00FF66]"></span>
                    Lead Quente Direto no WhatsApp
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-xs font-mono font-bold text-[#00FF66]">+320%</div>
                  <div class="text-[9px] font-mono text-[#A1A1AA]">vs. Formulário</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ======================================================= -->
  <!-- 3. SEÇÃO PROBLEMA                                       -->
  <!-- ======================================================= -->
  <section id="problema" class="py-20 bg-[#0c0c0c] border-t border-b border-[#1c1c1c]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-16">
        <div class="text-xs font-mono text-red-400 uppercase tracking-widest mb-3">
          // DIAGNÓSTICO DO MERCADO LOCAL
        </div>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
          Por que a maioria dos negócios locais joga dinheiro fora na internet todos os dias:
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Card 01 -->
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8 hover:border-red-500/40 transition-colors">
          <div class="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6">
            <i class="fa-solid fa-credit-card text-2xl"></i>
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3">A 'Armadilha do Cartão Virtual'</h3>
          <p class="text-sm text-[#A1A1AA] leading-relaxed">Sites lentos, pesados e genéricos que parecem criados em 2010. Não transmitem solidez nem autoridade ao visitante que pesquisa pelo celular antes de decidir onde gastar o próprio dinheiro.</p>
        </div>

        <!-- Card 02 -->
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8 hover:border-red-500/40 transition-colors">
          <div class="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6">
            <i class="fa-solid fa-arrow-pointer text-2xl"></i>
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3">Falta de Direcionamento Imediato</h3>
          <p class="text-sm text-[#A1A1AA] leading-relaxed">O cliente entra com pressa pelo Google ou Instagram, não encontra um botão de WhatsApp claro em 3 segundos, se frustra com formulários frios e fecha a aba para chamar o concorrente.</p>
        </div>

        <!-- Card 03 -->
        <div class="bg-[#121212] border border-[#222222] rounded-lg p-8 hover:border-red-500/40 transition-colors">
          <div class="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6">
            <i class="fa-solid fa-lock text-2xl"></i>
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3">Refém de Agências Tradicionais</h3>
          <p class="text-sm text-[#A1A1AA] leading-relaxed">Meses de espera burocrática para colocar um site simples no ar e cobrança de mensalidades abusivas só para alterar um número de telefone ou atualizar o endereço físico da sua empresa.</p>
        </div>

      </div>

    </div>
  </section>

  <!-- ======================================================= -->
  <!-- 4. SEÇÃO CAPACIDADES                                    -->
  <!-- ======================================================= -->
  <section id="capacidades" class="py-24 bg-[#080808]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-16">
        <div class="text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-3">
          // CAPACIDADES DE ENGENHARIA
        </div>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
          Projetado para eliminar atritos e conduzir o visitante até a conversa de fechamento:
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div class="bg-[#121212] border border-[#222222] p-8 rounded-lg hover:border-[#00FF66]/40 transition-all">
          <div class="w-12 h-12 rounded bg-[#1c1c1c] flex items-center justify-center text-[#00FF66] mb-5">
            <i class="fa-brands fa-whatsapp text-2xl"></i>
          </div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">WhatsApp Direto 1x1</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">Roteamento otimizado que abre o aplicativo do cliente com mensagem pré-configurada em 1 clique, sem exigir preenchimento de formulários extensos.</p>
        </div>

        <div class="bg-[#121212] border border-[#222222] p-8 rounded-lg hover:border-[#00FF66]/40 transition-all">
          <div class="w-12 h-12 rounded bg-[#1c1c1c] flex items-center justify-center text-[#00FF66] mb-5">
            <i class="fa-solid fa-shield-halved text-2xl"></i>
          </div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Arquitetura de Conversão</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">Copywriting comercial técnico desenhado para estabelecer autoridade, sanar as principais objeções de compra e solicitar a proposta comercial de forma natural.</p>
        </div>

        <div class="bg-[#121212] border border-[#222222] p-8 rounded-lg hover:border-[#00FF66]/40 transition-all">
          <div class="w-12 h-12 rounded bg-[#1c1c1c] flex items-center justify-center text-[#00FF66] mb-5">
            <i class="fa-solid fa-bolt text-2xl"></i>
          </div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Carregamento Instantâneo</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">Código limpo, minificado e sem plugins pesados. A página abre em menos de 1 segundo nas redes 4G/5G, garantindo que nenhum lead saia por lentidão.</p>
        </div>

        <div class="bg-[#121212] border border-[#222222] p-8 rounded-lg hover:border-[#00FF66]/40 transition-all">
          <div class="w-12 h-12 rounded bg-[#1c1c1c] flex items-center justify-center text-[#00FF66] mb-5">
            <i class="fa-solid fa-key text-2xl"></i>
          </div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Propriedade Total</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">O projeto, domínio e arquivos pertencem integralmente à sua empresa. Sem mensalidades abusivas e sem contratos que prendem você a nós.</p>
        </div>

        <div class="bg-[#121212] border border-[#222222] p-8 rounded-lg hover:border-[#00FF66]/40 transition-all">
          <div class="w-12 h-12 rounded bg-[#1c1c1c] flex items-center justify-center text-[#00FF66] mb-5">
            <i class="fa-solid fa-wand-magic-sparkles text-2xl"></i>
          </div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Design Exclusivo</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">Não usamos templates genéricos de WordPress. Sua landing page é estruturada com estética refinada que valoriza o tíquete do seu serviço.</p>
        </div>

        <div class="bg-[#121212] border border-[#222222] p-8 rounded-lg hover:border-[#00FF66]/40 transition-all">
          <div class="w-12 h-12 rounded bg-[#1c1c1c] flex items-center justify-center text-[#00FF66] mb-5">
            <i class="fa-solid fa-mobile-screen text-2xl"></i>
          </div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Engenharia Mobile-First</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">Como mais de 85% dos cliques vêm de smartphones, os botões, contrastes e tipografia são rigorosamente calibrados para telas touch.</p>
        </div>

      </div>

    </div>
  </section>

  <!-- ======================================================= -->
  <!-- 5. SEÇÃO PORTFÓLIO                                      -->
  <!-- ======================================================= -->
  <section id="portfolio" class="py-24 bg-[#0a0a0a] border-t border-[#1c1c1c]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div class="text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-3">
            // ESTRUTURAS EM OPERAÇÃO
          </div>
          <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
            Casos reais projetados para conversão máxima:
          </h2>
        </div>
        <div class="mt-4 md:mt-0 text-xs font-mono text-[#A1A1AA]">
          Clique no WhatsApp para receber análises de outros nichos
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Case 1: URB Concept Estúdio -->
        <div class="bg-[#121212] border border-[#222222] rounded-xl overflow-hidden group hover:border-[#00FF66]/40 transition-all">
          <div class="aspect-[16/10] overflow-hidden bg-black relative">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" 
              alt="URB Concept Arquitetura" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div class="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono text-white border border-white/10">
              ARQUITETURA & DESIGN
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-heading font-bold text-white mb-2">URB Concept — Estúdio de Arquitetura</h3>
            <p class="text-xs text-[#A1A1AA] leading-relaxed mb-4">Posicionamento de alto padrão com galeria minimalista e direcionamento exclusivo para orçamentos de reformas de luxo.</p>
            <div class="flex items-center justify-between pt-4 border-t border-[#1f1f1f] text-xs font-mono text-[#00FF66]">
              <span>Conversão Lead: 14.8%</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </div>
          </div>
        </div>

        <!-- Case 2: Clínica Lumina -->
        <div class="bg-[#121212] border border-[#222222] rounded-xl overflow-hidden group hover:border-[#00FF66]/40 transition-all">
          <div class="aspect-[16/10] overflow-hidden bg-black relative">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85" 
              alt="Clínica Lumina" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div class="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono text-white border border-white/10">
              SAÚDE & ESTÉTICA
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-heading font-bold text-white mb-2">Clínica Lumina — Dermatologia Avançada</h3>
            <p class="text-xs text-[#A1A1AA] leading-relaxed mb-4">Agendamento direto na recepção pelo WhatsApp, eliminando formulários e aumentando a taxa de comparecimento.</p>
            <div class="flex items-center justify-between pt-4 border-t border-[#1f1f1f] text-xs font-mono text-[#00FF66]">
              <span>Tempo de Resposta: &lt; 3min</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </div>
          </div>
        </div>

        <!-- Case 3: Vanguard Advocacia -->
        <div class="bg-[#121212] border border-[#222222] rounded-xl overflow-hidden group hover:border-[#00FF66]/40 transition-all">
          <div class="aspect-[16/10] overflow-hidden bg-black relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85" 
              alt="Vanguard Advocacia" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div class="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono text-white border border-white/10">
              DIREITO CORPORATIVO
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-heading font-bold text-white mb-2">Vanguard Advocacia Empresarial</h3>
            <p class="text-xs text-[#A1A1AA] leading-relaxed mb-4">Comunicação austera e corporativa, filtrando contatos qualificados para consultoria tributária e contratual.</p>
            <div class="flex items-center justify-between pt-4 border-t border-[#1f1f1f] text-xs font-mono text-[#00FF66]">
              <span>Leads B2B Qualificados</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- ======================================================= -->
  <!-- 6. SEÇÃO PROCESSO                                       -->
  <!-- ======================================================= -->
  <section id="processo" class="py-24 bg-[#080808]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-16">
        <div class="text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-3">
          // CRONOGRAMA ÁGIL
        </div>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
          Como entregamos sua estrutura pronta para vender em dias:
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        <div class="bg-[#121212] border border-[#222222] p-8 rounded-lg relative">
          <div class="text-4xl font-heading font-bold text-[#222222] mb-4">01</div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Diagnóstico Comercial</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">Entendemos o seu serviço, perfil do seu cliente ideal e quais objeções impedem ele de te chamar no WhatsApp hoje.</p>
        </div>

        <div class="bg-[#121212] border border-[#222222] p-8 rounded-lg relative">
          <div class="text-4xl font-heading font-bold text-[#00FF66]/30 mb-4">02</div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Design & Engenharia</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">Montamos a copy comercial persuasiva, tipografia, otimização de imagens e gatilhos de ação direta para o WhatsApp.</p>
        </div>

        <div class="bg-[#121212] border border-[#222222] p-8 rounded-lg relative">
          <div class="text-4xl font-heading font-bold text-[#00FF66] mb-4">03</div>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Ativação & Entrega</h3>
          <p class="text-xs text-[#A1A1AA] leading-relaxed">Publicação no seu domínio próprio com SSL, CDN global ultraveloz e testes práticos de recebimento de mensagens no WhatsApp.</p>
        </div>

      </div>

    </div>
  </section>

  <!-- ======================================================= -->
  <!-- 7. SEÇÃO INVESTIMENTO                                   -->
  <!-- ======================================================= -->
  <section id="investimento" class="py-24 bg-[#0c0c0c] border-t border-[#1c1c1c]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#262626] text-xs font-mono text-[#00FF66] mb-6">
        <span>PROPOSTA DIRETA & SEM MENSALIDADES</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
        Pare de perder clientes para quem tem um site melhor que o seu.
      </h2>

      <p class="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed">
        Você investe uma única vez pela estrutura pronta e fica com a posse definitiva de 100% dos arquivos e domínio.
      </p>

      <div class="bg-[#121212] border-2 border-[#00FF66]/50 rounded-2xl p-8 sm:p-12 text-left shadow-2xl relative overflow-hidden">
        <div class="absolute -right-16 -top-16 w-48 h-48 bg-[#00FF66]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <div class="text-xs font-mono text-[#00FF66]">PACOTE COMPLETO // TURNKEY</div>
            <h3 class="text-2xl sm:text-3xl font-heading font-bold text-white">Landing Page de Alta Conversão URB Concept</h3>
            <ul class="space-y-2.5 text-xs text-[#A1A1AA]">
              <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#00FF66]"></i> Design exclusivo sob medida</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#00FF66]"></i> Roteamento estratégico para WhatsApp</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#00FF66]"></i> Carregamento ultraveloz (&lt; 1s)</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#00FF66]"></i> Certificado de Segurança SSL gratuito</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#00FF66]"></i> Código sem dependência de plugins frágeis</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#00FF66]"></i> 100% sua: sem mensalidade de plataforma</li>
            </ul>
          </div>

          <div class="bg-[#181818] p-6 sm:p-8 rounded-xl border border-[#262626] text-center flex flex-col justify-center">
            <div class="text-xs font-mono text-[#A1A1AA] mb-2">CONDIÇÃO DIRETA VIA WHATSAPP</div>
            <div class="text-3xl sm:text-4xl font-heading font-bold text-white mb-2">Orçamento Imediato</div>
            <div class="text-xs text-[#A1A1AA] mb-6">Receba a análise prévia do seu negócio em menos de 15 minutos</div>
            <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20URB%20Concept%20e%20quero%20um%20or%C3%A7amento%20para%20o%20meu%20neg%C3%B3cio." target="_blank" rel="noopener noreferrer" class="neon-pulse w-full py-4 rounded-lg bg-[#00FF66] text-black font-heading font-bold text-sm uppercase tracking-wider hover:bg-[#00e65c] transition-all flex items-center justify-center gap-2">
              <i class="fa-brands fa-whatsapp text-lg"></i>
              <span>Solicitar Orçamento</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ======================================================= -->
  <!-- 8. SEÇÃO FAQ                                            -->
  <!-- ======================================================= -->
  <section id="faq" class="py-24 bg-[#080808]">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-16">
        <div class="text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-3">
          // DÚVIDAS FREQUENTES
        </div>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
          Perguntas Frequentes
        </h2>
      </div>

      <div class="space-y-4">
        
        <div class="border border-[#222222] rounded-lg bg-[#121212] overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full p-6 text-left font-heading font-bold text-sm text-white flex justify-between items-center">
            <span>Quanto tempo leva para a landing page ficar pronta?</span>
            <i class="fa-solid fa-chevron-down text-xs text-[#A1A1AA] transition-transform duration-300"></i>
          </button>
          <div class="hidden px-6 pb-6 text-xs text-[#A1A1AA] leading-relaxed">
            Em média, entregamos o projeto pronto e online em 3 a 5 dias úteis após o alinhamento das informações e materiais básicos da sua empresa.
          </div>
        </div>

        <div class="border border-[#222222] rounded-lg bg-[#121212] overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full p-6 text-left font-heading font-bold text-sm text-white flex justify-between items-center">
            <span>Preciso pagar alguma mensalidade para a URB Concept?</span>
            <i class="fa-solid fa-chevron-down text-xs text-[#A1A1AA] transition-transform duration-300"></i>
          </button>
          <div class="hidden px-6 pb-6 text-xs text-[#A1A1AA] leading-relaxed">
            Não. Você paga apenas pelo desenvolvimento da landing page. Os únicos custos recorrentes são a anuidade do seu domínio próprio (cerca de R$ 40/ano no Registro.br) e a hospedagem, que pode ser gratuita ou de custo ínfimo em servidores modernos.
          </div>
        </div>

        <div class="border border-[#222222] rounded-lg bg-[#121212] overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full p-6 text-left font-heading font-bold text-sm text-white flex justify-between items-center">
            <span>Eu mesmo posso alterar textos ou telefones no futuro?</span>
            <i class="fa-solid fa-chevron-down text-xs text-[#A1A1AA] transition-transform duration-300"></i>
          </button>
          <div class="hidden px-6 pb-6 text-xs text-[#A1A1AA] leading-relaxed">
            Sim. Entregamos o código totalmente organizado e documentado. Se preferir, também oferecemos suporte ágil sob demanda para qualquer alteração sem te prender a mensalidades obrigatórias.
          </div>
        </div>

        <div class="border border-[#222222] rounded-lg bg-[#121212] overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full p-6 text-left font-heading font-bold text-sm text-white flex justify-between items-center">
            <span>Por que o foco é o botão de WhatsApp e não formulário?</span>
            <i class="fa-solid fa-chevron-down text-xs text-[#A1A1AA] transition-transform duration-300"></i>
          </button>
          <div class="hidden px-6 pb-6 text-xs text-[#A1A1AA] leading-relaxed">
            No Brasil, mais de 90% das decisões de compra para serviços locais ocorrem por conversa instantânea. Formulários esfriam o cliente em até 80%, enquanto no WhatsApp você atende na hora e fecha negócios enquanto a intenção está quente.
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- ======================================================= -->
  <!-- 9. RODAPÉ                                               -->
  <!-- ======================================================= -->
  <footer class="py-12 bg-[#080808] text-[#A1A1AA] text-xs font-mono border-t border-[#222222]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      
      <!-- Logomarca enviada pelo usuário com link para site principal -->
      <a href="https://www.urbconcept.com.br/" target="_blank" rel="noopener noreferrer" class="flex items-center group" title="Visitar URB Concept (www.urbconcept.com.br)">
        <img src="{logo_data_uri}" alt="URB Concept" class="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
      </a>

      <div class="flex items-center gap-6">
        <a href="#problema" class="hover:text-white transition-colors">Problema</a>
        <a href="#capacidades" class="hover:text-white transition-colors">Capacidades</a>
        <a href="#portfolio" class="hover:text-white transition-colors">Portfólio</a>
        <a href="#investimento" class="hover:text-white transition-colors">Investimento</a>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" class="text-[#00FF66] hover:underline">WhatsApp Oficial</a>
      </div>

      <div>&copy; 2026 URB Concept. Todos os direitos reservados.</div>
    </div>
  </footer>

  <!-- Script simples para o Acordeão do FAQ e rolagem suave -->
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

with open('public/standalone.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Generated public/standalone.html successfully, size:", len(html_content))
