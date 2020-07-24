//input: two array arguments, each containing a list of numbers
//output: new array containing the products of all combinations of number pairs that exist between the two arrays. should be sorted in ascending numberical order.

//initialize variable called multipliedArr and set it to empty array
//need two loops -- first loop will go over first array. second loop will be inside the first loop, that goes over the second array. push the product of the elements from the first and second arrays into multipliedArr.
//return multipliedArr


function multiplyAllPairs(arr1, arr2) {
  let multipliedArr = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      multipliedArr.push(num1 * num2);
    })
  })
  return multipliedArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]