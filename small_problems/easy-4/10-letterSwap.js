//given a string of words separated by spaces
//swap first and last letter of every word
//every word contains at least 1 letter
//string always contains at least one word
//string has nothing but words and spaces
//data structure: array
//input: string of words
//output: string of words

function swap(str) {
  return str.split(" ").map(word => swapFirstAndLast(word)).join(" ");
}

function swapFirstAndLast(word) {
  if (word.length === 1) {
    return word;
  } else {
  return word[word.length - 1] + word.slice(1, -1) + word[0];
  }
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"