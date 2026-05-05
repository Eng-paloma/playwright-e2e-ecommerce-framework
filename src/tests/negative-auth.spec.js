import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import { setupTest } from '../core/testSetup.js';

test.describe('Negative Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await setupTest(page);
  });

  test('locked out user @negative', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('locked_out_user', 'secret_sauce');
    const errorMessage = await loginPage.getErrorMessage();
    test.expect(errorMessage).toContain('Sorry, this user has been locked out');
  });

  test('invalid credentials @negative', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('invalid_user', 'invalid_pass');
    const errorMessage = await loginPage.getErrorMessage();
    test.expect(errorMessage).toContain('Username and password do not match');
  });
});
