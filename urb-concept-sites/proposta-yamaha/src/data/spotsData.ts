export interface Spot {
  id: number;
  title: string;
  duration: string;
  durationSec: number;
  script: string;
  isMaster?: boolean;
  hasAudio?: boolean;
  audioUrl?: string;
}

export const SPOTS_DATA: Spot[] = [
  {
    id: 1,
    title: "Spot 01 — Lançamentos Marvel",
    duration: "30 segundos",
    durationSec: 30,
    hasAudio: true,
    audioUrl: "SPOT 1 LANÇAMENTOS MARVEL.mp3",
    script: "Atenção, Cruzeiro do Sul! A força da Marvel invadiu a Cruzeiro Motors Center Yamaha! Chegaram as edições exclusivas FZ15 ABS Deadpool e Crosser Z ABS Wolverine! Estilo lendário, parceria com a Iron Studios e alta performance. Motos à pronta entrega e com frete grátis! Corra para uma de nossas lojas no Centro, na Praça ou no Aeroporto Velho. Cruzeiro Motors Yamaha: o seu próximo nível sobre duas rodas!"
  },
  {
    id: 2,
    title: "Spot 02 — Condições de Pagamento",
    duration: "30 segundos",
    durationSec: 30,
    hasAudio: false,
    script: "No Mês do Cliente na Cruzeiro Motors Center Yamaha, o sonho da moto nova cabe no seu bolso! Condições facilitadas de financiamento, consórcio, Liberacred com entrada facilitada e as vantagens do Move Brasil. Tá esperando o quê? Faça sua simulação hoje mesmo no Centro, na Praça ou na loja do Aeroporto Velho. Cruzeiro Motors Yamaha: a sua liberdade começa aqui!"
  },
  {
    id: 3,
    title: "Spot 03 — Benefícios & Vantagens",
    duration: "30 segundos",
    durationSec: 30,
    hasAudio: false,
    script: "Mês do Cliente na Cruzeiro Motors Center Yamaha tem presente de verdade! Comprou sua moto zero? Ganhou capacete de brinde! E tem mais: aqui você não paga frete. É frete grátis e motos à pronta entrega para você sair pilotando na hora! Passe em uma de nossas três lojas em Cruzeiro do Sul e garanta a sua. Cruzeiro Motors Yamaha!"
  },
  {
    id: 4,
    title: "Spot 04 — Lojas & Proximidade",
    duration: "30 segundos",
    durationSec: 30,
    hasAudio: false,
    script: "Alô, Cruzeiro do Sul e região! A Cruzeiro Motors Center Yamaha está sempre perto de você. Visite nossa Loja Centro na Rua Desembargador Távora, 640; o Ponto da Praça, entre a Catedral e a Caixa; ou no Aeroporto Velho, na Cruzeiro Motors Construção. Venha tomar um café, fazer sua simulação e aproveitar as condições do Mês do Cliente! Cruzeiro Motors Yamaha!"
  },
  {
    id: 5,
    title: "Spot 05 — Ação Rápida & Urgência",
    duration: "30 segundos",
    durationSec: 30,
    hasAudio: false,
    script: "Chegou o Mês do Cliente Cruzeiro Motors Center Yamaha! Exclusivas edições Marvel Deadpool e Wolverine, capacete de brinde, frete grátis e motos à pronta entrega! Financiamento, consórcio e Liberacred com facilitadores que só a gente tem. Escolha sua loja no Centro, na Praça ou no Aeroporto Velho e saia de moto nova hoje! Cruzeiro Motors Center Yamaha!"
  },
  {
    id: 6,
    title: "Spot 06 — Master 60 Segundos",
    duration: "1 minuto (60s)",
    durationSec: 60,
    isMaster: true,
    hasAudio: false,
    script: "Alô, Cruzeiro do Sul e toda a região! O Mês do Cliente chegou com tudo na Cruzeiro Motors Center Yamaha! E para comemorar em grande estilo, recebemos dois lançamentos exclusivos que vão dominar as ruas: uma parceria inédita entre Yamaha, MARVEL e Iron Studios! Venha conhecer a radical Yamaha FZ15 ABS Edição Deadpool e a valente Crosser Z ABS Edição Wolverine. Duas máquinas de respeito com pronta entrega! E as vantagens não param por aí: aqui você não paga frete, é frete grátis! E comprou sua moto zero, ganha um capacete de brinde na hora! Para colocar você sobre duas rodas, temos Financiamento, Consórcio, Liberacred com entrada facilitada e as oportunidades do Move Brasil. Estamos pertinho de você em três endereços: na Loja Centro, Rua Desembargador Távora, 640; no Ponto da Praça, entre a Catedral e a Caixa; e no Aeroporto Velho, na Cruzeiro Motors Construção. Fale com nossos consultores, faça sua simulação e saia de Yamaha nova hoje mesmo!"
  }
];

export const PROPOSAL_DETAILS = {
  clientName: "Cruzeiro Motors Center Yamaha",
  campaignName: "Mês do Cliente 2026",
  investmentValue: "R$ 750,00",
  scopeCount: "6 Textos Publicitários de Áudio (5 de 30s + 1 de 60s)",
  usageRights: "Uso 100% livre durante todo o mês em qualquer mídia (rádio, carro de som, redes sociais e WhatsApp)",
  whatsappNumber: "5568999977094",
  whatsappDirectUrl: "https://wa.me/5568999977094?text=Ol%C3%A1!%20Gostaria%20de%20aprovar%20a%20proposta%20comercial%20da%20Cruzeiro%20Motors%20Yamaha.",
  whatsappMessage: "Olá! Gostaria de aprovar a proposta comercial da Cruzeiro Motors Yamaha."
};

