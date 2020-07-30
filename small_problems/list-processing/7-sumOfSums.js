//input: array of numbers
//output: sum of the sums of each leading subsequence for that array
//loop over array

//initialize variable called sums to empty array. loop through array using for loop, set variable idx to 1. for each iteration, use slice(0, idx) on arr. Will result in [3], [3, 5], [3, 5, 2]. concat each result to sums. After the lop, return the sum of all the numbers inside the sums array by using reduce.

function sumOfSums(arr) {
  let sums = [];
  for (let idx = 1; idx <= arr.length; idx++) {
    sums = sums.concat(arr.slice(0, idx));
  }
  return sums.reduce((acc, curr) => acc + curr);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35