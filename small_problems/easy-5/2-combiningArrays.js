//input: two arguments (2 arrays);
//output: 1 array that combines both arrays without any repeats

//create function named union which takes 2 arguments (arrays)
//concat the arrays
//initalize new array and set it equal to empty array
//loop through concatenated array and push the numbers in the new array without duplicates 
//return new array

function union(arr1, arr2) {
  let concatArr = arr1.concat(arr2);
  let newArr = [];
  concatArr.forEach(num => {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  });
  return newArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]