const readline = require("readline-sync");

let nums = [];

function ending(num) {
  switch(num) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function askQuestion() {
  for (let question = 1; question < 7; question++) {
    console.log(`Enter the ${question}${ending(question)} number:`);
    nums.push(Number(readline.question()));
  }
}

function isPresent() {
return nums.includes(nums[5]) ? "appears" : "does not appear";
}

askQuestion();
console.log(`The number ${nums[5]} ${isPresent()} in ${nums.slice(0, 5)}.`);


