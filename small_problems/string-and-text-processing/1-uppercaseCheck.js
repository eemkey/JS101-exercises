//input: string
//output: boolean. if all alphabetic characters are uppercase, return true. otherwise, return false. ignore other non-alphabetic characters.

function isUppercase(str) {
  return str === str.toUpperCase();
}



console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true