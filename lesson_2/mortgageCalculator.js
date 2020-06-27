const readline = require("readline-sync");
const MESSAGES = {
  welcome: "Welcome to the Mortgage Calculator!",
  loan: "Please enter your loan amount (ex: 450000)",
  apr: "Please enter your APR (ex: 5 for 5%, 4.5 for 4.5%)",
  invalid: "Invalid entry, please try again.",
  duration: "Please enter the duration of your loan in months",
  restart: "Would you like to start over? (y/n)",
  yesOrNo: "Please enter y or n."
}

function invalidNum(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num)) || Number(num) < 0;
}

function messages(msg) {
  return MESSAGES[msg];
}

function exit() {
  prompt("restart");
  let restartInput = readline.question().toLowerCase();
  while (restartInput[0] !== "n" && restartInput[0] !== "y" || restartInput.length !== 1) {
    prompt("yesOrNo");
    restartInput = readline.question().toLowerCase();
  }
  return restartInput;
  
} 

function prompt(key) {
  let message = messages(key);
  console.log(`=> ${message}`);
}

function getUserInput(inputType, validity) {
  prompt(inputType);
  let input = readline.question();
  while(validity(input)) {
    prompt("invalid");
    prompt(inputType);
    input = readline.question();
  }
  return input;
}

function calcMortgage(loanAmount, apr, duration) {
  let monthlyInterestRate = apr / 100 / 12;
  if (monthlyInterestRate === 0) {
    return loanAmount / duration;
  } else {
    return loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-duration))));
  }
}

prompt("welcome");

while(true) {
  const loanInput = getUserInput("loan", invalidNum);
  const aprInput = getUserInput("apr", invalidNum);
  const durationInput = getUserInput("duration", invalidNum);

  console.log(`your calculated loan amount is $${calcMortgage(loanInput, aprInput, durationInput).toFixed(2)}`)

  let result = exit();
  if ( result === "n") break;

}








