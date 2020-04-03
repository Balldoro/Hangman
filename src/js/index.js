import "../scss/main.scss";
import WordData from "./Word";
import View from "./View";

const wordData = new WordData();
const view = new View();
wordData.getWord().then(word => view.init(word));
