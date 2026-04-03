import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3098',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'NODE_TLS_REJECT_UNAUTHORIZED=0 npx next start -p 3098',
    port: 3098,
    timeout: 30000,
    reuseExistingServer: !process.env.CI,
    env: {
      NODE_TLS_REJECT_UNAUTHORIZED: '0',
    },
  },
})
