import { app, BrowserWindow } from "electron";

const { initDB } = require("electron-data-holder");

// the encryption key must be 32 characters long.

initDB({
  // key: 'the-encryption-key',
  customPath: "src/DB/",
});

// pass null instead of the key if you don't wan't to pass it but you want to pass a folder path;
// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});
// Standard stuff

// Load here all startup windows
require("./mainWindow");

try {
  require("electron-reloader")(module);
} catch (_) {}
