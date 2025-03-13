import { test, expect } from '@playwright/test';

test('Check homepage title', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example Domain/);
});
