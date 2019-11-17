import {remote} from 'electron'
import '../../assets/base.css'
import Screen from '../modules/screen'

const app = remote.app

const versionElement = document.querySelector('#version')
if (versionElement) {
  versionElement.textContent = `v${app.getVersion()}`
}

Screen.init(document)
