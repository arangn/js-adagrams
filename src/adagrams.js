const Adagrams = {
  drawLetters() {
    const letters = [
      "A", "A", "A", "A", "A", "A", "A", "A", "A",
      "B", "B",
      "C", "C",
      "D", "D", "D", "D",
      "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
      "F", "F",
      "G", "G", "G",
      "H", "H",
      "I", "I", "I", "I", "I", "I", "I", "I", "I",
      "J",
      "K",
      "L", "L", "L", "L",
      "M", "M",
      "N", "N", "N", "N", "N", "N",
      "O", "O", "O", "O", "O", "O", "O", "O",
      "P", "P",
      "Q",
      "R", "R", "R", "R", "R", "R",
      "S", "S", "S", "S",
      "T", "T", "T", "T", "T", "T",
      "U", "U", "U", "U",
      "V", "V",
      "W", "W",
      "X",
      "Y", "Y",
      "Z"
    ];
    let lettersInHand = []
    for (let i = 0; i < 10; i++) {
      let rand = letters.splice(Math.floor(Math.random() * letters.length), 1)[0];
      lettersInHand.push(rand);
    }
    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    let inputArray = input.split("");
    let lettersArray = lettersInHand.slice();

    for (let letter of inputArray) {
      let index = lettersArray.indexOf(letter);
      if (index > -1) {
        lettersArray.splice(index, 1);
      } else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {
    const scoreChart = {
      "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
      "D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4,
      "Y": 4, "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10
    };
    let score = 0;
    for (let i = 0; i < word.length; i += 1) {
      let letter = word.toUpperCase();
      score += scoreChart[letter[i]];
    }
    if (word.length >= 7) {
      score += 8;
    }
    return score;
  },
  
  highestScoreFrom(words) {
    let winningWord = {"word": null, "score": 0};
    for (let word of words) {
      if (this.scoreWord(word) > winningWord["score"]){
        winningWord["score"] = this.scoreWord(word)
        winningWord["word"] = word
      } else if (this.scoreWord(word) == winningWord["score"]) {
        if (word.length == 10 && winningWord["word"].length != 10) {
          winningWord["word"] = word
        } else if (word.length < winningWord["word"].length && winningWord["word"].length != 10) {
          winningWord["word"] = word
        }
      }
    }
    return winningWord;
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
