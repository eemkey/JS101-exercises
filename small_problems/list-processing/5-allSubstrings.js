//input: string 
//output: array of substrings


function leadingSubstrings(str) {
  let substringsArr = [];
  for (let idx = 1; idx <= str.length; idx++) {
    substringsArr.push(str.slice(0, idx));
  }
  return substringsArr;
}

function substrings(str) {
  let substringsArr = [];
  for (let idx = 0; idx < str.length; idx++) {
  substringsArr = substringsArr.concat(leadingSubstrings(str.slice(idx)));
  }
  return substringsArr;
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]