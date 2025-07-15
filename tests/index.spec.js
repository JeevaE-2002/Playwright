const { test, expect } = require('@playwright/test');

test('homepage content is correct', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Served by `serve`

  // Check title
  await expect(page).toHaveTitle('My GitHub Page');

  // Check h1 content
  await expect(page.locator('h1')).toHaveText('Hello, GitHub Pages!');

  // Check paragraph content
  await expect(page.locator('p')).toHaveText('This site is hosted with GitHub Pages by Jeeva E');
});
