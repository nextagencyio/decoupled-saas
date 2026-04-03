import { getClient } from '@/lib/drupal-client'
import { GET_LANDING_PAGE } from '@/lib/queries'
import { ParagraphList } from '../components/paragraphs/ParagraphRenderer'
import ErrorBoundary from '../components/ErrorBoundary'
import ResponsiveImage from '../components/ResponsiveImage'
import { Metadata } from 'next'
import type { ParagraphType } from '@/lib/types'

export const revalidate = 300
export const dynamic = 'force-dynamic'

// Helper to extract .value from Text type fields
function extractTextValue(obj: unknown): unknown {
  if (obj === null || obj === undefined) return obj
  if (typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(extractTextValue)

  const record = obj as Record<string, unknown>
  if ('value' in record && typeof record.value === 'string' && Object.keys(record).length <= 3) {
    return record.value
  }

  const result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(record)) {
    result[key] = extractTextValue(value)
  }
  return result
}

function transformSections(sections: unknown[]): ParagraphType[] {
  return sections.map(section => extractTextValue(section)) as ParagraphType[]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params
  const path = `/${(resolvedParams.slug || []).join('/')}`
  try {
    const client = getClient()
    const page = await client.getEntryByPath(path)
    const title = (page as any)?.title || 'Page'
    return { title }
  } catch {
    return { title: 'Page' }
  }
}

function PageNotFound({ path }: { path: string }) {
  return (
    <div className="text-center py-16">
      <div className="bg-white rounded-lg shadow-sm p-12">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-2">We couldn&#39;t find any content at this path.</p>
        <p className="text-sm text-gray-500">Path: {path}</p>
      </div>
    </div>
  )
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params
  const path = `/${(resolvedParams.slug || []).join('/')}`
  const client = getClient()

  try {
    // Use the full landing page query with all paragraph fragments
    const data = await client.raw(GET_LANDING_PAGE, { path })
    const entity = data?.route?.entity

    if (!entity) {
      return (
        <div className="min-h-screen bg-gray-50">
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <PageNotFound path={path} />
          </main>
        </div>
      )
    }

    // If it's a NodeLandingPage with sections, render with ParagraphList
    if (entity.sections) {
      const sections = transformSections(entity.sections || [])
      return (
        <>
          <ParagraphList sections={sections} />
        </>
      )
    }

    // Fallback: render as basic page
    const title = entity.title || 'Untitled'
    const bodyHtml = entity?.body?.processed || ''
    const image = entity?.image

    return (
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <ErrorBoundary>
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              {image && (
                <ResponsiveImage
                  image={image}
                  alt={image.alt || title}
                  className="rounded-t-lg"
                  priority={true}
                />
              )}
              <div className="p-6 md:p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">{title}</h1>
                <div className="prose prose-sm sm:prose lg:prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
              </div>
            </article>
          </ErrorBoundary>
        </main>
      </div>
    )
  } catch (error) {
    console.error('Error loading page by path:', error)
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <PageNotFound path={path} />
        </main>
      </div>
    )
  }
}
