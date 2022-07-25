const { defineConfig } = require("cypress");
require("dotenv").config();
console.log("process.env.DEV_SERVER_URL", process.env.DEV_SERVER_URL);
module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.DEV_SERVER_URL,
    // experimentalSessionAndOrigin: true,
    plugins: ["@cypress/electron-plugin"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // config.env.APILINK = process.env.VUE_APP_AXSIOS_LINK;
      return config;
    },
  },
});
