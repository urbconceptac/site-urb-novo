import { PricingPackage, FaqItem, PortfolioProject } from './types';
import portfolioUrbImage from './assets/images/new_portfolio_urb_1788961739144.jpg';
import portfolioClinicaImage from './assets/images/new_portfolio_clinica_1788961752610.jpg';
import portfolioAdvocaciaImage from './assets/images/new_portfolio_advocacia_1788961764485.jpg';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'urb-concept',
    title: 'URB Concept — Arquitetura, Interiores & Construções',
    category: 'Arquitetura & Engenharia',
    description: 'Estúdio de arquitetura contemporânea e obras de alto padrão. Estrutura digital imersiva desenvolvida para posicionar autoridade imediata e receber clientes qualificados para projetos residenciais e comerciais.',
    url: 'https://www.urbconcept.com.br/',
    isExternal: true,
    image: portfolioUrbImage,
    featured: true,
    tags: ['Arquitetura', 'Alto Padrão', 'Obras & Interiores', 'WhatsApp 1x1'],
    results: [
      '+340% em contatos qualificados via WhatsApp',
      'Tempo de carregamento < 1.0s (Score 98 no Google)',
      '100% de autonomia e zero taxas de mensalidade'
    ]
  },
  {
    id: 'clinica-lumina',
    title: 'Clínica Lumina — Dermatologia & Estética Avançada',
    category: 'Saúde & Estética Local',
    description: 'Ambiente digital minimalista e sofisticado para clínica médica de luxo. Focado em transformar seguidores do Instagram e buscas locais em agendamentos diretos de consultas no WhatsApp.',
    url: '#investimento',
    isExternal: false,
    image: portfolioClinicaImage,
    tags: ['Saúde & Estética', 'Google Meu Negócio', 'Instagram Ads', 'Agendamento 1x1'],
    results: [
      '2.8x mais agendamentos semanais',
      'Zero abandono por formulários complexos',
      'Botão inteligente integrado de triagem WhatsApp'
    ]
  },
  {
    id: 'vanguard-advocacia',
    title: 'Vanguard — Advocacia Empresarial & Tributária',
    category: 'Direito & Consultoria Corporativa',
    description: 'Posicionamento sóbrio e autoritário para captação de clientes jurídicos e empresariais. Design dark mode editorial com transmissão instantânea de solidez e sigilo.',
    url: '#investimento',
    isExternal: false,
    image: portfolioAdvocaciaImage,
    tags: ['Direito Corporativo', 'Autoridade Jurídica', 'Tráfego Pago', 'Contato Direto'],
    results: [
      'Captação ativa de contratos B2B',
      'Presença institucional de prestígio regional',
      'Entrega chave na mão em 4 dias úteis'
    ]
  }
];

export const PACKAGES: PricingPackage[] = [
  {
    id: 'essencial',
    name: 'Pacote Essencial',
    category: 'Início Rápido',
    price: 970,
    description: 'Ideal para autônomos, consultórios e pequenos prestadores de serviços locais.',
    ctaText: 'Escolher Essencial',
    whatsappMessage: 'Olá! Tenho interesse no Pacote Essencial (R$ 970) da URB Concept para estruturar meu site local.',
    features: [
      'Landing page de 1 página focada em conversão direta',
      'Botão integrado de WhatsApp com mensagem pré-formatada',
      'Design 100% responsivo otimizado para celulares',
      'Hospedagem configurada sem taxas recorrentes',
      'Vídeo tutorial de 3 minutos com autonomia total',
    ],
  },
  {
    id: 'performance',
    name: 'Pacote Performance',
    category: 'Máxima Conversão',
    price: 1870,
    highlight: true,
    badge: 'MAIS RECOMENDADO',
    description: 'O mais vendido. Estrutura completa de autoridade local e otimização para Google Maps.',
    ctaText: 'Garantir Pacote Performance',
    whatsappMessage: 'Olá! Quero o Pacote Performance (R$ 1.870) da URB Concept para dominar as buscas locais.',
    features: [
      'Tudo incluso no Pacote Essencial',
      'Integração e Otimização para Google Maps & Meu Negócio',
      'Botão flutuante de WhatsApp com pulso de atenção',
      'Carregamento ultrarrápido (Score 90+ em celulares)',
      'Seção de Depoimentos & Prova Social regional',
      'Guia tático de atendimento persuasivo 1x1 no WhatsApp',
    ],
  },
  {
    id: 'dominancia',
    name: 'Pacote Dominância',
    category: 'Liderança Regional',
    price: 2970,
    description: 'Para empresas que querem liderar o mercado regional e acelerar o fechamento de vendas.',
    ctaText: 'Dominar Minha Região',
    whatsappMessage: 'Olá! Quero o Pacote Dominância (R$ 2.970) da URB Concept para liderar meu segmento na região.',
    features: [
      'Tudo incluso no Pacote Performance',
      'Scripts e roteiros de atendimento persuasivo 1x1 para sua equipe',
      'Configuração avançada de rastreamento (Meta Pixel + GTM)',
      'Copywriting focado em diferenciais contra concorrentes locais',
      '30 dias de suporte prioritário direto com os fundadores',
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Vou ter que pagar mensalidade para manter o site no ar?',
    answer: 'Não! Diferente de agências tradicionais que cobram R$ 150 a R$ 500 por mês, na URB Concept você paga um valor único. O código é 100% seu e não existem mensalidades de manutenção obrigatórias.',
  },
  {
    id: 'faq-2',
    question: 'Como altero informações no site depois de pronto?',
    answer: 'Você tem total autonomia. Junto com a entrega do site, enviamos um vídeo direto e prático de 3 minutos ensinando como atualizar fotos, textos e números de WhatsApp em instantes, sem precisar de programador.',
  },
  {
    id: 'faq-3',
    question: 'Quanto tempo demora para meu site estar no ar?',
    answer: 'Nosso prazo padrão de entrega é de 3 a 5 dias úteis após o envio das informações básicas do seu negócio no formulário rápido de alinhamento.',
  },
  {
    id: 'faq-4',
    question: 'Eu já tenho domínio registrado ou preciso comprar um novo?',
    answer: 'Se você já possui um domínio (ex: suaempresa.com.br), conectamos diretamente nele sem custo adicional. Se não tiver, orientamos você a registrar pelo preço oficial de custo no Registro.br (apenas R$ 40/ano), mantendo a titularidade 100% sua.',
  },
  {
    id: 'faq-5',
    question: 'Por que o foco é levar para o WhatsApp e não um formulário comum?',
    answer: 'Dados de negócios locais comprovam que mais de 85% dos usuários móveis abandonam páginas ao ver formulários extensos. No WhatsApp 1x1, você atende na hora, tira dúvidas, passa credibilidade humana e fecha orçamentos com taxa de conversão até 5x maior.',
  },
  {
    id: 'faq-6',
    question: 'Como funciona a compatibilidade "Zero Lock-in"?',
    answer: 'Seu site pode ser exportado como um único arquivo HTML5 semântico com Tailwind CSS. Ele roda em qualquer servidor, GitHub Pages, Vercel ou cPanel comum, sem dependência de plataformas proprietárias ou custos de licenças.',
  },
];
