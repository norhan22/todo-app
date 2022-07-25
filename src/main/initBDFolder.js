import { app } from "electron";

const { initDB } = require("electron-data-holder"),
  dataPath = app.getPath("appData"),
  fs = require("fs"),
  DBFolderPath = `${dataPath}/todo`;
console.log("DBFolderPath", DBFolderPath);
// Create new folder for the app store
try {
  if (!fs.existsSync(DBFolderPath)) {
    fs.mkdirSync(DBFolderPath);
  }
} catch (err) {
  console.error(err);
}

// Init DB
initDB({
  // key: 'the-encryption-key',
  customPath: DBFolderPath,
});

export default DBFolderPath;
