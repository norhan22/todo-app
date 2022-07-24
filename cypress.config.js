const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.DEV_SERVER_URL,
    // experimentalSessionAndOrigin: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      // config.env.APILINK = process.env.VUE_APP_AXSIOS_LINK;
      return config;
    },
  },
});
