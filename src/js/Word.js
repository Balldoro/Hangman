class WordData {
  async getWord() {
    const response = await fetch(
      "https://wordsapiv1.p.rapidapi.com/words/?random=true",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "f4b6679e41msh7e4743b81b0a06fp153cdajsna84d3c50b660"
        }
      }
    );
    const data = await response.json();
    const word = data.word.toUpperCase();
    return word;
  }
}
export default WordData;
