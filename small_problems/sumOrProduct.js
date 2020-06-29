const readline = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNum(num) {
  return Number.isNaN(Number(num)) ||
    !Number.isInteger(Number(num)) ||
    Number(num) <= 0;
}

function invalidMethod(input) {
  return input.toLowerCase() !== "s" && input.toLowerCase() !== "p";
}

function calculate(int, operation) {
  const newArr = [];
  for (let num = 1; num <= int; num++) {
    newArr.push(num);
  }
  if (operation === "s") {
    return newArr.reduce((acc, curr) => {
      return acc + curr;
    });
  } else {
    return newArr.reduce((acc, curr) => {
      return acc * curr;
    });
  }
}

prompt("Please enter an integer greater than 0: ");
let integer = parseInt(readline.question());

while (invalidNum(integer)) {
  prompt("Invalid. Please enter an integer greater than 0");
  integer = readline.question();
}

prompt("Enter 's' to compute the sum, or 'p' to compute the product");
let method = readline.question();

while (invalidMethod(method)) {
  prompt("Invalid. Please try again.");
  method = readline.question();
}

let calculatedNum = calculate(integer, method);
let operation = method === "s" ? "sum" : "product";

console.log(`The ${operation} of the integers between 1 and ${integer} is ${calculatedNum}.`);