//input: string
//output: object
//want to first separate the string into an array with space(s) as the delimiter (use regex);
//loop thorugh the array and for each word, find the length of the word.

function wordSizes(str) {
  let letterCountObj = {};
  let delimiter = /\s+/g;
  let wordsArr = str.split(delimiter);
  if (str.length === 0) {
    return letterCountObj;
  } else {
  wordsArr.forEach(word => {
    let count = String(word.length);
    if (!Object.keys(letterCountObj).includes(count)){
      letterCountObj[count] = 1;
    } else {
      letterCountObj[count] += 1;
    }
  });
  return letterCountObj;
  }
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}