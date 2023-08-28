# Test Playwright Cucumber Project

This is a sample Playwright Cucumber project that demonstrates how to use Playwright and Cucumber together to automate tests.

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Description

This project showcases how to create end-to-end tests for a web application using Playwright and Cucumber. It includes example feature files and step definitions to demonstrate the integration of Playwright and Cucumber for behavior-driven development (BDD) testing.

## Playwright

[Playwright](https://github.com/microsoft/playwright) is a Node.js library that provides a high-level API for automating browsers (Chromium, Firefox, and WebKit) for various automation tasks, including testing.

## Cucumber

[Cucumber](https://github.com/cucumber/cucumber-js) is a popular tool for behavior-driven development (BDD) that allows you to write human-readable descriptions of software features and then execute them as automated tests.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/)

### Installation

1. Clone this repository to your local machine:

   ```sh
   git clone https://github.com/your-username/test-playwright-cucumber.git

   ```

2. npm install

## Runing Tests

- npm test
- npm run api
- npm run all

^ depending which suite to run

## Project Structure

test-playwright-cucumber/
- ├── src/
- │ ├── test/
- │ │ ├── features/
- │ │ │ ├── todo.feature
- │ │ │ ├── api.feature
- │ │ ├── step_definitions/
- │ │ │ ├── todoSteps.js
- │ │ │ ├── apiSteps.js
- ├── package.json
- ├── README.md

## Dependencies

- @cucumber/cucumber: Cucumber framework for behavior-driven development.
- @playwright/test: Playwright library for browser automation.
- axios: Promise-based HTTP client for making API requests.
- dotenv: Loads environment variables from a .env file.
