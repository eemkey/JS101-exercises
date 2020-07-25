//input: number
//

//rules: 
//1. rotate number by 1 digit to the left. 
//2. keep first digit fixed in place.
//3. rotate remaining digits
//4. keep first two digits fixed in place
//5. rotate again
//6. repeat 

function rotateArr(arr) {
  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(number, count) {
  let stringedNum = String(number);
  let selectedIdx = stringedNum.length - count;
  let leftSection = stringedNum.slice(0, selectedIdx);
  let rightSection = rotateArr(stringedNum.slice(selectedIdx));
  let rotatedStringedNum = leftSection + rightSection;
  return Number(rotatedStringedNum);
}

function maxRotation(num) {
  let rotatedNum = num;
  for (let count = String(num).length; count > 1; count--) {
    rotatedNum = rotateRightmostDigits(rotatedNum, count);
  }
  return rotatedNum;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845