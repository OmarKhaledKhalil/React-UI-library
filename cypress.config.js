const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Specify the base URL for your application
    baseUrl: 'http://localhost:3000', // Change this to your application's URL if different
    supportFile: 'cypress/support/e2e.js', // Path to support file
  },
});
