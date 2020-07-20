//input: non-empty string argument
//output: middle character of string (if odd length, then return 1 character. if even length, return two characters)

//get length of string, and divide by two. Round down. Assign the result of this to new variable called middleCharIdx.
//if length of string is even number, then return characters one before and at middleCharIdx 
//else return character at middleCharIdx

function centerOf(str) {
  let middleCharIdx = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str[middleCharIdx - 1] + str[middleCharIdx];
  } else {
    return str[middleCharIdx];
  }
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"