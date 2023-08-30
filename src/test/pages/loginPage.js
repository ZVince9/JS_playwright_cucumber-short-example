const { chromium, expect } = require("@playwright/test");

class LoginPage {
  constructor() {
    this.url = "https://console.thisisbud.com/login";
    this.email = '//input[@id="login-email-input"]';
    this.password = '//input[@id="login-password-input"]';
    this.button = '//button[@id="login-submit-button"]';
    this.homeElement = '//h1[contains(text(), "Home")]';
  }

  async goToThisIsBudPage() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
    await this.page.goto(this.url);
  }

  async fillingForm(username, password) {
    await this.page.fill(this.email, username);
    await this.page.fill(this.password, password);
  }

  async clickButton() {
    await this.page.click(this.button);
  }

  async checkUrl(value) {
    await this.page.waitForNavigation();
    expect(this.page.url()).toContain(value);
  }

  async checkHomeElementVisible() {
    await this.page.waitForSelector(this.homeElement, {
      state: "visible",
      timeout: 2000,
    });
  }

  async close() {
    await this.browser.close();
  }
}

module.exports = LoginPage;
