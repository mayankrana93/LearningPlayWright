import { test, expect } from '@playwright/test';

test.describe('Flipkart Learning Tests', () => {
  test('should open flipkart and search for a product', async ({ page }) => {
    // 1. Navigate to Flipkart
    console.log('Navigating to Flipkart...');
    await page.goto('https://www.flipkart.com/');

    // 2. Locate the search input box
    // Flipkart has multiple search inputs with similar placeholder, one is readonly. We target the active one.
    const searchInput = page.locator('input[name="q"]').first();
    
    // 3. Type "iphone" and press Enter
    console.log('Searching for "iphone"...');
    await searchInput.fill('iphone');
    await searchInput.press('Enter');

    // 4. Wait for search results to load and assert the URL or a product item is visible
    console.log('Waiting for search results...');
    await page.waitForURL(/.*search.*/);
    
    // Check if the page title contains "Iphone" or search results container is present
    await expect(page).toHaveTitle(/iphone/i);
    
    console.log('Test completed successfully!');
  });
});
