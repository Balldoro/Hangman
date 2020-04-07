import Keyboard from "./Keyboard";
import View from "./View";
import WordData from "./WordData";
import state from "./state";

class Game {
  constructor() {
    this.settings = document.querySelector(".settings");
    this.keyboard = new Keyboard();
    this.view = new View();
    this.wordData = new WordData();
  }

  startGame() {
    state.reset();
    this.getSettings();
    this.wordData.getWord().then(word => {
      state.updateWord(word);
      this.view.init();
      this.keyboard.init();
    });
  }

  getSettings() {
    state.updatePossibleMistakes(this.settings.mistakes.value);
    state.updateDifficulty(this.settings.difficulty.value);
    this.settings.reset();
  }
}

export default Game;
