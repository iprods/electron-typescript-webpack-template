import { app, BrowserWindow } from 'electron'
import isDev from 'electron-is-dev'

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
  if (isDev) {
    console.info('Loading in dev mode')
    mainWindow.webContents.openDevTools()
  }
  mainWindow.on('close', () => app.quit())
}

app.on('ready', () => onReady())
app.on('window-all-closed', () => app.quit())
console.log(`Electron version ${app.getVersion()}`)
