 
const { defineConfig } = require("cypress");
const gmailTester = require("gmail-tester");
const path = require("path");

module.exports = defineConfig({
  pageLoadTimeout: 16000,
  defaultCommandTimeout: 9000,
  viewportWidth: 1200,
  viewportHeight: 1200,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) { 
      require('cypress-mochawesome-reporter/plugin')(on);
      
       on("task", {
        "gmail:check": async (args) => {
          const { from, to, subject } = args;
          const email = await gmail.check_inbox(
          path.resolve(__dirname, "OAuth.json"),
          path.resolve(__dirname, "AccessToken.json"),
          args.options
        );
        return email;
      },
    });},
    env: {
    baseUrl:
      "https://staging.admin.matchit.rs/login/1bd35de3-40f0-45f4-bf37-32cd0ed2db91",
  },
}
});



    
    

