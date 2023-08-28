const { Given, Then } = require("@cucumber/cucumber");
const { apiCall } = require("../helper/api");
require("dotenv").config();

let responseData; // To store the response data

Given("There is API and its called {string}", async (about) => {
  responseData = await apiCall(about);
});

Then("I get only {string} jokes", (amount) => {
  if (responseData.result.length >= amount) {
    const twoJokes = responseData.result.slice(0, amount); // Extract the first two jokes
    if (process.env.LOG_API === "true") {
      console.log(`${amount} Jokes:`, twoJokes);
    }
  } else {
    console.log("Insufficient jokes in the response.");
  }
});
