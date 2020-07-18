//input: two arrays
//output: 1 array

function interleave(arr1, arr2) {
  let combinedArr = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    combinedArr.push(arr1[idx], arr2[idx])
  }
  return combinedArr;
}

function interleave2(arr1, arr2) {
  let combinedArr = [];
  arr1.forEach((el, idx) => {
    combinedArr.push(el, arr2[idx])
  });
  return combinedArr;
}

function interleave3(arr1, arr2) {
  return [].concat(...arr1.map((el, idx) => {
    return [el].concat(arr2[idx]);
  }));
}

function interleave4(arr1, arr2) {
  return arr1.reduce((acc, curr, idx) => {
    return acc.concat(curr, arr2[idx]);
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave2([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave3([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave4([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]