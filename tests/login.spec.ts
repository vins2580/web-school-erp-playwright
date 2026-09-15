import { test, expect } from '@playwright/test';

test('WebSchool Login Page', async ({ page }) => {

  // Open WebSchool login page
  await page.goto('https://demoschool.web-school.co.in/index.php/user/login');

  // Enter username
  await page.locator('#UserLogin_username').fill('admin');

  // Enter password
  await page.locator('#UserLogin_password').fill('webschool');

  // Click Sign in
  await page.locator('input[type="submit"][value="Sign in "]').click();

  console.log('WebSchool Login completed successfully');

  // Wait for 5 seconds
  await page.waitForTimeout(5000);
});