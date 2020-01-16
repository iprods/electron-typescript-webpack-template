import { app, BrowserWindow } from 'electron'
import isDev from 'electron-is-dev'
import printDevInfo from '../modules/print-dev-info'

declare let UI_MAIN_WINDOW_WEBPACK_ENTRY: string

/**
 * This file is the main entry point for the Electron app.
 *
 * It orchestrates all windows and their event listeners.
 */

let mainWindow: Electron.BrowserWindow

const onReady = (): void => {
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
    printDevInfo(app, process)
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('close', () => app.quit())
}

app.on('ready', () => onReady())
app.on('window-all-closed', () => app.quit())

