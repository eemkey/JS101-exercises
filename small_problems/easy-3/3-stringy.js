//function takes 1 argument (positive integer) and returns string of alternating 1's and 0's, always beginning with 1. Length of string should match the given integer.
//input: positive integer
//output: string of 1s's and 0's

//create function that takes a number as an argument
//create variable and set it to an empty string
//make a loop
//inside loop, create variable idx and set it to 0
//while idx increments by 1 each time the loop runs, and while idx is less than the number argument, append to string 1 if idx is even and 0 if idx is odd.
//return str

function stringy(num) {
  let str = "";
  for (let idx = 0; idx < num; idx++) {
    str += ((idx % 2 === 0) ? 1 : 0);
  }
  return str;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"