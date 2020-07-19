//input: positive integer
//output: array of digits in the number

//convert integer to a string
//split digits into array
//loop through array and convert digits back to number

function digitList(num) {
  return String(num).split("").map(digit => Number(digit));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
