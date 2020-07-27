//input: string
//output: object that contains 3 properties:
  //percentage of characters in the string that are lowercase
  //percentage of characers that are uppercase
  //percentage of characters that are neither

//rules: explicit: string will always contain at least 1 character (no need to test for empty string)
  //implicit:
  //percentages have two digits to the right of the decimal (use toFixed() method)
  //percentages are are written as strings
  //if percentage is 0, still include it in the object

//algo
//create object variable called characters and initialize 3 properties with value of 0
//get length of string
//loop through string
//if character is between a and z, then add to lowercase total count
//if character is betwen A and Z, then add to uppercase total count
function letterPercentages(str) {

  let characters = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }
  
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] >= "a" && str[idx] <= "z") {
      characters.lowercase += 1;
    } else if (str[idx] >= "A" && str[idx] <= "Z") {
      characters.uppercase += 1;
    } else {
      characters.neither += 1;
    }
  }

  for (let type in characters) {
    characters[type] = ((characters[type] / str.length) * 100).toFixed(2);
  }
  return characters;
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }