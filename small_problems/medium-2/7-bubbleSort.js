//input: array
//output: sorted array

//rules: array should be mutated
//array contains at least two elements
//assuming that every element in the array are of the same type?

//while loop that runs while true
//swapped is equal to false
//for loop that iterates over all elements in array
//
//start at first two elements -- compare. if no swao is done, then use continue statement to go to next iteration of loop. if first element is bigger than second, then swap.if swapped, then swapped variable is set to true. 
//if swapped is false, then break out of while loop and return array. 

function bubbleSort(arr) {  
  while (true) {
    let swapped = false;
    for (let idx = 1; idx < arr.length; idx++) {
      if (arr[idx] > arr[idx - 1]) {
        continue;
      }
        [arr[idx], arr[idx - 1]] = [arr[idx - 1], arr[idx]];
        swapped = true;
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
