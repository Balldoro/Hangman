import "../scss/main.scss";
import WordData from "./WordData";
import View from "./View";
import Keyboard from "./Keyboard";
import state from "./state";

const wordData = new WordData();
const view = new View();
const keyboard = new Keyboard();
wordData.getWord().then(word => {
  state.updateWord(word);
  view.init();
  keyboard.init();
});
