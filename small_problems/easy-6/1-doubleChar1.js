//input: string
//output: string
//initialize new variable named doubledStr and set it equal to empty string
//loop through str input
//for each character, concatenate doubledStr with character twice
//return doubledStr
function repeater(str) {
  let doubledStr = "";
  for (let char = 0; char < str.length; char++) {
    for (let count = 0; count < 2; count++) {
      doubledStr+= str[char]
    }
  };
  return doubledStr;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""