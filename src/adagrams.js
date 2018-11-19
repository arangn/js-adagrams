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
  }


};

// Do not remove this line or your tests will break!
export default Adagrams;
