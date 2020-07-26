//input: string (sentence)
//output: string with every occurrence of a number word converted to its corresponding digit character

//create object where the key is a number and value is the corresponding word of that number
//convert string into array using a space " " as the delimiter
//create an array of keys from the numbers object.
//loop through array (using map)
//use a helper function to get rid of non-alphabetic characters
//checking if each element is a value of the array of keys. If it is, then convert the element to the value of that key
//return mapped array and join back into string

function removeExtraCharacters(str) {
  return str.replace(/[^A-Za-z]/g, "");
}

function wordToDigit(string) {
  
  numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  }
  
  let wordsArr = Object.keys(numbers);
 
  return string.split(/\b/).map(word => {
    if (wordsArr.includes(word.toLowerCase())) {
      return numbers[word];
    } else {
      return word;
    }
  }).join("");
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."