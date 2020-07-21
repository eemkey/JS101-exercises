//input: 2 integers (count and start)
//output: array where there are count number of elements, and each element is a multiple of start.
//initialize variable sequenceArr and set it equal to empty array
//initialize variable num = 1 inside a loop that runs until num equals count. 
//for each iteration, multiply num with start to get multiples of start. Push result to sequenceArr
//return sequenceArr

function sequence(count, start) {
  let sequenceArr = [];
  for (let num = 1; num <= count; num++) {
    sequenceArr.push(num * start);
  }
  return sequenceArr;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []