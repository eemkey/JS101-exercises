function stringToInteger(str) {
  const convertObj = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }

  let arrOfNums = str.split("").map(str => convertObj[str]);
  let val = 0;
  arrOfNums.forEach(num => {
    return val = 10 * val + num;
  });
  return val;
}

console.log(stringToInteger("4321")); 
console.log(stringToInteger("570")); 