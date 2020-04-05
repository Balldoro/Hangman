import Keyboard from "./Keyboard";
import View from "./View";
import WordData from "./WordData";
import state from "./state";

class Game {
  constructor() {
    this.keyboard = new Keyboard();
    this.view = new View();
    this.wordData = new WordData();
  }

  startGame() {
    this.wordData.getWord().then(word => {
      state.updateWord(word);
      this.view.init();
      this.keyboard.init();
    });
  }

  restartGame() {
    state.reset();
    this.view.reset();
  }
}

export default Game;
