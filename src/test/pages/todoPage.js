const { chromium, expect } = require("@playwright/test");

class TodoPage {
  constructor(name) {
    this.name = name;
  }

  /**
   * Opens a browser and navigates to the application.
   */
  async open() {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();
    await this.page.goto("https://todomvc.com/");
  }

  /**
   * Clicks a specific tab with the given value.
   * @param {string} value - The value of the tab to be clicked.
   */
  async clickTab(value) {
    await this.page.waitForLoadState("domcontentloaded");
    await this.page.click(`//div[contains(text(), "${value}")]`);
  }

  /**
   * Clicks inside a specific tab based on its index.
   * @param {number} tab - The index of the tab to be clicked.
   */
  async clickInsideTab(tab) {
    const locator = `(//li[contains(@class,'routing')])[${tab}]`;
    await this.page.waitForSelector(locator, {
      state: "visible",
      timeout: 2000,
    });
    await this.page.click(locator);
  }

  /**
   * Adds multiple todo items with the given value.
   * @param {string} todoitem - The value of the todo item.
   * @param {string} value - The attribute value to locate the input field.
   */
  async addTodoItems(todoitem, value) {
    await this.page.waitForLoadState("domcontentloaded");
    for (let i = 1; i <= 5; i++) {
      await this.page.waitForSelector(`//h1[contains(text(), "todos")]`, {
        state: "visible",
        timeout: 2000,
      });
      await this.page
        .locator(`//input[contains(@${value},'new-todo')]`)
        .type(`${i} ${todoitem}`);
      await this.page.keyboard.press("Enter");
      let locator = this.page.locator(
        `(//label[contains(text(), "${todoitem}")])[${i}]`
      );
      await expect(locator).toContainText(todoitem);
    }
  }

  /**
   * Closes the browser instance.
   */
  async close() {
    await this.browser.close();
  }
}

module.exports = TodoPage;
