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
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"]
};

let scores = {
  player: 0,
  computer: 0
};

function prompt(msg) {
  console.log(`=> ${MESSAGES[msg]}`);
}

function testForValidInput(input) {
  let validChoicesArr = [].concat(...Object.values(VALID_CHOICES));
  return !validChoicesArr.includes(input);
}

function isWinner(player1, player2) {
  return WINNING_COMBOS[convertToValidChoice(player1)].includes(player2);
}

function convertToValidChoice(input) {
  for (let [key, value] of Object.entries(VALID_CHOICES)) {
    if (value.includes(input)) return key;
  }
  return null;
}

function getPlayerChoice() {
  prompt("choose");
  let choice = readline.question().toLowerCase();

  while (testForValidInput(choice)) {
    prompt("invalid");
    prompt("choose");
    choice = readline.question().toLowerCase();
  }
  return convertToValidChoice(choice);
}

function getComputerChoice() {
  let choices = Object.keys(VALID_CHOICES);
  let randomIdx = Math.floor(Math.random() * choices.length);
  return choices[randomIdx];
}

function updateScore(plChoice, compChoice, score) {
  if (isWinner(plChoice, compChoice)) {
    score.player++;
  } else if (isWinner(compChoice, plChoice)) {
    score.computer++;
  }
}

function displayWinner(plChoice, compChoice, score) {
  console.log(`=> ${MESSAGES["player"]}, ${MESSAGES["computer"]}`, plChoice, compChoice);
  if (isWinner(plChoice, compChoice)) {
    prompt("playerWin");
  } else if (plChoice === compChoice) {
    prompt("tie");
  } else {
    prompt("compWin");
  }
  console.log(`=> ${MESSAGES["player"]}, ${MESSAGES["computer"]}`, score.player, score.computer);
}

function resetScore(score) {
  score.player = 0;
  score.computer = 0;
}

function playGame(score) {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  updateScore(playerChoice, computerChoice, score);
  displayWinner(playerChoice, computerChoice, score);
  prompt("line");
}

function isMatchEnded(score) {
  return (score.player === ROUNDS_TO_WIN) ||
  (score.computer === ROUNDS_TO_WIN);
}

function displayGrandWinner(score) {
  if (score.player === ROUNDS_TO_WIN) {
    console.log(`${MESSAGES["grandWinner"]}`, "Player");
  } else {
    console.log(`${MESSAGES["grandWinner"]}`, "Computer");
  }
}

function getPlayAgainAnswer() {
  prompt("playAgain");
  let answer = readline.question().toLowerCase();

  while ((answer[0] !== "n" && answer[0] !== "y") || answer.length !== 1) {
    prompt("invalid");
    prompt("yesOrNo");
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function isPlayAgain(answer) {
  return answer === "y";
}

console.clear();
prompt("welcome");
console.log(`${MESSAGES["firstToNum"]}`, ROUNDS_TO_WIN);

while (true) {
  playGame(scores);
  if (isMatchEnded(scores)) {
    displayGrandWinner(scores);
    if (isPlayAgain(getPlayAgainAnswer())) {
      resetScore(scores);
      console.clear();
    } else {
      break;
    }
  }
}