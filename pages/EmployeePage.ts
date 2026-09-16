import { Page, Locator } from '@playwright/test'

export class EMPLOYEEPAGE {
    readonly page: Page
    readonly employee: Locator

    constructor(page: Page) {
        this.page = page
        this.employee = page.locator('a.has-ul').filter({
            hasText: 'Employee Management'
        })
    }

    async clickemployee() {
        await this.employee.click()
    }
}
