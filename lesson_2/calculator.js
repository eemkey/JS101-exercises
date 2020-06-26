//ask user for first number
//ask user for second number
//ask user for operation to perform
//perform operation on the two numbers
//print result to terminal

const readlineSync = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNum(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

prompt("Welcome to Calculator!");

prompt("What's the first number?");
let num1 = readlineSync.question();

while (invalidNum(num1)) {
  prompt("Hmm... that doesn't look like a valid number.\nWhat's the first number?");
  num1 = readlineSync.question();
}

prompt("What's the second number?");
let num2 = readlineSync.question();

while (invalidNum(num2)) {
  prompt("Hmm... that doesn't look like a valid number.\nWhat's the second number?");
  num2 = readlineSync.question();
}

prompt("What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readlineSync.question();

while (!["1", "2", "3", "4"].includes(operation)) {
  prompt("Invalid number. What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide");
  operation = readlineSync.question();
}

let output;
switch (operation) {
  case "1":
    output = Number(num1) + Number(num2);
    break;
  case "2":
    output = Number(num1) - Number(num2);
    break;
  case "3":
    output = Number(num1) * Number(num2);
    break;
  case "4":
    output = Number(num1) / Number(num2);
    break;
}

prompt(`The result is: ${output}`);
