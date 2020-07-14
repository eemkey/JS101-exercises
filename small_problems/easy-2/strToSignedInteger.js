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

function stringToSignedInteger(str) {
  if (str[0] === "+") {
    return stringToInteger(str.slice(1));
  } else if (str[0] === "-") {
    return -stringToInteger(str.slice(1));
  } else {
    return stringToInteger(str);
  }
}

console.log(stringToSignedInteger("4321"));
console.log(stringToSignedInteger("-570"));
console.log(stringToSignedInteger("+100")); 