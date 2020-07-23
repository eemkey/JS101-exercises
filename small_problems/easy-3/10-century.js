//function that takes a year as input and returns a century
//input: number
//output: string that begins with century number and ends with st nd rd or th
//new century begins in years that end with 01

//1 - st except for 11 - th
//2 - nd except for 12 - th
//3 - rd except for 13 - th
//4 - th
//5 - th
//6 - th 
//7 - th
//8 - th
//9 - th
//10 - th

//take num and divide by 100. Use Math.ceil to round up to nearest integer. 
//use num % 100 to get last two digits, and num % 10 to get last digit
//need to check if num is 11 12 or 13 to add th ending
//add appropriate ending



function century(num) {
  let centuryNum = Math.ceil(num / 100);
  lastTwoNums = centuryNum % 100;
  if (lastTwoNums === 11 || lastTwoNums === 12 || lastTwoNums === 13) {
    return `${centuryNum}th`;
  } else {
    let lastNum = centuryNum % 10;
      switch(lastNum) {
        case 1: 
          return `${centuryNum}st`;
        case 2: 
          return `${centuryNum}nd`;
        case 3:
          return `${centuryNum}rd`;
        default:
          return `${centuryNum}th`;
      }
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"


