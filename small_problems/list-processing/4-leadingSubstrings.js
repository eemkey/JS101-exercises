//input: string
//output: list of all substrings that start from the beginning of the string, ordered from shortest to longest

function leadingSubstrings(str) {
  let substrings = [];
  for (let idx = 1; idx <= str.length; idx++) {
    substrings.push(str.slice(0, idx));
  }
  return substrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]