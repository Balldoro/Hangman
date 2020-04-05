const state = {
  word: "",
  possibleMistakes: 10,
  madeMistakes: 0,
  pressedKey: "",
  usedKeys: [],
  updateWord(word) {
    this.word = word;
  },
  updateMadeMistakes() {
    this.madeMistakes++;
  },
  updateKeys(key) {
    this.pressedKey = key;
    this.usedKeys.push(key);
  }
};

export default state;
