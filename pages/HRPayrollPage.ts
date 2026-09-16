import { Page, Locator } from '@playwright/test'

export class HRPAYROLLPAGE {

    readonly page: Page
    readonly hrpayroll: Locator

constructor(page: Page) {
    this.page = page
    this.hrpayroll = page.locator('a.has-ul').filter({ hasText: 'HR/Payroll'})

}
async clickHRPAYROLL() {
    await this.hrpayroll.click()
}
}
