import View from "./View";

class Keyboard {
  constructor() {
    this.view = new View();
    this.mistakes = 0;
  }

  handleOnClick(word) {
    document.querySelector(".keyboard").addEventListener("click", event => {
      const key = event.target;
      this.disableKey(key);
      this.isKeyInWord(word, key);
    });
  }

  disableKey(key) {
    if (key.tagName === "BUTTON") {
      this.view.disableKey(key);
    }
  }

  isKeyInWord(word, key) {
    if (word.indexOf(key.textContent) === -1) {
      this.mistakes++;
      this.view.updateMistakesMessage(this.mistakes);
    }
  }
}

export default Keyboard;
