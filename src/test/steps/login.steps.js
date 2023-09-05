const LoginPage = require("../pages/loginPage");

const { Given, Then, When } = require("@cucumber/cucumber");

const loginPage = new LoginPage();

Given("an unauthenticated user navigates to the console", async () => {
  await loginPage.goToThisIsBudPage();
});

When("correct login details are submitted", async () => {
  await loginPage.fillingForm(process.env.USERNAME, process.env.PASSWORD);
  await loginPage.clickButton();
});

When("incorrect login details are submitted", async () => {
  await loginPage.fillingForm(
    process.env.INCORRECT_USERNAME,
    process.env.INCORRECT_PASSWORD
  );
  await loginPage.clickButton();
});

Then("the user is successfully authenticated", async () => {
  await loginPage.checkUrl("/home", true);
});

Then("the user sees an error message", async () => {
  await loginPage.checkErrorMessage();
  await loginPage.checkUrl("/login");
});

Then("the console landing page is displayed", async () => {
  await loginPage.checkHomeElementVisible();
  await loginPage.close();
});

Then("the console home page is displayed", async () => {
  await loginPage.close();
});
