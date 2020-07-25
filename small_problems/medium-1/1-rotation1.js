//input: array
//output: new array with first element moved to end of array

//rules: array should not be modified
//if input not array, returned undefined
//if input is empty array, return empty array

//algo
//check if arr is an array. if not array, return undefined
//check if arr is equal to empty array. if it is, return arr.
//remove first item from arr
//add that item into last position in arr
//return arr

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return arr;
  }

  return arr.slice(1).concat(arr.slice(0, 1));
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]