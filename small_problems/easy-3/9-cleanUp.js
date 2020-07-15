//function that returns string with all non-alphabetic characters replaced by spaces
//input: string, output: string
//use regex and .replace method

function cleanUp(str) {
  return str.replace(/[^a-z]+/gi, " ");
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "