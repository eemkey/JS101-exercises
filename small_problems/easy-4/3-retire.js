const readline = require("readline-sync");

console.log("What is your age?");
let currAge = Number(readline.question());

console.log("At what age would you like to retire?");
let retireAge = Number(readline.question());

let currYear = new Date().getFullYear();
let remainingYears = retireAge - currAge;

console.log(`It's ${currYear}! You will retire in ${currYear + remainingYears}.`);
console.log(`You have only ${remainingYears} years of work to go!`);