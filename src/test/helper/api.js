// Import the axios library for making HTTP requests
const axios = require("axios");

// Define an asynchronous function 'apiCall' that takes a parameter 'about'
const apiCall = async (about) => {
  try {
    // Make a GET request to Chuck Norris API with the provided 'about' parameter
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${about}`
    );

    // Return the data from the response
    return response.data;
  } catch (error) {
    // If an error occurs during the API call, log the error
    console.log(error);
  }
};

// Export the 'apiCall' function to be used in other modules
module.exports = { apiCall };
