//input: string
//output: new string with 5 or more letter words having their letters in reverse order
//split string using a space as a delimiter
//loop through wordsArr. if word has 5 or more letters, then reverse order
//join arr into string
function reverseWords(str) {
  return str.split(" ").map(word => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  }).join(" ");
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"