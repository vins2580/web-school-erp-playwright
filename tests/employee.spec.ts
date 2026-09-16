import { Page, expect, test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HRPAYROLLPAGE } from '../pages/HRPayrollPage';
import { EMPLOYEEPAGE } from '../pages/EmployeePage';

test ('Login and click Employee Management and click', async ({ page }) => {

    const loginPage = new LoginPage(page)
    await loginPage.gotoLoginPage()
    await loginPage.Login(
        'admin',
        'webschool'
    )

    const hrpayrollpage = new HRPAYROLLPAGE(page)
    await hrpayrollpage.clickHRPAYROLL()

    const employeepage = new EMPLOYEEPAGE(page)
    await employeepage.clickemployee()

})