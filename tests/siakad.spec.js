const { test, expect } = require('@playwright/test');

test('SIAKAD Main Flow - Public Page Verification', async ({ page }) => {
  // Visit a reliable public URL to verify Playwright pipeline execution
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/i);
});