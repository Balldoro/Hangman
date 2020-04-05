import "../scss/main.scss";
import Game from "./Game";

const game = new Game();
document
  .querySelector(".btn--start")
  .addEventListener("click", event => game.startGame(event));
