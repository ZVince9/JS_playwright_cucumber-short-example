// Import the TodoPage class from the "./todoPage" module
const TodoPage = require("./todoPage");

// Create a class ExtendPage that extends the TodoPage class
class ExtendPage extends TodoPage {
  constructor(name, good) {
    // Call the constructor of the parent class (TodoPage) with the 'name' parameter
    super(name);
    this.good = good; // Initialize the 'good' property specific to ExtendPage
  }

  /**
   * Logs the combination of 'name' and 'good' properties.
   * If LOG_EXAMPLE_ONE is set to true, the combination will be logged.
   */
  async console() {
    if (process.env.LOG_EXAMPLE_ONE === "true") {
      console.log(`${this.name} ${this.good}`);
    }
  }
}

// Export the ExtendPage class
module.exports = ExtendPage;
