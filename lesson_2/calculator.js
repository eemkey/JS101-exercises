//ask user for first number
//ask user for second number
//ask user for operation to perform
//perform operation on the two numbers
//print result to terminal

const readlineSync = require("readline-sync");

console.log("Welcome to Calculator!");

console.log("What's the first number?");
let num1 = Number(readlineSync.question());

console.log("What's the second number?");
let num2 = Number(readlineSync.question());

console.log("What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readlineSync.question();

let output;
if(operation === "1") {
  output = (num1) + Numbernum2;
} else if (operation === "2") {
  output = num1 - num2;
} else if (operation === "3") {
  output = num1 * num2;
} else if (operation === "4") {
  output = num1 / num2;
}

console.log(`The result is: ${output}`);
