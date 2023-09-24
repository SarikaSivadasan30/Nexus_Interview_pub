/*
To avoid having duplicate variables and options on each config,
there is this module with common attributes and node setup to
acquire additional variables depending on tester (CLI) choice.
*/
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 25000,
  env: {
    GMAIL_CHECK_TIMEOUT: 30000,
    GMAIL_CHECK_DELAY: 3000,
  },
  retries: 1,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    // specPattern: ["cypress/e2e/auction.cy.js"]
  },
});
