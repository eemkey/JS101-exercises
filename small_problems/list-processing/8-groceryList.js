//input: nested array -- inner arrays incude name of fruit and quantity. 
//output: 1 dimensional array of fruits in which each fruit appears a number of times equal to its quantity.
//initialize variable fruitArr and set to empty array
//loop through array ['apple', 3]
//for each iteration, set first element in array to variable fruit, and second element to variable count.

function buyFruit(arr) {
  let fruitsArr = [];
  arr.forEach(item => {
    let [fruit, count] = item;
    for (let num = 0; num < count; num++) {
      fruitsArr.push(fruit);
    }
  });
  return fruitsArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]