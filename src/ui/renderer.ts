import {remote, shell} from 'electron';
import '../../assets/base.css';
import * as Screen from '../modules/screen';

const app = remote.app

const openLinkInBrowser = (e: Event): void => {
  const el = e.target as HTMLElement
  const link = el.dataset.repoLink
  shell.openExternal(link)
};

const versionElement = document.querySelector('#version')
if (versionElement) {
  versionElement.textContent = `v${app.getVersion()}`
}
const repoLinkElement = document.querySelector('#repoLink')
if (repoLinkElement) {
  repoLinkElement.addEventListener('click', openLinkInBrowser)
}

Screen.init(document)
