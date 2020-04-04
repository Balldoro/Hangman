class View {
  constructor() {
    this.gameBoard = document.querySelector(".hangman");
  }

  init(word) {
    this.showWordContainer(word);
    this.showKeyboard();
    this.showMistakesContainer();
  }

  showWordContainer(word) {
    const wordContainer = document.createElement("div");
    wordContainer.classList.add("word");
    this.gameBoard.appendChild(wordContainer);
    for (let i = 0; i < word.length; i++) {
      const placeholder = this.createPlaceholder();
      wordContainer.appendChild(placeholder);
    }
  }

  createPlaceholder() {
    const placeholder = document.createElement("div");
    placeholder.classList.add("word__placeholder");
    return placeholder;
  }

  showMistakesContainer() {
    const mistakesContainer = this.createMistakesContainer();
    mistakesContainer.innerHTML = this.showMistakesMessage();
    this.gameBoard.appendChild(mistakesContainer);
  }

  showMistakesMessage() {
    return `<span>You have used 0 of 10 possible mistakes `;
  }

  updateMistakesMessage(counter) {
    document.querySelector(
      ".mistakes"
    ).innerHTML = `<span>You have used ${counter} of 10 possible mistakes `;
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
}

export default View;
