const readline = require("readline-sync");

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
  return !Object.values(VALID_CHOICES).join().includes(input);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function standardizeChoice(input) {
  for (let [key, value] of Object.entries(VALID_CHOICES)) {
    if (value.includes(input)) return key;
  }
}

function getPlayerChoice() {
  prompt(`Choose one: ${Object.keys(VALID_CHOICES).join(", ")}`);
  let choice = readline.question().trim().toLowerCase();
  
  while (validityTest(choice)) {
    prompt("Invalid input. Please choose rock, paper, scissors, spock, or lizard.");
    choice = readline.question().trim().toLowerCase();
  }
  return standardizeChoice(choice);
}

function getComputerChoice() {
  let keys = Object.keys(VALID_CHOICES);
  let randomIdx = Math.floor(Math.random() * keys.length);
  return keys[randomIdx];
}

function displayWinner(choice, compChoice) {
  prompt(`Player chose ${choice}, computer chose ${compChoice}.`);
  if (playerWins(choice, compChoice)) {
    prompt("You win!");
  } else if (choice === compChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}

function playGame() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    displayWinner(playerChoice, computerChoice);
}

function endGame() {
  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase();

  while ((answer[0] !== "n" && answer[0] !== "y") || answer.length !== 1) {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  return answer[0] === "y" ? false : true;
}

function initializeGame() {
  prompt("Welcome to Rock Paper Scissors Lizard Spock!");
  do {
    playGame();
    if (endGame()) break;
  } while (true);
}

initializeGame();

  
  

  
