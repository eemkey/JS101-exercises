let numbers = [1, 2, 3, 4, 5];

function multiply(arr, val) {
  let multipliedArr = [];
  for (let i = 0; i < arr.length; i++) {
    multipliedArr.push(arr[i] * val);
  }
  return multipliedArr;
}

console.log(multiply(numbers, 2));