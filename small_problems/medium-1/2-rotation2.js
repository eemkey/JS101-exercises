//input: number, and count (number of digits that you want to rotate starting from the right)
//output: a number after performing the rotation

//convert number to a string
//index of where the rotation starts is the stringed number's length property - count. So set this to variable selectedIdx.
//use slice method to concat string from index 0 up until but not including selectedIdx  w/ string from selectedIdx + 1 up until the end of the string w/ the value at selectedIdx.
//convert result back to number


//**without using helper function**
// function rotateRightmostDigits(number, count) {
//   let stringedNum = String(number);
//   let selectedIdx = stringedNum.length - count;
//   let rotatedStringedNum = stringedNum.slice(0, selectedIdx) + stringedNum.slice(selectedIdx + 1) + stringedNum.slice(selectedIdx, selectedIdx + 1);
//   return Number(rotatedStringedNum);
// }

//**using helper function **

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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917