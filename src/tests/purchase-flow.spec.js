import { test, expect } from '@playwright/test';
import CompletePurchaseFlow from '../flows/CompletePurchaseFlow.js';
import { setupTest } from '../core/testSetup.js';

test.describe('Purchase Flow', () => {
  test.beforeEach(async ({ page }) => {
    await setupTest(page);
  });

  test('complete purchase @e2e', async ({ page }) => {
    const purchaseFlow = new CompletePurchaseFlow(page);
    const user = { username: 'standard_user', password: 'secret_sauce' };
    const checkoutInfo = { firstName: 'John', lastName: 'Doe', postalCode: '12345' };

    await purchaseFlow.execute(user, 'Sauce Labs Backpack', checkoutInfo);

    await expect(page).toHaveURL(/checkout-complete/);
    await expect(page.locator('.complete-header')).toBeVisible();
  });
});
