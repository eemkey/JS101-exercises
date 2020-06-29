// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

const readline = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function calculateTip(bill, percentage) {
  return bill * (percentage / 100);
}

function calculateTotal(bill, calculatedTip) {
  return bill + calculatedTip;
}

prompt("What is the bill amount?");
let billInput = parseFloat(readline.question());

prompt("What is the tip percentage?");
let tipPercentage = parseFloat(readline.question());

let tip = calculateTip(billInput, tipPercentage).toFixed(2);
let total = calculateTotal(billInput, tip).toFixed(2);

console.log(`What is the bill? $${billInput} \n 
  What is the tip percentage? ${tipInput}% \n 
  The tip is $${tip} \n
  The total is $${total}`);