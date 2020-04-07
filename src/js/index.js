import "../scss/main.scss";
import Game from "./Game";

function play() {
  const game = new Game();
  document.querySelector(".btn--start").addEventListener("click", event => {
    event.preventDefault();
    game.startGame();
  });
}
play();
