import "../scss/main.scss";
import WordData from "./Word";

const wordData = new WordData();

wordData.getWord().then(word => console.log(word));
