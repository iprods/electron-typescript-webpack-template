export const init = (document: Document): void => {
  // Avoid flickering UI -> only enable show contents here
  document.getElementsByTagName('body')[0].removeAttribute('style')
}
