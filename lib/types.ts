
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

// Base types
export interface Image {
  url: string
  alt?: string
  width?: number
  height?: number
}

// Paragraph types
export type ParagraphType =
  | ParagraphHero
  | ParagraphCardGroup
  | ParagraphAccordion
  | ParagraphQuote
  | ParagraphPricing
  | ParagraphLogoCollection
  | ParagraphStats
  | ParagraphCtaSection
  | ParagraphText

export interface ParagraphHero {
  __typename: 'ParagraphHeroSection'
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  layout?: 'centered' | 'left-aligned'
  backgroundColor?: string
  backgroundImage?: Image
  primaryCtaText?: string
  primaryCtaUrl?: string
  secondaryCtaText?: string
  secondaryCtaUrl?: string
}

export interface Card {
  id: string
  icon?: string
  title: string
  description?: string
  linkText?: string
  linkUrl?: string
}

export interface ParagraphCardGroup {
  __typename: 'ParagraphFeatureGrid'
  id: string
  eyebrow?: string
  title?: string
  subtitle?: string
  columns?: '2' | '3' | '4'
  cards?: Card[] | null
}

export interface FeatureItem {
  id: string
  icon?: string
  title: string
  description?: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface ParagraphAccordion {
  __typename: 'ParagraphAccordion'
  id: string
  eyebrow?: string
  title?: string
  subtitle?: string
  items: FaqItem[]
}

export interface Testimonial {
  id: string
  quote: string
  authorName: string
  authorTitle?: string
  authorCompany?: string
  authorImage?: Image
  rating?: number
}

export interface ParagraphQuote {
  __typename: 'ParagraphTestimonialSlider'
  id: string
  eyebrow?: string
  title?: string
  layout?: 'single' | 'grid'
  testimonials: Testimonial[]
}

export interface PricingTier {
  id: string
  name: string
  price: string
  billingPeriod?: string
  description?: string
  features?: string[] | null
  isFeatured?: boolean
  ctaText?: string
  ctaUrl?: string
}

export interface ParagraphPricing {
  __typename: 'ParagraphPricingTable'
  id: string
  eyebrow?: string
  title?: string
  subtitle?: string
  tiers?: PricingTier[] | null
}

export interface Logo {
  id: string
  name: string
  image?: Image
  url?: string
}

export interface ParagraphLogoCollection {
  __typename: 'ParagraphLogoCollection'
  id: string
  eyebrow?: string
  title?: string
  logos: Logo[]
}

export interface StatItem {
  id: string
  value: string
  label: string
  description?: string
}

export interface ParagraphStats {
  __typename: 'ParagraphStat'
  id: string
  eyebrow?: string
  title?: string
  backgroundColor?: string
  stats: StatItem[]
}

export interface ParagraphCtaSection {
  __typename: 'ParagraphCtaSection'
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  backgroundColor?: string
  primaryCtaText?: string
  primaryCtaUrl?: string
  secondaryCtaText?: string
  secondaryCtaUrl?: string
}

export interface ParagraphText {
  __typename: 'ParagraphTextBlock'
  id: string
  eyebrow?: string
  title?: string
  content: string
  alignment?: 'left' | 'center'
  ctaText?: string
  ctaUrl?: string
}

// Node types
export interface LandingPage {
  id: string
  title: string
  path: string
  sections: ParagraphType[]
}

// GraphQL response types
export interface NodeByPathResponse {
  route?: {
    entity?: LandingPage | null
  } | null
}

// Backward-compatible aliases for shared component signatures.
export type DrupalHomepage = LandingPage
export type DrupalLandingPage = LandingPage

export interface LandingPagesData {
  nodeLandingPages?: {
    nodes?: LandingPage[]
  } | null
}
