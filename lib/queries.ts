// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Fragment for all paragraph types
const PARAGRAPH_FRAGMENTS = gql`
  fragment HeroFields on ParagraphHeroSection {
    id
    eyebrow
    title
    subtitle { value }
    layout
    backgroundColor
    backgroundImage {
      url
      alt
      width
      height
    }
    primaryCtaText
    primaryCtaUrl
    secondaryCtaText
    secondaryCtaUrl
  }

  fragment CardFields on ParagraphFeatureCard {
    id
    icon
    title
    description
    linkText
    linkUrl
  }

  fragment CardGroupFields on ParagraphFeatureGrid {
    id
    eyebrow
    title
    subtitle { value }
    columns
    cards {
      ... on ParagraphFeatureCard {
        ...CardFields
      }
    }
  }

  fragment FaqItemFields on ParagraphFaqItem {
    id
    question
    answer { value }
  }

  fragment AccordionFields on ParagraphAccordion {
    id
    eyebrow
    title
    subtitle { value }
    items {
      ... on ParagraphFaqItem {
        ...FaqItemFields
      }
    }
  }

  fragment TestimonialFields on ParagraphTestimonial {
    id
    quote { value }
    authorName
    authorTitle
    authorCompany
    authorImage {
      url
      alt
    }
    rating
  }

  fragment QuoteFields on ParagraphTestimonialSlider {
    id
    eyebrow
    title
    layout
    testimonials {
      ... on ParagraphTestimonial {
        ...TestimonialFields
      }
    }
  }

  fragment PricingTierFields on ParagraphPricingTier {
    id
    name
    price
    billingPeriod
    description
    isFeatured
    ctaText
    ctaUrl
  }

  fragment PricingFields on ParagraphPricingTable {
    id
    eyebrow
    title
    subtitle { value }
    tiers {
      ... on ParagraphPricingTier {
        ...PricingTierFields
      }
    }
  }

  fragment LogoFields on ParagraphLogo {
    id
    name
    image {
      url
      alt
    }
    url
  }

  fragment LogoCollectionFields on ParagraphLogoCollection {
    id
    eyebrow
    title
    logos {
      ... on ParagraphLogo {
        ...LogoFields
      }
    }
  }

  fragment StatItemFields on ParagraphStatItem {
    id
    value
    label
    description
  }

  fragment StatsFields on ParagraphStat {
    id
    eyebrow
    title
    backgroundColor
    stats {
      ... on ParagraphStatItem {
        ...StatItemFields
      }
    }
  }

  fragment CtaSectionFields on ParagraphCtaSection {
    id
    eyebrow
    title
    subtitle { value }
    backgroundColor
    primaryCtaText
    primaryCtaUrl
    secondaryCtaText
    secondaryCtaUrl
  }

  fragment TextFields on ParagraphTextBlock {
    id
    eyebrow
    title
    content { value }
    alignment
    ctaText
    ctaUrl
  }
`

export const GET_LANDING_PAGE = gql`
  ${PARAGRAPH_FRAGMENTS}

  query GetLandingPage($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeLandingPage {
            id
            title
            path
            sections {
              __typename
              ... on ParagraphHeroSection {
                ...HeroFields
              }
              ... on ParagraphFeatureGrid {
                ...CardGroupFields
              }
              ... on ParagraphAccordion {
                ...AccordionFields
              }
              ... on ParagraphTestimonialSlider {
                ...QuoteFields
              }
              ... on ParagraphPricingTable {
                ...PricingFields
              }
              ... on ParagraphLogoCollection {
                ...LogoCollectionFields
              }
              ... on ParagraphStat {
                ...StatsFields
              }
              ... on ParagraphCtaSection {
                ...CtaSectionFields
              }
              ... on ParagraphTextBlock {
                ...TextFields
              }
            }
          }
        }
      }
    }
  }
`

export const GET_ALL_LANDING_PAGES = gql`
  query GetAllLandingPages {
    nodeLandingPages(first: 100) {
      nodes {
        id
        title
        path
      }
    }
  }
`

// Backward-compatible alias used by existing catch-all route pages.
export const GET_NODE_BY_PATH = GET_LANDING_PAGE
