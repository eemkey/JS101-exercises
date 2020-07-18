//input: array of integers
//output: results as a string with value rounded to 3 decimal spaces

//function that takes in 1 array of integers
//multiply all integers together, and set result to a variable called multiplied
//divide result by # of entries in the array, and assign that to another variable called divided
//return divided as a string with the value rounded to 3 decimal places

function multiplicativeAverage(arr) {
  let multiplied = arr.reduce((acc, curr) => acc * curr);
  let divided = multiplied / arr.length;
  return divided.toFixed(3);
}


console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

