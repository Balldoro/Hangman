class View {
  init(word) {
    this.showWordContainer(word);
    this.showKeyboard();
  }

  showWordContainer(word) {
    const wordContainer = document.createElement("div");
    wordContainer.classList.add("word");
    document.querySelector(".hangman").appendChild(wordContainer);
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

  showKeyboard() {
    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    document.querySelector(".hangman").appendChild(keyboard);
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
  }
}

export default View;
