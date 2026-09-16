
import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.username = page.locator('#UserLogin_username');
        this.password = page.locator('#UserLogin_password');
        this.loginButton = page.locator('input[type="submit"][value="Sign in "]');
    }

    async gotoLoginPage() {

        await this.page.goto(
            'https://demoschool.web-school.co.in/index.php/user/login'
        );
    }

    async Login(username: string, password: string) {

        await this.username.fill(username);

        await this.password.fill(password);

        await this.loginButton.click();
    }
}
