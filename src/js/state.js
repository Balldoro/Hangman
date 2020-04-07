const state = {
  word: "",
  difficulty: "",
  possibleMistakes: 10,
  madeMistakes: 0,
  pressedKey: "",
  usedKeys: [],
  correctGuesses: [],
  updateWord(word) {
    this.word = word;
  },
  updateDifficulty(difficulty) {
    this.difficulty = difficulty;
  },
  updateMadeMistakes() {
    this.madeMistakes++;
  },
  updatePossibleMistakes(possibleMistakes) {
    this.possibleMistakes = Number(possibleMistakes);
  },
  updateKeys(key) {
    this.pressedKey = key;
    this.usedKeys.push(key);
  },
  updateCorrectGuesses(key) {
    this.correctGuesses.push(key);
  },
  reset() {
    this.word = "";
    this.possibleMistakes = 10;
    this.madeMistakes = 0;
    this.pressedKey = "";
    this.usedKeys = [];
    this.correctGuesses = [];
  }
};

export default state;
