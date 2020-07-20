//input: integer
//output: array of all integers between 1 and the argument in ascending order
//initiate variable called integerArr and set to empty array.
//make loop, with variable count initialized to 1, loop runs until it has looped integer amount of times. for every iteration, push count to integerArr.
//return integerArr

function sequence(integer) {
  let integerArr = [];
  for (let count = 1; count <= integer; count++) {
    integerArr.push(count);
  }
  return integerArr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]