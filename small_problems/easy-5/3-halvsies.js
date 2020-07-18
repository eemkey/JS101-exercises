//input: an array of elements
//output: an array that contains two elements, each of which is an array. 1st half of original array elements go in 1st element, and 2nd half go in 2nd element. If original contains odd number of elements, middle element goes in first half array.

//need the length of the original array, divide by two, Math.ceil. This number will give us the index number of the last element that goes into the first array. Anything after will go into second array.



function halvsies(arr) {
  let firstHalfIndexEnd = Math.ceil(arr.length / 2);
  let firstHalf = arr.slice(0, firstHalfIndexEnd);
  let secondHalf = arr.slice(firstHalfIndexEnd);
  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]