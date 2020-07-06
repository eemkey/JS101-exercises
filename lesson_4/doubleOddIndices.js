const numbers = [1, 2, 3, 4, 5, 6];

function doubleOddIndices(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      newArr.push(arr[i] * 2)
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(doubleOddIndices(numbers));