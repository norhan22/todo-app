import { app } from "electron";

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

require("./mainWindow.js");
try {
  require("electron-reloader")(module);
} catch (_) {}
