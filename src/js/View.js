import state from "./state";

class View {
  constructor() {
    this.gameBoard = document.querySelector(".hangman");
  }

  init() {
    this.showWordContainer();
    this.showKeyboard();
    this.showMistakesContainer();
  }

  showWordContainer() {
    const wordContainer = document.createElement("div");
    wordContainer.classList.add("word");
    this.gameBoard.appendChild(wordContainer);
    for (let i = 0; i < state.word.length; i++) {
      const placeholder = this.createPlaceholder();
      wordContainer.appendChild(placeholder);
    }
  }

  createPlaceholder() {
    const placeholder = document.createElement("div");
    placeholder.classList.add("word__placeholder");
    return placeholder;
  }

  putLetterIntoPlaceholder(letter, index) {
    const placeholders = document.querySelectorAll(".word__placeholder");
    placeholders[index].textContent = letter;
  }

  showMistakesContainer() {
    const mistakesContainer = this.createMistakesContainer();
    mistakesContainer.innerHTML = this.showMistakesMessage();
    this.gameBoard.appendChild(mistakesContainer);
  }

  showMistakesMessage() {
    return `<span>You have used 0 of ${state.possibleMistakes} possible mistakes `;
  }

  updateMistakesMessage() {
    document.querySelector(
      ".mistakes"
    ).innerHTML = `<span>You have used ${state.madeMistakes} of ${state.possibleMistakes} possible mistakes `;
  }

  createMistakesContainer() {
    const mistakesContainer = document.createElement("div");
    mistakesContainer.classList.add("mistakes");
    return mistakesContainer;
  }

  showKeyboard() {
    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    this.gameBoard.appendChild(keyboard);
    const allKeys = this.createKeys();
    allKeys.forEach(key => keyboard.appendChild(key));
  }

  createKeys() {
    const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(key => {
      const singleKey = document.createElement("button");
      singleKey.classList.add("keyboard__key");
      singleKey.textContent = key;
      return singleKey;
    });
    return keys;
  }

  disableKey(key) {
    key.classList.add("keyboard__key--disabled");
    key.setAttribute("disabled", true);
  }

  showWinView() {
    const winView = this.createWinView();
    this.gameBoard.appendChild(winView);
  }

  createWinView() {
    const winView = document.createElement("div");
    winView.classList.add("game-view--win");
    winView.textContent = "You win!";
    return winView;
  }
}

export default View;
