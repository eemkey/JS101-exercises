const readline = require("readline-sync");
const MESSAGES = require("./mortgage_messages.json");

function displayMsg(msg) {
  console.log(`=> ${MESSAGES[msg]}`);
}

function invalidNumTest(num) {
  return num.trimStart() === "" ||
    Number.isNaN(Number(num)) ||
    Number(num) < 0;
}

function invalidDurationTest(num) {
  return num.trimStart() === "" ||
    Number.isNaN(Number(num)) ||
    Number(num) <= 0;
}

function getInput(inputType, validity) {
  displayMsg(inputType);
  let input = readline.question();
  while (validity(input)) {
    displayMsg("invalid");
    displayMsg(inputType);
    input = readline.question();
  }
  return input;
}

function calcMortgage(loanAmt, apr, duration) {
  let mthlyRate = apr / 1200;
  if (mthlyRate === 0) {
    return loanAmt / duration;
  } else {
    return loanAmt * (mthlyRate / (1 - Math.pow((1 + mthlyRate), (-duration))));
  }
}

function getNewCalculationAnswer() {
  displayMsg("restart");
  let reInput = readline.question().toLowerCase();
  while ((reInput[0] !== "n" && reInput[0] !== "y") || reInput.length !== 1) {
    displayMsg("yesOrNo");
    reInput = readline.question().toLowerCase();
  }
  return reInput;
}

//PROGRAM START
console.clear();
displayMsg("welcome");

while (true) {
  const loanInput = getInput("loan", invalidNumTest);
  const aprInput = getInput("apr", invalidNumTest);
  const durationInput = getInput("duration", invalidDurationTest);
  console.log(`${MESSAGES["finalCalc"]}`, calcMortgage(loanInput, aprInput, durationInput).toFixed(2));

  if (getNewCalculationAnswer() === "n") break;
  console.clear();
}