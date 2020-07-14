//takes 1 integer argment
//returns true if abs val is odd
//test cases: -5 -> true
//0 -> false
//6 -> false

function isOdd(num) {
  return Math.abs(num) % 2 !== 0;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true