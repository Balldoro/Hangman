import "../scss/main.scss";
import WordData from "./WordData";
import View from "./View";
import Keyboard from "./Keyboard";

const wordData = new WordData();
const view = new View();
const keyboard = new Keyboard();
wordData.getWord().then(word => {
  view.init(word);
  keyboard.handleOnClick(word);
});
