export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  price: number;
  highlight?: boolean;
  category: string;
  description: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  isExternal?: boolean;
  image: string;
  results: string[];
  tags: string[];
  featured?: boolean;
}
