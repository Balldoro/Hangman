import View from "./View";
import state from "./state";

class Keyboard {
  constructor() {
    this.view = new View();
  }

  init() {
    document
      .querySelector(".keyboard")
      .addEventListener("click", event => this.handleOnClick(event));
  }

  handleOnClick(event) {
    const key = event.target;
    if (key.tagName === "BUTTON") {
      state.updateKeys(key.textContent);
      this.disableKey(key);
      this.isKeyInWord(key);
    }
  }

  disableKey(key) {
    this.view.disableKey(key);
  }

  isKeyInWord(key) {
    if (state.word.indexOf(key.textContent) === -1) {
      this.keyIsNotInWord();
    } else {
      this.keyIsInWord(key);
    }
  }

  keyIsNotInWord() {
    state.updateMadeMistakes();
    this.view.updateMistakesMessage();
  }

  keyIsInWord(key) {
    state.word.split("").filter((letter, index) => {
      if (letter === key.textContent) {
        state.updateCorrectGuesses(key);
        state.updateIsGameWon(
          state.word.length === state.correctGuesses.length
        );
        this.view.putLetterIntoPlaceholder(letter, index);
        this.isGameWon();
      }
    });
  }

  isGameWon() {
    if (state.isGameWon) {
      this.view.showWinView();
    }
  }
}

export default Keyboard;
