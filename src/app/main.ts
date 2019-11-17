import { app, BrowserWindow } from 'electron'
import isDev from 'electron-is-dev'

declare var UI_MAIN_WINDOW_WEBPACK_ENTRY: string

/**
 * This file is the main entry point for the Electron app.
 *
 * It orchestrates all windows and their event listeners.
 */

let mainWindow: Electron.BrowserWindow

const onReady = () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadURL(UI_MAIN_WINDOW_WEBPACK_ENTRY)
  if (isDev) {
    printDevInfo()
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('close', () => app.quit())
}

app.on('ready', () => onReady())
app.on('window-all-closed', () => app.quit())

const printDevInfo = () => {
  console.info(`
Loading in dev mode

${app.name}

App version:      ${app.getVersion()}
Electron version: ${process.versions.electron}
Chrome version:   ${process.versions.chrome}
V8 version:       ${process.versions.v8}
NodeJS version:   ${process.version}

App path:         ${app.getAppPath()}
User data path:   ${app.getPath('userData')}

In order to reload the app type "rs"
  `)
}
