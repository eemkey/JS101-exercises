function integerToString(num) {
  let arr = [];
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