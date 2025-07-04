import { test, expect } from '@playwright/test';

// Basic test coverage for DemoQA homepage and Elements > Text Box

test.describe('DemoQA Homepage', () => {
  test('should display all main categories', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await expect(page.getByRole('heading', { name: 'Elements' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Forms' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Alerts, Frame & Windows' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Widgets' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Interactions' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Book Store Application' })).toBeVisible();
  });
});

test.describe('Elements > Text Box', () => {
  test('should submit the Text Box form and display output', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await page.getByPlaceholder('Full Name').fill('John Doe');
    await page.getByPlaceholder('name@example.com').fill('john.doe@example.com');
    await page.getByPlaceholder('Current Address').fill('123 Main Street, New York, NY 10001');
    await page.locator('#permanentAddress').fill('456 Oak Avenue, San Francisco, CA 94102');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#output')).toBeVisible();
    await expect(page.locator('#name')).toContainText('John Doe');
    await expect(page.locator('#email')).toContainText('john.doe@example.com');
    await expect(page.locator('p#currentAddress')).toContainText('123 Main Street, New York, NY 10001');
    await expect(page.locator('p#permanentAddress')).toContainText('456 Oak Avenue, San Francisco, CA 94102');
  });
});
