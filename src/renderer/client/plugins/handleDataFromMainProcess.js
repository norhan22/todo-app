const ipcRenderer = require("electron").ipcRenderer;

// Get DBFolderPath
ipcRenderer.on("DBFolderPath", (event, message) => {
  window.localStorage.setItem("DBFolderPath", message);
});

window.dispatchEvent(
  new CustomEvent("DBFolderPath", {
    detail: {
      storage: localStorage.getItem("DBFolderPath"),
    },
  })
);
