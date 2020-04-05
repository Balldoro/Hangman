import "../scss/main.scss";
import Game from "./Game";

const game = new Game();
document.addEventListener("DOMContentLoaded", () => game.startGame());
