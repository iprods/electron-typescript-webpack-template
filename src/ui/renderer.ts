import {remote} from 'electron'
import '../../assets/base.css'

const app = remote.app

const versionElement = document.querySelector('#version')
if (versionElement) {
  versionElement.textContent = `v${app.getVersion()}`
}
