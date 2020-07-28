//input: number
//output: number (difference between the square of the sum of the first num positive integers and the sum of the square of the first num positive integers)
//rules: subtracting sum of the squares from the square of the sums

//for loop from 1 to num, and add these numbers to an array
//use this array to:
//compute the sum of the squares
//compute the square of the sums
//then subtract sum of squares from squares of sum

function sumSquareDifference(num) {
  let arr = [];
  for (let count = 1; count <= num; count++) {
    arr.push(count);
  }
  return squareOfSums(arr) - sumOfSquares(arr);
}

function sumOfSquares(arr) {
  return arr.map(num => num ** 2).reduce((acc, curr) => acc + curr);
}

function squareOfSums(arr) {
  return (arr.reduce((acc, curr) => acc + curr, 0)) ** 2;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150