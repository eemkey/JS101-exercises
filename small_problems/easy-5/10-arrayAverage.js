//input: array of integers
//output: number

//loop through array, get the average of all integers in array (add all integers together, then divide by the number of elements in the array)
//round down, return number

function average(arr) {
  return Math.floor(arr.reduce((acc, curr) => acc + curr, 0) / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40