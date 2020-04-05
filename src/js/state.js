const state = {
  word: "",
  possibleMistakes: 10,
  madeMistakes: 0,
  pressedKey: "",
  usedKeys: [],
  correctGuesses: [],
  isGameWon: false,
  updateWord(word) {
    this.word = word;
  },
  updateMadeMistakes() {
    this.madeMistakes++;
  },
  updateKeys(key) {
    this.pressedKey = key;
    this.usedKeys.push(key);
  },
  updateCorrectGuesses(key) {
    this.correctGuesses.push(key);
  },
  updateIsGameWon(bool) {
    this.isGameWon = bool;
  }
};

export default state;
