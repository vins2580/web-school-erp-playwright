import { Page, Locator } from '@playwright/test';

export class ADDUSERTYPE {

    readonly page: Page
    readonly addusertype: Locator
     readonly userTypeInput: Locator;
      readonly createButton: Locator

    constructor(page: Page) {
        this.page = page
        this.addusertype = this.page.locator(
            'a[href="/index.php/core/usertype/create"]'
        )
         this.userTypeInput = this.page.locator('#Usertype_usertype_name')

           this.createButton = page.locator('#std_reg_submit')
    }

    async clickAddUserType(){
        await this.addusertype.click()
    }
     async enterUserType(userType: string) {
        await this.userTypeInput.fill(userType);
    }

    async clickCreate() {
        await this.createButton.click()
    }
}


    