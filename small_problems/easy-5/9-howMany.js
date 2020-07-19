//input: array
//output: string

//function countOccurrences takes in 1 argument (array)
//initialize variable called wordCountObj that is set to an empty array
//create loop. 
//check if wordCountObj includes the element at the current iteration. if not, then push it into the object as a key and set the value to 1.
//if element is already included, then increment its value by 1
//return wordCountObj
//loop through obj and log to console key and vale

function countOccurrences(arr) {
  let lowerCasedArr = arr.map(word => word.toLowerCase());
  let wordCountObj = {};
  lowerCasedArr.forEach(el => {
    if (!wordCountObj[el]) {
      wordCountObj[el] = 1;
    } else {
      wordCountObj[el]++;
    }
  });
  for (let word in wordCountObj) {
    console.log(`${word} => ${wordCountObj[word]}`)
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'suv', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];



countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2