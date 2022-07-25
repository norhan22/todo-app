import BrowserWinHandler from "./BrowserWinHandler";
import initBDFolder from "./initBDFolder";

const winHandler = new BrowserWinHandler({
  height: 600,
  width: 1000,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
  },
});

winHandler.onCreated((_browserWindow) => {
  winHandler.loadPage("/");

  // Or load custom url
  // _browserWindow.loadURL(process.env.DEV_SERVER_URL);
});
winHandler.created().then((res) => {
  winHandler.sendWebContent([{ name: "DBFolderPath", data: initBDFolder }]);
});

export default winHandler;
