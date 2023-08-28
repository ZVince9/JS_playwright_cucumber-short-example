// Import the Given and Then functions from the Cucumber library
const { Given, Then } = require("@cucumber/cucumber");

// Import the apiCall function from the API helper
const { apiCall } = require("../helper/api");

// Import the dotenv library to load environment variables
require("dotenv").config();

let responseData; // To store the response data

// Define a step for making an API call
Given("There is API and its called {string}", async (about) => {
  // Call the apiCall function with the provided 'about' parameter
  responseData = await apiCall(about);
});

// Define a step for verifying the number of jokes in the response
Then("I get only {string} jokes", (amount) => {
  if (responseData.result.length >= amount) {
    // Extract the first 'amount' jokes from the response
    const twoJokes = responseData.result.slice(0, amount);

    // Check if logging the API response is enabled in the environment
    if (process.env.LOG_API === "true") {
      console.log(`${amount} Jokes:`, twoJokes);
    }
  } else {
    console.log("Insufficient jokes in the response.");
  }
});
