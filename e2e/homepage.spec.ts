import { test, expect } from '@playwright/test'

test.describe('Homepage (non-demo mode)', () => {
  test('renders hero section with title', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Automate your workflows')
  })

  test('renders logo collection section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Powering 10,000+ businesses worldwide')).toBeVisible()
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('10K+')).toBeVisible()
    await expect(page.getByText('Active Teams')).toBeVisible()
  })

  test('renders feature grid section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Everything you need to scale operations')).toBeVisible()
    await expect(page.getByText('Visual Workflow Builder')).toBeVisible()
  })

  test('renders pricing section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Simple, predictable pricing')).toBeVisible()
  })

  test('renders testimonials section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Trusted by fast-growing teams')).toBeVisible()
  })

  test('renders accordion/FAQ section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Frequently asked questions')).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Ready to automate your workflows?')).toBeVisible()
  })
})

test.describe('Landing pages', () => {
  test('features page loads with sections', async ({ page }) => {
    await page.goto('/features')
    await expect(page.locator('h1').first()).toBeVisible()
    // Should have paragraph sections, not "Page Not Found"
    await expect(page.getByText('Page Not Found')).not.toBeVisible()
  })

  test('pricing page loads with sections', async ({ page }) => {
    await page.goto('/pricing')
    await expect(page.locator('h1').first()).toBeVisible()
    await expect(page.getByText('Plans that scale')).toBeVisible()
  })

  test('features listing page shows landing pages', async ({ page }) => {
    await page.goto('/features')
    // Should render content, not show empty state
    await expect(page.getByText('Page Not Found')).not.toBeVisible()
  })
})
