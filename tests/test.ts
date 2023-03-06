import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'My Svelte App', level: 1 })).toBeVisible();
});

test('login page has expected h1 and h2', async ({ page }) => {
	await page.goto('/login');
	await expect(page.getByRole('heading', { name: 'My Svelte App', level: 1 })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Request a new token', level: 2 })).toBeVisible();
});
