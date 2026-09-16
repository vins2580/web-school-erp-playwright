import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HRPAYROLLPAGE } from '../pages/HRPayrollPage';

test('Login and click HR/Payroll', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.Login(
        'admin',
        'webschool'
    );

    const hrPayrollPage = new HRPAYROLLPAGE(page);

    await hrPayrollPage.clickHRPAYROLL();

});