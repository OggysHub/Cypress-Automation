const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1080,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  //pageLoadTimeout: 60000

});