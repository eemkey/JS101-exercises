//input: string
//output: boolean if all parehntheses in string are properly balanced
//initialize variable pair and set to 0
//loop through string
//if "(", then pair increase by 1, if ")" then pair decrease by 1
//if pair is not 0, return false. else return true


function isBalanced(str) {
  let pair = 0;
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === "(") {
      pair++;
    } else if (str[idx] === ")") {
      pair--;
    }
    if (pair < 0) {
      return false;
    }
  }
  return pair === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);