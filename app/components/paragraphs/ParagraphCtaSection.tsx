'use client'

import { clsx } from 'clsx'
import type { ParagraphCtaSection as ParagraphCtaSectionType } from '@/lib/types'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

export default function ParagraphCtaSection({
  eyebrow,
  title,
  subtitle,
  backgroundColor,
  primaryCtaText,
  primaryCtaUrl,
  secondaryCtaText,
  secondaryCtaUrl,
}: ParagraphCtaSectionType) {
  const isGradient = backgroundColor === 'gradient'
  const isDark = backgroundColor === 'dark' || isGradient

  return (
    <section
      className={clsx(
        'section-padding',
        isGradient && 'bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900',
        backgroundColor === 'dark' && 'bg-gray-900',
        backgroundColor === 'light' && 'bg-gray-50',
        !backgroundColor && 'bg-primary-600'
      )}
    >
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <Badge
              variant={isDark ? 'primary' : 'default'}
              className="mb-4"
            >
              {eyebrow}
            </Badge>
          )}

          {title && (
            <h2
              className={clsx(
                'text-3xl md:text-4xl font-bold mb-4',
                isDark || !backgroundColor ? 'text-white' : 'text-gray-900'
              )}
            >
              {title}
            </h2>
          )}

          {subtitle && (
            <p
              className={clsx(
                'text-lg mb-8',
                isDark || !backgroundColor ? 'text-gray-200' : 'text-gray-600'
              )}
            >
              {subtitle}
            </p>
          )}

          {(primaryCtaText || secondaryCtaText) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCtaText && primaryCtaUrl && (
                <Button
                  variant={isDark || !backgroundColor ? 'secondary' : 'primary'}
                  size="lg"
                  href={primaryCtaUrl}
                >
                  {primaryCtaText}
                </Button>
              )}
              {secondaryCtaText && secondaryCtaUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  href={secondaryCtaUrl}
                  className={isDark || !backgroundColor ? 'border-white text-white hover:bg-white/10' : ''}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
