//function that returns the index of the first Fibonacci number that has the number of digits specified by the argument
//input: number (specifies the number of digits)
//output: index of Fibonacci number

function findFibonacciIndexByLength(numOfDigits) {
  let arr = [1, 1];
  let first = 1;
  let second = 1;
  let idx = 2;
  let num;
  do {
    num = first + second;
    idx += 1;
    first = second;
    second = num;
  } while (String(num).length < numOfDigits);
  return idx;
}

console.log(findFibonacciIndexByLength(2));       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74