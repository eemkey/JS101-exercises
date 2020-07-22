//input: array of strings
//output: array of same values with all vowels removed
//data structure: array
//loop over array. for each element, split element into subarray. loop over subarray and filter out vowels. join array back into string. 

function removeVowels(arr) {
  return arr.map(word => {
    return word.split("")
    .filter(char => !/[aeiou]/.test(char.toLowerCase()))
    .join("");
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]