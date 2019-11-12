import { app, BrowserWindow } from 'electron'
let mainWindow: Electron.BrowserWindow

const onReady = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadURL(UI_MAIN_WINDOW_WEBPACK_ENTRY)
  mainWindow.on('close', () => app.quit())
}

app.on('ready', () => onReady())
app.on('window-all-closed', () => app.quit())
console.log(`Electron version ${app.getVersion()}`)
