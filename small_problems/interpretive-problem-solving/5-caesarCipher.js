// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('Z', 0));       // "Z"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

/*
input: string, number
output: string

rules: each letter is substituted by the letter located a given number of positions away from the alphabet (key)
substituted letters are in the same letter case as the original letter
if the key is more than the length of the alphabet, it wraps around from the beginning (27 can also be 1)

algorithm:
convert the string to an array. 
map through the array
if the character is an uppercase or lower case letter, then shift
if the character is not alphabetic, ignore and just return that character

shift algorithm:
get the character code of the letter and add the number from the 2nd argument to shift. Subtract 65 or 97 depending on if the character is uppercase or lowercase. Then modulo 25 to account for wrapping around and add either 65 or 97 depending on if the character is uppercase or lowercase. convert that code back to a letter.
*/

function caesarEncrypt(str, num) {
  return str.split("").map(char => {
    if (/[a-z]/gi.test(char)) {
      return shift(char, num);
    } else {
      return char;
    }
  }).join("");
}

function shift(letter, number) {
  let newCharCode;
  if (/[A-Z]/g.test(letter)) {
    newCharCode = ((letter.charCodeAt() + number - 65) % 26) + 65;
  } else {
    newCharCode = ((letter.charCodeAt() + number - 97) % 26) + 97;
  }
  return String.fromCharCode(newCharCode);
}
