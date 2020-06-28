const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if ((choice === "rock" && computerChoice === "scissors") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissors" && computerChoice === "paper")) {
    prompt("You win!");
  } else if ((choice === "rock" && computerChoice === "paper") ||
            (choice === "paper" && computerChoice === "scissors") ||
            (choice === "scissors" && computerChoice === "rock")) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("Invalid input. Please choose rock, paper, or scissors.");
    choice = readline.question();
  }

  let randomIdx = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIdx];

  displayWinner(choice, computerChoice);

  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase();

  while ((answer[0] !== "n" && answer[0] !== "y") || answer.length !== 1) {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") break;
}


