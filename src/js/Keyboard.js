import View from "./View";

class Keyboard {
  constructor() {
    this.view = new View();
  }

  disableKey() {
    document.querySelector(".keyboard").addEventListener("click", event => {
      const key = event.target;
      if (key.tagName === "BUTTON") {
        this.view.disableKey(key);
      }
    });
  }
}

export default Keyboard;
