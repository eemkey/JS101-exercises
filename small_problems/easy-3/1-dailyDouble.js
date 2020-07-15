//take string and return new string that contains the values of original string without repeats of consecutive characters
//rules: all duplicate characters collapsed into a single character
//input: string
//output: new string
//data structure: string, convert to array, back to string

//define function called crunch that takes a string as an argument
//initialize variable called newArr and set it to an empty array
//convert string to array
//loop through array 
//inside loop, set variable called index equal to 0.
//if current character is different than the previous character, then push current character into newArr.
//return newArr and convert back to string

function crunch(str) {
  let newArr = [];
  let splitStr = str.split("");
  splitStr.forEach((val, idx)=> {
    if (val !== splitStr[idx - 1]) {
      newArr.push(val);
    }
  });
  return newArr.join("");
}

function regexCrunch(str) {
  let matches = str.match(/(.)(?!\1)/g) || [];
  return matches.join("");
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

console.log(regexCrunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(regexCrunch('4444abcabccba'));              // "4abcabcba"
console.log(regexCrunch('ggggggggggggggg'));            // "g"
console.log(regexCrunch('a'));                          // "a"
console.log(regexCrunch(''));                           // ""