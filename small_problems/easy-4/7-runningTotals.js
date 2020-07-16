//input: array of numbers
//outout: array of numbers but with each element's value being the running total from the original array

//create a function called runningTotal that takes an array as an argument.
//initialize a variable that's set to an empty array called newArr.
//loop through array. For each iteration, get the sum of the elements up to the current index, and push that total into the current index of newArr. Return this new Arr.

function runningTotal(arr) {
  let sum = 0;
  newArr = arr.map((num)=> {
    sum += num;
    return sum;
  });
  return newArr;
}

function runningTotalWithReduce(arr) {
  let newArr = [];
  arr.reduce((sum, currNum, idx) => (newArr[idx] = sum + currNum), 0);
  return newArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

console.log(runningTotalWithReduce([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotalWithReduce([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotalWithReduce([3]));                    // [3]
console.log(runningTotalWithReduce([]));                     // []