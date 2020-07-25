/*
input: string (word)
output: boolean. true if a word can be spelled using the set of blocks. false otherwise.

rules: 
letters are case-insensitive
blocks can only be used once
cannot use both letters from any given block

data structure:
nested array

algorithm:
put each block (array) inside a blocks array.
turn string into uppercase letters.
loop through string. 
***for each letter, check if letter is included inside blocks array. 
if it is, then splice that block out. 
if not, then return false.
keep iterating until we reach the end of the string. 
return true outside of loop.

algorithm to check if letter is included inside the blocks array:
iterate over blocks array. for each block, if the block includes the letter, then return the block index.



*/

function isBlockWord(string) {
let blocks = ["BO", "XK", "CP", "NA", "GT", "RE", "FS", 
"JW", "HU", "VI", "LY", "ZM"];

let str = string.toUpperCase();
for (let letter of str) {
  let toBeRemovedIdx = foundBlockIdx(letter, blocks);
    if (toBeRemovedIdx >= 0) {
      blocks.splice(toBeRemovedIdx, 1);
    } else {
      return false;
    }
}
return true;
}

function foundBlockIdx(letter, blocks) {
  for (let block of blocks) {
    if (block.includes(letter)) {
      return blocks.indexOf(block);
    }
  }
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false