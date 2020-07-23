//input: number
//output: string

//set arr to empty array
//set num to number
//do while loop where we add the remainder of num % 10 to the arr.
//num becomes num / 10 rounded down
//loop continues while num > 0
//return arr joined into string

function integerToString(number) {
  let arr = [];
  let num = number;
  do {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  while (num > 0);
  return arr.reverse().join("");
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"