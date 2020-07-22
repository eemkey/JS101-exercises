//input: string
//output: string with first character of every word capitalized

//split string into array using a space as a delimiter
//for each word, take the first character and convert it to upper case. then concatenate that with the rest of the characters (using slice).
//join words array back into string

function wordCap(str) {
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'