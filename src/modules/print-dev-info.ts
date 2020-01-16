import {App} from "electron"

export default (app: App, process: NodeJS.Process): void => {
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
