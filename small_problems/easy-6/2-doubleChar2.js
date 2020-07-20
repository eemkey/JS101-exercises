//input: string
//output: string

//take string, double every consonant character in string, return new string. nothing else should be doubled.
//convert string to array
//loop through array, check if character if consonant. if it is, then return doubled consonant. if not, then return character.

function doubleConsonants(str) {
  return str.split("").map(char => {
    if (char.match(/[bcdfghjklmnpqrstvwxyz]/gi)) {
      return char + char;
    } else {
      return char;
    }
  }).join("");
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""