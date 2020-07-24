//input: positive integer
//output: sum of its digits
//rules: cannot use for, while, or do---while loops. use a series of method calls instead

//turn number to string, split into array, reduce to get sum of all digits

function sum(num) {
  return String(num).split("").reduce((acc, curr) => acc + Number(curr), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45