export default class Screen {
  public static init(document: Document) {
    // Avoid flickering UI -> only enable show contents here
    document.getElementsByTagName("body")[0].removeAttribute("style");
  }
}