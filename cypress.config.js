const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', ///for html report
  e2e: {
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure= true;
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', cucumber()) //For cypress cucumber preprocessor
    },
    specPattern: "cypress/e2e/*.feature",
    "video": true,
    "videosFolder": "cypress/videos",
    "screenshotsFolder": "cypress/screenshots",

  },
});
