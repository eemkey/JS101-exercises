//input: string
//output: array of palindromic substrings. sorted by their order of appearance in the input string. include duplicate substrings

//palindrome: word will be the same as it is reversed. 

//substrings function already takes care of finding all the possible substrings.
//use the return value of the substrings function (that takes in the string argument that's passed into palindromes function), and filter out the words that are not palindrome  ==> Make a helper isPalindrome function that return true if the word is more than 1 character in length and the word is the same as the word when it is split into array, reversed, and joined back together.  

function substrings(str) {
  let substringsArr = [];
  for (let idx = 0; idx < str.length; idx++) {
  substringsArr = substringsArr.concat(leadingSubstrings(str.slice(idx)));
  }
  return substringsArr;
}

function leadingSubstrings(str) {
  let substringsArr = [];
  for (let idx = 1; idx <= str.length; idx++) {
    substringsArr.push(str.slice(0, idx));
  }
  return substringsArr;
}

function isPalindrome(word) {
    return word.length > 1 && word === word.split("").reverse().join("");
}

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]