import {  Page, Locator } from '@playwright/test'

export class LoginPage {

  readonly page: Page
  readonly username: Locator
  readonly password: Locator
  readonly loginButton: Locator
  
  constructor(page: Page) {
    this.page = page
    this.username = page.locator('#UserLogin_username')
    this.password = page.locator('#UserLogin_password')
    this.loginButton = page.locator('input[type="submit"][value="Sign in "]')
  }

  async Login(username: string, passwword:string) {
    await this.username.fill(username)
    await this.password.fill(passwword) 
    await this.loginButton.click()

  }



}