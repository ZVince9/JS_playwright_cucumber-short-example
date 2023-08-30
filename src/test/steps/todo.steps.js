// Import the Given and Then functions from the Cucumber library
const { Given, Then } = require("@cucumber/cucumber");

// Import the TodoPage and ExtendPage classes
const TodoPage = require("../pages/todoPage");
const ExtendPage = require("../pages/extendPage");

// Create instances of the TodoPage and ExtendPage classes
const todoPage = new TodoPage("Petras");
const extendPage = new ExtendPage("Zilvinas", "cucumber short test example");

// Define a step for navigating to the application
Given("User navigates to the application", async () => {
  // Open the browser and navigate to the application
  await todoPage.open();

  // Log a message using the ExtendPage's console function
  await extendPage.console();
});

// Define a step for clicking on the JavaScript tab
Then("User click on the javascript", async () => {
  await todoPage.clickTab("JavaScript");
});

// Define a step for clicking on a specific tab
Then("User click on this {string}", async function (tab) {
  await todoPage.clickInsideTab(tab);
});

// Define a step for adding a todo item
Then(
  "User types todo item {string}, {string}",
  async function (todoitem, value) {
    // Add multiple todo items using the provided values
    await todoPage.addTodoItems(todoitem, value);

    // Close the browser
    await todoPage.close();
  }
);

// THIS IS EXAMPLE FOR CUCUMBER JS USING FUNCITONAL WAY
// ----------------------------------------------------------------

// Given("User navigates to the application", async () => {
//   browser = await chromium.launch({ headless: true });
//   page = await browser.newPage();
//   await page.goto("https://todomvc.com/");
// });

// Then("User click on the javascript", async () => {
//   await page.waitForLoadState("domcontentloaded");
//   await page.click('//div[contains(text(), "JavaScript")]');
// });

// Then("User click on this {string}", async function (tab) {
//   let locator = `(//li[contains(@class,'routing')])[${tab}]`;
//   await page.waitForSelector(locator, {
//     state: "visible",
//     timeout: 2000,
//   });
//   await page.click(locator);
// });

// Then(
//   "User types todo item {string}, {string}",
//   async function (todoitem, value) {
//     await this.page.waitForLoadState("domcontentloaded");
//     for (let i = 1; i <= 10; i++) {
//       await this.page.waitForSelector(`//h1[contains(text(), "todos")]`, {
//         state: "visible",
//         timeout: 2000,
//       });
//       await this.page
//         .locator(`//input[contains(@${value},'new-todo')]`)
//         .type(`${i} ${todoitem}`);
//       await this.page.keyboard.press("Enter");
//       let locator = this.page.locator(
//         `(//label[contains(text(), "${todoitem}")])[${i}]`
//       );
//       await expect(locator).toContainText(todoitem);
//     }
//     await browser.close();
//   }
// );

// ----------------------------------------------------------------
