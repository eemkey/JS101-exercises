const readline = require("readline-sync");
const MESSAGES = require("./rpsls_messages.json");
const ROUNDS_TO_WIN = 5;

const VALID_CHOICES = {
  rock: ["rock", "r"],
  paper: ["paper", "p"],
  scissors: ["scissors", "sc"],
  spock: ["spock", "sp"],
  lizard: ["lizard", "l"]
};

const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "spock"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"]
};

let playerCounter = 0;
let computerCounter = 0;
let grandWinner = "";

function prompt(msg) {
  console.log(`=> ${MESSAGES[msg]}`);
}

function validityTest(input) {
  let validChoicesArr = [].concat(...Object.values(VALID_CHOICES));
  return !validChoicesArr.includes(input);
}

function isWinner(player1, player2) {
  return WINNING_COMBOS[convertInput(player1)].includes(player2);
}

function convertInput(input) {
  for (let [key, value] of Object.entries(VALID_CHOICES)) {
    if (value.includes(input)) return key;
  }
  return null;
}

function getPlayerChoice() {
  prompt("choose");
  let choice = readline.question().toLowerCase();

  while (validityTest(choice)) {
    prompt("invalid");
    prompt("choose");
    choice = readline.question().toLowerCase();
  }
  return convertInput(choice);
}

function getComputerChoice() {
  let choices = Object.keys(VALID_CHOICES);
  let randomIdx = Math.floor(Math.random() * choices.length);
  return choices[randomIdx];
}

function updateScore(plChoice, compChoice) {
  if (isWinner(plChoice, compChoice)) {
    playerCounter++;
    if (playerCounter === ROUNDS_TO_WIN) {
      grandWinner = "Player";
    }
  } else if (isWinner(compChoice, plChoice)) {
    computerCounter++;
    if (computerCounter === ROUNDS_TO_WIN) {
      grandWinner = "Computer";
    }
  }
}

function displayWinner(plChoice, compChoice) {
  console.log(`Player chose ${plChoice}, Computer chose ${compChoice}.`);
  if (isWinner(plChoice, compChoice)) {
    prompt("playerWin");
  } else if (plChoice === compChoice) {
    prompt("tie");
  } else {
    prompt("compWin");
  }
  console.log(`Player: ${playerCounter} Computer: ${computerCounter}`);
  if (grandWinner.length !== 0) {
    console.log(`${grandWinner} is the grand winner!`);
  }
}

function resetScore() {
  playerCounter = 0;
  computerCounter = 0;
  grandWinner = "";
}

function playGame() {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  updateScore(playerChoice, computerChoice);
  displayWinner(playerChoice, computerChoice);
  if (grandWinner.length !== 0) resetScore();
}

function endGame() {
  prompt("playAgain");
  let answer = readline.question().toLowerCase();

  while ((answer[0] !== "n" && answer[0] !== "y") || answer.length !== 1) {
    prompt("invalid");
    prompt("yesOrNo");
    answer = readline.question().toLowerCase();
  }
  console.clear();
  return answer[0] !== "y";
}

function init() {
  console.clear();
  prompt("welcome");
  prompt("firstToFive");
  while (true) {
    playGame();
    if (endGame()) break;
  }
}

init();
