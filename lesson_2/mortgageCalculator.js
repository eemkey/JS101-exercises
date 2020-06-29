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

function getInputAndCheck(inputType, validity) {
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
  let mthlyRate = apr / 100 / 12;
  if (mthlyRate === 0) {
    return loanAmt / duration;
  } else {
    return loanAmt * (mthlyRate / (1 - Math.pow((1 + mthlyRate), (-duration))));
  }
}

function restart() {
  displayMsg("restart");
  let reInput = readline.question().toLowerCase();
  while ((reInput[0] !== "n" && reInput[0] !== "y") || reInput.length !== 1) {
    displayMsg("yesOrNo");
    reInput = readline.question().toLowerCase();
  }
  return reInput;
}

//PROGRAM START

displayMsg("welcome");

while (true) {
  const loanInput = getInputAndCheck("loan", invalidNumTest);
  const aprInput = getInputAndCheck("apr", invalidNumTest);
  const durationInput = getInputAndCheck("duration", invalidDurationTest);
  console.log(`Your calculated loan amount is $${calcMortgage(loanInput, aprInput, durationInput).toFixed(2)}.`);

  if (restart() === "n") break;
  console.clear();
}