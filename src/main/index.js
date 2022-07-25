import { app, BrowserWindow, ipcMain } from "electron";

const Store = require("electron-store"),
  electronStore = new Store(),
  { initDB } = require("electron-data-holder"),
  dataPath = app.getPath("userData"),
  fs = require("fs"),
  DBFolderPath = `${dataPath}/todo`;

// Create new folder for the app store
try {
  if (!fs.existsSync(DBFolderPath)) {
    fs.mkdirSync(DBFolderPath);
  }
} catch (err) {
  console.error(err);
}
electronStore.set("DBFolderPath", DBFolderPath);
console.log("DBFolderPath", DBFolderPath);
initDB({
  // key: 'the-encryption-key',
  customPath: DBFolderPath,
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

// let win;
//
// function createWindow() {
//   // Create the browser window.
//   win = MainBrowserWindow;
//
//   // and load whatever file you want
//   // win.loadFile('aut.html')
//   // win.loadURL("http://localhost:4600");
// }
//
// app.on("ready", createWindow);
app.on("ready", () => {});
require("./mainWindow");
try {
  require("electron-reloader")(module);
} catch (_) {}
