const readline = require("readline-sync");

const ROUNDS_TO_WIN = 5;

const VALID_CHOICES = {
  rock: ["rock", "r"],
  paper: ["paper", "p"],
  scissors: ["scissors", "sc"],
  spock: ["spock", "sp"],
  lizard: ["lizard", "l"]
}

const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "spock"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"]
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function validityTest(input) {
  let validChoicesArr = [].concat(...Object.values(VALID_CHOICES));
  return !validChoicesArr.includes(input);
}

function determineWinner(player1, player2) {
  return WINNING_COMBOS[convertInput(player1)].includes(player2);
}

function convertInput(input) {
  for (let [key, value] of Object.entries(VALID_CHOICES)) {
    if (value.includes(input)) return key;
  }
}

function getPlayerChoice() {
  prompt("Choose one: rock (r), paper (p), scissors (sc), lizard (l), spock (sp).");
  let choice = readline.question().toLowerCase();
  
  while (validityTest(choice)) {
    prompt("Invalid input. Please choose rock, paper, scissors, spock, or lizard.");
    choice = readline.question().toLowerCase();
  }
  return convertInput(choice);
}

function getComputerChoice() {
  let keys = Object.keys(VALID_CHOICES);
  let randomIdx = Math.floor(Math.random() * keys.length);
  return keys[randomIdx];
}

function displayWinner(choice, compChoice) {
  prompt(`Player chose ${choice}, computer chose ${compChoice}.`);
  if (determineWinner(choice, compChoice)) {
    prompt("You win!");
  } else if (choice === compChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
  prompt(`Player: ${playerCounter} Computer: ${computerCounter}`);
  if (grandWinner.length !== 0) {
    prompt(`${grandWinner} is the grand winner!`);
  }
}

function updateScore(choice, compChoice) {
  if (determineWinner(choice, compChoice)) {
    playerCounter++;
    if (playerCounter === ROUNDS_TO_WIN) {
      grandWinner = "Player";
    }
  } else if (determineWinner(compChoice, choice)) {
    computerCounter++;
    if (computerCounter === ROUNDS_TO_WIN) {
      grandWinner = "Computer";
    }
  }
}

function resetScore() {
  playerCounter = 0;
  computerCounter = 0;
  grandWinner = "";
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    updateScore(playerChoice, computerChoice);
    displayWinner(playerChoice, computerChoice);
    if (grandWinner.length !== 0) resetScore();
    
}

function endGame() {
  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase();

  while ((answer[0] !== "n" && answer[0] !== "y") || answer.length !== 1) {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }
  console.clear();
  return answer[0] === "y" ? false : true;
}

  console.clear();
  let playerCounter = 0;
  let computerCounter = 0;
  let grandWinner = "";
  prompt("Welcome to Rock Paper Scissors Lizard Spock!");
  prompt("First to 5 is the grand winner.");
  while (true) {
    playRound();
    if (endGame()) break;
  }