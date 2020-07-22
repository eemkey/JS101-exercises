//input: string
//output: string with all letters alternating in lowercase and uppercase

//all even index number characters: uppercase
//all odd index number characters: lowercase
//split string into array
//loop through every character 

function staggeredCase(str) {
  let strArr = str.split("");
  for (let idx = 0; idx < str.length; idx++) {
    if (idx % 2 === 0) {
      strArr[idx] = strArr[idx].toUpperCase();
    } else {
      strArr[idx] = strArr[idx].toLowerCase();
    }
  }
  return strArr.join("");
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"