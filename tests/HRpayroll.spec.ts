import { test } from '@playwright/test';

test('Open HR Payroll', async ({ page }) => {

  await page.goto('https://demoschool.web-school.co.in/index.php/user/login');

  // Login
  await page.locator('#UserLogin_username').fill('admin');
  await page.locator('#UserLogin_password').fill('webschool');
  await page.locator('input[type="submit"][value="Sign in "]').click();


  // Click HR/Payroll
  await page.locator('a[href="/index.php/hr/payroll"]').click();

  // Wait for 5 seconds
  await page.waitForTimeout(5000);
});