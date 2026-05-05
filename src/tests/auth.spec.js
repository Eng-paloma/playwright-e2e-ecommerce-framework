import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import { setupTest } from '../core/testSetup.js';

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await setupTest(page);
  });

  test('successful login @smoke @e2e', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    const productsPage = page.locator('.inventory_container');
    await test.expect(productsPage).toBeVisible();
  });
});
