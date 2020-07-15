//double number: even length number whose left side digits are exactly the same as its right side digits.
//function takes in number as argument. Returns number multiplied by two if is not a double number. if is double number, return that number.

function twice(num) {
  if (doubleNumber(num)) {
    return num;
  } else {
    return num * 2;
  }
}

function doubleNumber(num) {
  let numString = String(num);
  if (numString.length % 2 !== 0) {
    return false;
  } else {
    return numString.slice(0, numString.length / 2) === numString.slice(numString.length / 2);
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676