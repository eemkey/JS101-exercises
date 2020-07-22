//input: string
//string with every lowercase letter changed to uppercase and vice versa

//turn string into array
//map through string and swap cases
//return the new string

function swapCase(str) {
  return str.split("").map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }).join("");
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Toni     3582058320523 ght on XYZ-TV'));      // "tONIGHT ON xyz-tv"