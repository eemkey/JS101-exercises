//input: string
//output: object contains 3 properties (# of chars that are lowercase, uppercase, and neither)
//data structures: object

//declare variable and set to object with all 3 properties set to 0.
//loop through string
//check if char is letter. if is letter, then check if uppercase or lowercase and add to respective count
//if neither, then add to neither count in object

function letterCaseCount(str) {
  let countObj = {"lowercase": 0, "uppercase": 0, "neither": 0};
  for (let idx = 0; idx < str.length; idx++) {
    if (checkIfLetter(str[idx])) {
      if (str[idx] === str[idx].toUpperCase()) {
        countObj["uppercase"]++;
      } else {
        countObj["lowercase"]++;
      }
    } else {
      countObj["neither"]++;
    }
  }
  return countObj;
}

function checkIfLetter(char) {
  return (char.toLowerCase() >= "a") && (char.toLowerCase() <= "z");
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }