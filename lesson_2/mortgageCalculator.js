const readline = require("readline-sync");
const MESSAGES = require("./mortgage_messages.json");

function prompt(key) {
  let message = messages(key);
  console.log(`=> ${message}`);
}

function messages(msg) {
  return MESSAGES[msg];
}

function invalidNum(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num)) || Number(num) < 0;
}

function invalidDuration(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num)) || Number(num) <= 0;
}

function getUserInput(inputType, validity) {
  prompt(inputType);
  let input = readline.question();
  while (validity(input)) {
    prompt("invalid");
    prompt(inputType);
    input = readline.question();
  }
  return input;
}

function calcMortgage(loanAmt, apr, duration) {
  let mthlyRate = apr / 100 / 12;
  if (mthlyRate === 0) {
    return loanAmt / duration;
  } else {
    return loanAmt * (mthlyRate / (1 - Math.pow((1 + mthlyRate), (-duration))));
  }
}

function exit() {
  prompt("restart");
  let reInput = readline.question().toLowerCase();
  while ((reInput[0] !== "n" && reInput[0] !== "y") || reInput.length !== 1) {
    prompt("yesOrNo");
    reInput = readline.question().toLowerCase();
  }
  return reInput;
}

//PROGRAM START

prompt("welcome");

while (true) {
  const loanInput = getUserInput("loan", invalidNum);
  const aprInput = getUserInput("apr", invalidNum);
  const durationInput = getUserInput("duration", invalidDuration);

  console.log(`your calculated loan amount is $${calcMortgage(loanInput, aprInput, durationInput).toFixed(2)}`);

  let result = exit();
  if ( result === "n") break;
}