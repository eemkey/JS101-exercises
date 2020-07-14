const readline = require("readline-sync");

console.log("What is your name?");
let name = readline.question();
if (name.includes("!")) {
  replacedName = name.replace("!", ".").toUpperCase();
  console.log(`HELLO ${replacedName} WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}