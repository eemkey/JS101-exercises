//input: 2 arrays that contain a list of numbers
//output: new array that contains the product of each pair of numbers from the arguments that have the same index

//create a function that takes in 2 arguments
//create a new variable called multipliedNumsArr and set it to an empty array
//create a loop. Initialize a variable called index and set it to 0. loop will run as long as index is less than the length of the first array. for each iteration, index will increment by 1.
//loop through first array
//for each iteration, multiply element from first array at current index with element from 2nd array at current index. 
//push this result in multipliedNumsArr
//return multipledNumsArr

// function multiplyList(arr1, arr2) {
//   let multipliedNumsArr = [];
//   for (let idx = 0; idx < arr1.length; idx++) {
//     multipliedNumsArr.push(arr1[idx] * arr2[idx])
//   }
//   return multipliedNumsArr;
// }


/*
problem: take 2 arrays, return new array that has the products of each pair of numbers that have the same index. 
rules: arrays have the same number of elements
input: 2 arrays
output: array
algorithm: take the first array
iterate through that array
for each element, multiply it by the element of the same index from the 2nd array
return the new array
*/

function multiplyList(arr1, arr2) {
  return arr1.map((num, idx) => num * arr2[idx]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]