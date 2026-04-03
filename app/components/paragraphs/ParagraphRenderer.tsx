'use client'

import type { ParagraphType } from '@/lib/types'
import ParagraphHero from './ParagraphHero'
import ParagraphCardGroup from './ParagraphCardGroup'
import ParagraphAccordion from './ParagraphAccordion'
import ParagraphQuote from './ParagraphQuote'
import ParagraphPricing from './ParagraphPricing'
import ParagraphLogoCollection from './ParagraphLogoCollection'
import ParagraphStats from './ParagraphStats'
import ParagraphCtaSection from './ParagraphCtaSection'
import ParagraphText from './ParagraphText'

interface ParagraphRendererProps {
  paragraph: ParagraphType
}

export default function ParagraphRenderer({ paragraph }: ParagraphRendererProps) {
  switch (paragraph.__typename) {
    case 'ParagraphHeroSection':
      return <ParagraphHero {...paragraph} />
    case 'ParagraphFeatureGrid':
      return <ParagraphCardGroup {...paragraph} />
    case 'ParagraphAccordion':
      return <ParagraphAccordion {...paragraph} />
    case 'ParagraphTestimonialSlider':
      return <ParagraphQuote {...paragraph} />
    case 'ParagraphPricingTable':
      return <ParagraphPricing {...paragraph} />
    case 'ParagraphLogoCollection':
      return <ParagraphLogoCollection {...paragraph} />
    case 'ParagraphStat':
      return <ParagraphStats {...paragraph} />
    case 'ParagraphCtaSection':
      return <ParagraphCtaSection {...paragraph} />
    case 'ParagraphTextBlock':
      return <ParagraphText {...paragraph} />
    default:
      console.warn('Unknown paragraph type:', (paragraph as any).__typename)
      return null
  }
}

interface ParagraphListProps {
  sections: ParagraphType[]
}

export function ParagraphList({ sections }: ParagraphListProps) {
  return (
    <>
      {sections.map((section) => (
        <ParagraphRenderer key={section.id} paragraph={section} />
      ))}
    </>
  )
}
