// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeLandingPage {
  id: string;
  path: string;
  sections: any[];
  title: string;
}

export interface ParagraphAccordion {
  id: string;
  eyebrow: string;
  items: any[];
  subtitle: { value: string };
  title: string;
}

export interface ParagraphCtaSection {
  id: string;
  backgroundColor: string;
  eyebrow: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  subtitle: { value: string };
  title: string;
}

export interface ParagraphFaqItem {
  id: string;
  answer: { value: string };
  question: string;
}

export interface ParagraphFeatureCard {
  id: string;
  description: string;
  icon: string;
  linkText: string;
  linkUrl: string;
  title: string;
}

export interface ParagraphFeatureGrid {
  id: string;
  cards: any[];
  columns: string;
  eyebrow: string;
  subtitle: { value: string };
  title: string;
}

export interface ParagraphFeatureItem {
  id: string;
  description: string;
  icon: string;
  title: string;
}

export interface ParagraphHeroSection {
  id: string;
  backgroundColor: string;
  backgroundImage: { url: string; alt: string; width: number; height: number };
  eyebrow: string;
  layout: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  subtitle: { value: string };
  title: string;
}

export interface ParagraphLogo {
  id: string;
  image: { url: string; alt: string; width: number; height: number };
  name: string;
  url: string;
}

export interface ParagraphLogoCollection {
  id: string;
  eyebrow: string;
  logos: any[];
  title: string;
}

export interface ParagraphPricingTable {
  id: string;
  eyebrow: string;
  subtitle: { value: string };
  tiers: any[];
  title: string;
}

export interface ParagraphPricingTier {
  id: string;
  billingPeriod: string;
  ctaText: string;
  ctaUrl: string;
  description: string;
  features: string[];
  isFeatured: boolean;
  name: string;
  price: string;
}

export interface ParagraphStatItem {
  id: string;
  description: string;
  label: string;
  value: string;
}

export interface ParagraphStat {
  id: string;
  backgroundColor: string;
  eyebrow: string;
  stats: any[];
  title: string;
}

export interface ParagraphTestimonial {
  id: string;
  authorCompany: string;
  authorImage: { url: string; alt: string; width: number; height: number };
  authorName: string;
  authorTitle: string;
  quote: { value: string };
  rating: string;
}

export interface ParagraphTestimonialSlider {
  id: string;
  eyebrow: string;
  layout: string;
  testimonials: any[];
  title: string;
}

export interface ParagraphTextBlock {
  id: string;
  alignment: string;
  content: { value: string };
  ctaText: string;
  ctaUrl: string;
  eyebrow: string;
  title: string;
}
