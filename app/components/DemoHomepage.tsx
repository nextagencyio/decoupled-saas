'use client'

import Header from './Header'
import ParagraphHero from './paragraphs/ParagraphHero'
import ParagraphLogoCollection from './paragraphs/ParagraphLogoCollection'
import ParagraphStats from './paragraphs/ParagraphStats'
import ParagraphCardGroup from './paragraphs/ParagraphCardGroup'
import ParagraphPricing from './paragraphs/ParagraphPricing'
import ParagraphQuote from './paragraphs/ParagraphQuote'
import ParagraphAccordion from './paragraphs/ParagraphAccordion'
import ParagraphNewsletter from './paragraphs/ParagraphNewsletter'

// Demo data for showcasing CloudFlow SaaS components without Drupal
const demoData = {
  hero: {
    __typename: 'ParagraphHero' as const,
    id: 'hero-1',
    eyebrow: 'CloudFlow Platform',
    title: 'Automate your workflows. Accelerate your growth.',
    subtitle: 'CloudFlow is the all-in-one SaaS platform that streamlines operations, connects your tools, and gives your team superpowers. Start free today.',
    layout: 'centered' as const,
    backgroundColor: 'gradient',
    primaryCtaText: 'Start Free Trial',
    primaryCtaUrl: '/signup',
    secondaryCtaText: 'Watch Demo',
    secondaryCtaUrl: '/demo',
  },
  logos: {
    __typename: 'ParagraphLogoCollection' as const,
    id: 'logos-1',
    title: 'Powering 10,000+ businesses worldwide',
    logos: [
      { id: '1', name: 'Slack' },
      { id: '2', name: 'Salesforce' },
      { id: '3', name: 'HubSpot' },
      { id: '4', name: 'Stripe' },
      { id: '5', name: 'Zapier' },
      { id: '6', name: 'Notion' },
    ],
  },
  stats: {
    __typename: 'ParagraphStat' as const,
    id: 'stats-1',
    backgroundColor: 'light',
    stats: [
      { id: '1', value: '10K+', label: 'Active Teams', description: 'Companies trust CloudFlow daily' },
      { id: '2', value: '99.99%', label: 'Uptime SLA', description: 'Enterprise-grade reliability' },
      { id: '3', value: '3.2M', label: 'Workflows Run', description: 'Automated tasks last month' },
      { id: '4', value: '150+', label: 'Integrations', description: 'Connect any tool in your stack' },
    ],
  },
  features: {
    __typename: 'ParagraphCardGroup' as const,
    id: 'features-1',
    eyebrow: 'Features',
    title: 'Everything you need to scale operations',
    subtitle: 'A unified platform that replaces a dozen tools. Built for teams that demand speed, reliability, and flexibility.',
    columns: '3' as const,
    cards: [
      { id: '1', icon: 'Workflow', title: 'Visual Workflow Builder', description: 'Design complex automations with our drag-and-drop builder. No code required.', linkText: 'Learn more', linkUrl: '#' },
      { id: '2', icon: 'BarChart3', title: 'Real-Time Analytics', description: 'Track every metric that matters. Custom dashboards and AI-powered insights.', linkText: 'Learn more', linkUrl: '#' },
      { id: '3', icon: 'Shield', title: 'Enterprise Security', description: 'SOC 2 Type II certified. End-to-end encryption, SSO, and RBAC.', linkText: 'Learn more', linkUrl: '#' },
    ],
  },
  pricing: {
    __typename: 'ParagraphPricing' as const,
    id: 'pricing-1',
    eyebrow: 'Pricing',
    title: 'Simple, predictable pricing',
    subtitle: 'Start free. Upgrade when you are ready. No surprises on your bill.',
    tiers: [
      { id: '1', name: 'Free', price: '$0', billingPeriod: 'forever', description: 'For individuals and small projects', features: ['Up to 5 workflows', '1,000 tasks/month', '3 integrations', 'Community support', 'Basic analytics'], isFeatured: false, ctaText: 'Get Started', ctaUrl: '#' },
      { id: '2', name: 'Pro', price: '$49', billingPeriod: '/month', description: 'For growing teams and businesses', features: ['Unlimited workflows', '50,000 tasks/month', 'All integrations', 'Priority support', 'Advanced analytics', 'Custom dashboards', 'Team workspaces', 'API access'], isFeatured: true, ctaText: 'Start Free Trial', ctaUrl: '#' },
      { id: '3', name: 'Enterprise', price: 'Custom', billingPeriod: '', description: 'For large organizations with custom needs', features: ['Everything in Pro', 'Unlimited tasks', 'SSO & SAML', 'Dedicated account manager', 'Custom SLA', 'On-premise deployment'], isFeatured: false, ctaText: 'Contact Sales', ctaUrl: '#' },
    ],
  },
  quotes: {
    __typename: 'ParagraphQuote' as const,
    id: 'quotes-1',
    eyebrow: 'Customer Stories',
    title: 'Trusted by fast-growing teams',
    layout: 'grid' as const,
    testimonials: [
      { id: '1', quote: 'CloudFlow cut our manual processes by 80%. What used to take our ops team a full day now runs automatically.', authorName: 'Rachel Torres', authorTitle: 'VP of Operations', authorCompany: 'ScaleUp Inc.', rating: 5 },
      { id: '2', quote: 'We replaced four separate tools with CloudFlow. The integrations are seamless and the workflow builder is incredibly intuitive.', authorName: 'David Kim', authorTitle: 'CTO', authorCompany: 'Meridian Labs', rating: 5 },
      { id: '3', quote: 'The analytics alone are worth the price. We finally have visibility into our pipeline and can make data-driven decisions.', authorName: 'Priya Patel', authorTitle: 'Head of Growth', authorCompany: 'Apex Digital', rating: 5 },
    ],
  },
  faq: {
    __typename: 'ParagraphAccordion' as const,
    id: 'faq-1',
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    subtitle: "Everything you need to know about CloudFlow. Can't find your answer? Contact our support team.",
    items: [
      { id: '1', question: 'How quickly can I get started with CloudFlow?', answer: '<p>You can sign up and build your first workflow in under 5 minutes. Our templates library has 200+ pre-built automations for common use cases.</p>' },
      { id: '2', question: 'Can I migrate from my current automation tool?', answer: '<p>Yes. We offer free migration assistance for Pro and Enterprise plans. Our team will help you recreate your workflows with zero downtime.</p>' },
      { id: '3', question: 'What integrations do you support?', answer: '<p>CloudFlow connects with 150+ tools including Slack, Salesforce, HubSpot, Stripe, Google Workspace, Microsoft 365, Jira, GitHub, and more.</p>' },
      { id: '4', question: 'Is my data secure?', answer: '<p>Absolutely. CloudFlow is SOC 2 Type II certified with end-to-end encryption, SSO support, and role-based access controls.</p>' },
    ],
  },
  newsletter: {
    __typename: 'ParagraphNewsletter' as const,
    id: 'newsletter-1',
    eyebrow: 'Get Started',
    title: 'Ready to automate your workflows?',
    subtitle: 'Join 10,000+ teams that trust CloudFlow to run their business. Start your free trial today.',
    placeholder: 'Enter your work email',
    buttonText: 'Start Free Trial',
    backgroundColor: 'dark' as const,
  },
}

export default function DemoHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ParagraphHero {...demoData.hero} />
      <ParagraphLogoCollection {...demoData.logos} />
      <ParagraphStats {...demoData.stats} />
      <ParagraphCardGroup {...demoData.features} />
      <ParagraphPricing {...demoData.pricing} />
      <ParagraphQuote {...demoData.quotes} />
      <ParagraphAccordion {...demoData.faq} />
      <ParagraphNewsletter {...demoData.newsletter} />
    </div>
  )
}
