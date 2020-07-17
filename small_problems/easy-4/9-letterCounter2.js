function wordSizes(str) {
  let letterCountObj = {};
  let delimiter = /\s+/g;
  let wordsArr = str.replace(/[^\sa-z]/gi, "").split(delimiter);
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

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}