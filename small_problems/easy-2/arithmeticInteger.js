const readline = require("readline-sync");

console.log("Enter the first number:")
let firstNum = readline.question();

console.log("Enter the second number:")
let secondNum = readline.question();

console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
console.log(`${firstNum} % ${secondNum} = ${mfirstNum % secondNum}`);
console.log(`${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);
