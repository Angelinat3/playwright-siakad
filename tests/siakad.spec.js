const { test, expect } = require('@playwright/test');

test('SIAKAD Main Flow - Login Page Load & Elements Check', async ({ page }) => {
  await page.goto('https://siakad.polinema.ac.id/');
  await expect(page).toHaveTitle(/SIAKAD/i);
  const usernameInput = page.locator('input[name="username"]');
  await expect(usernameInput).toBeVisible();
});