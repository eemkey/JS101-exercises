//input: number --> the nth number
//output: number --> the value of the nth number in the sequence

//to get fibonacci number, it is the sum of the previous two numbers in the sequence
//data structure: array
//return 1 if num is <= 2
//start with [1, 1]
//the next number pushed into this arr will be the sum of the previous 2 numbers (1 and 1).

//pushing fibonacci numbers into arr and returning arr[num]
// function fibonacci(num) {
//   let arr = [0, 1];
//   if (num < 2) {
//     return 1;
//   }
//   for (let count = 0; count < num; count++) {
//     arr.push(arr[count] + arr[count + 1]);
//   }
//   return arr[num];
// }

//storing the values inside variables
function fibonacci(num) {
  let first = 1;
  let second = 1;
  let fibonacci;
  for (let curr = 3; curr <= num; curr++) {
    fibonacci = first + second;
    first = second;
    second = fibonacci;
  }
  return fibonacci;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050