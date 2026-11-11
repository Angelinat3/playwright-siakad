const { test, expect } = require('@playwright/test');

test('SIAKAD Main Flow - Simple Load Test', async ({ page }) => {
  await page.goto('https://siakad.polinema.ac.id/', { waitUntil: 'commit' });
  await expect(page).toHaveTitle(/SIAKAD/i);
});