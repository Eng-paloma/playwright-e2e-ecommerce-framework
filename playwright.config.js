import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  outputDir: './reports',
  use: {
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  retries: 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'reports' }]],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
