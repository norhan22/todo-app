const { storeDB } = require("electron-data-holder");

const data = storeDB(
  {
    tasks: [],
  },
  {
    fileName: "tasks",
    // encryption: true,
  }
);

module.exports = data;
