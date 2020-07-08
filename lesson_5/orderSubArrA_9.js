let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

//same array, same subarrays
//but will be a,b,c , 1,2,3 , black,blue,gree
let newArr = arr.map(subArr => {
  if(typeof subArr[0] === "string") {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b)
  }
});

console.log(newArr);

