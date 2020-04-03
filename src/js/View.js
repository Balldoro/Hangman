class View {
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
}

export default View;
