import state from "./state";

class View {
  constructor() {
    this.gameBoard = document.querySelector(".hangman");
    this.newGameView = document.querySelector(".new-game");
  }

  init() {
    this.reset();
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
    return `<span>You have used ${state.madeMistakes} of ${state.possibleMistakes} possible mistakes `;
  }

  updateMistakesMessage() {
    document.querySelector(".mistakes").innerHTML = this.showMistakesMessage();
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
    this.showRestartButton(winView);
    this.gameBoard.appendChild(winView);
  }

  createWinView() {
    const winView = document.createElement("div");
    winView.classList.add("game-view--win");
    winView.innerHTML = `
    <h2 class="game-view__title">You won!</h2>
    <p class="game-view__text">You guessed the word
    <span class="game-view__text--important">${state.word.toLowerCase()}
    </span> in <span class="game-view__text--important">${
      state.usedKeys.length
    }</span> attempt</p>
    `;
    return winView;
  }

  showLostView() {
    const lostView = this.createLostView();
    this.showRestartButton(lostView);
    this.gameBoard.appendChild(lostView);
  }

  createLostView() {
    const lostView = document.createElement("div");
    lostView.classList.add("game-view--lost");
    lostView.innerHTML = `
    <h2 class="game-view__title">You lost!</h2>
    <p class="game-view__text">The word you were looking for was 
    <span class="game-view__text--important">${state.word.toLowerCase()}
    </span></p>
    <p class="game-view__text">You missed <span class="game-view__text--important">${state
      .word.length - state.correctGuesses.length}</span> letters</p>
    `;
    return lostView;
  }

  showRestartButton(view) {
    const restartButton = this.createRestartButton();
    view.appendChild(restartButton);
  }

  createRestartButton() {
    const restartButton = document.createElement("button");
    restartButton.classList.add("btn", "btn--restart");
    restartButton.textContent = "Play again?";
    restartButton.addEventListener("click", () => this.restartView());
    return restartButton;
  }

  restartView() {
    this.reset();
    this.gameBoard.appendChild(this.newGameView);
  }

  reset() {
    while (this.gameBoard.firstChild) {
      this.gameBoard.removeChild(this.gameBoard.firstChild);
    }
  }
}

export default View;
