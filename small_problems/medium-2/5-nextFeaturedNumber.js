//featured number: odd number that is a multiple of 7, with all of its digits occuring exactly once each.
  //49 - yes
  //98 - not odd
  //97 - not multiple of 7
  //133 - digit 3 appears twice

//input: integer
//output: next featured number greater than the integer
//error if there is no next featured number (largest is 9876543201)

//how to get from 12 to the next multiple of 7
//increment 12 by 1 until that number % 7 === 0.
//do while loop since we don't know exact count until the next featured number will come
//break out of loop when it is a multiple of 7, is an odd number, and all the digits do not appear twice

function multipleOfSeven(num) {
  return num % 7 === 0;
}

function odd(num) {
  return num % 2 === 1;
}

function uniqueDigits(num) {
  stringedArr = String(num).split("");
  let seenObj = {};
  for (let idx = 0; idx < stringedArr.length; idx++) {
    if (seenObj[stringedArr[idx]]) {
      return false;
    } else {
      seenObj[stringedArr[idx]] = true;
    }
  }
  return true;
}

function featured(num) {
  if (num >= 9876543201) {
    return "there is no possible number that fulfills those requirements."
  }
  do {
    num++;
    if (multipleOfSeven(num) && odd(num) && uniqueDigits(num)) {
      break;
    }
  }
  while (true); 

  return num;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."