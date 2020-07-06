let statement = "The Flintstones Rock";

let letters = statement.split("").filter(letter => letter !== " ");
let frequencyOfLetters = {};
letters.forEach(letter => {
  Object.keys(frequencyOfLetters)
  if (!Object.keys(frequencyOfLetters).includes(letter)) {
    frequencyOfLetters[letter] = 1;
  } else {
    frequencyOfLetters[letter] += 1;
  }
});

console.log(frequencyOfLetters);
