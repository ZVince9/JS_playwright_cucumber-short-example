const { chromium, expect } = require("@playwright/test");

class LoginPage {
  constructor() {
    // Define the URL and element selectors for the login page.
    this.url = "https://console.thisisbud.com/login";
    this.email = '//input[@id="login-email-input"]';
    this.password = '//input[@id="login-password-input"]';
    this.button = '//button[@id="login-submit-button"]';
    this.homeElement = '//h1[contains(text(), "Home")]';
    this.errorMessage = "//*[@class='bui-notification__message-container']";
  }

  /**
   * Opens a Chromium browser, navigates to the login page URL, and initializes a new page.
   */
  async goToThisIsBudPage() {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();
    await this.page.goto(this.url);
  }

  /**
   * Fills the email and password input fields with the provided values.
   * @param {string} username - The username to be filled in the email field.
   * @param {string} password - The password to be filled in the password field.
   */
  async fillingForm(username, password) {
    await this.page.fill(this.email, username);
    await this.page.fill(this.password, password);
  }

  /**
   * Clicks the login button on the page.
   */
  async clickButton() {
    await this.page.click(this.button);
  }

  /**
   * Waits for navigation to complete and checks if the current URL contains the expected value.
   * @param {string} value - The expected value to be contained in the URL.
   */
  async checkUrl(value, navigation) {
    if (navigation) {
      await this.page.waitForNavigation();
    }
    expect(this.page.url()).toContain(value);
  }

  /**
   * Waits for the error message element to become visible on the page and checks if the current URL contains the expected value.
   * @param {string} value - The expected value to be contained in the URL.
   */
  async checkErrorMessage() {
    await this.page.waitForSelector(this.errorMessage, {
      state: "visible",
      timeout: 2000,
    });
  }

  /**
   * Waits for the home element to become visible on the page.
   */
  async checkHomeElementVisible() {
    await this.page.waitForSelector(this.homeElement, {
      state: "visible",
      timeout: 2000,
    });
  }

  /**
   * Closes the Chromium browser instance.
   */
  async close() {
    await this.browser.close();
  }
}

module.exports = LoginPage;
