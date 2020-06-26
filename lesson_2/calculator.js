const readlineSync = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");
const LANGUAGE = "en";

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNum(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

function messages(message, lang="en") {
  return MESSAGES[lang][message];
}

prompt("welcome");

while (true) {

prompt("firstNum");
let num1 = readlineSync.question();

while (invalidNum(num1)) {
  prompt("invalid");
  prompt("firstNum");
  num1 = readlineSync.question();
}

prompt("secondNum");
let num2 = readlineSync.question();

while (invalidNum(num2)) {
  prompt("invalid");
  prompt("secondNum");
  num2 = readlineSync.question();
}

prompt("operation");
let operation = readlineSync.question();

while (!["1", "2", "3", "4"].includes(operation)) {
  prompt("invalid");
  prompt("operation");
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

prompt("newCalc");
  let answer = readlineSync.question();
  if (answer[0].toLowerCase() !== "y") break;
}

