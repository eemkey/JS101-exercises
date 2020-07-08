let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

//return array which contain objects where all the numbers are even
//end result: [{ e: [8], f: [6, 10] }]
//need to use filter, then .every for each array, then .every for each number

let newArr = arr.filter(obj => {
  return Object.values(obj).every(arr => {
    return arr.every(num => num % 2 === 0)
  });
});

console.log(newArr);

