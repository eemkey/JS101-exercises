const readline  = require("readline-sync");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const ROUNDS_TO_WIN = 3;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

const prompt = msg => {
  console.log(`=> ${msg}`);
};

function displayBoard(board) {
  console.clear();
  prompt("Welcome to Tic Tac Toe!");
  prompt(`First to ${ROUNDS_TO_WIN} is the grand winner.`)
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log('     |     |');
  console.log('');
}

function initalizeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function displayScore(scores) {
  let {player, computer} = scores;
  console.log(`Player: ${player} | Computer: ${computer}`);
}

function updateScore(scores, board) {
  if (detectWinner(board) === "player") {
    scores.player++;
  } else if (detectWinner(board) === "computer") {
    scores.computer++;
  }
}

function joinOr(arr, delimiter = ", ", word = "or") {
  switch (arr.length) {
    case 0:
      return "";
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
            `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;
  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}): `);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  if(!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if(!square) {
    if (findSquare5(board)) {
      square = "5";
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);
  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function findSquare5(board) {
  return emptySquares(board).includes("5");
  
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "player";
    } else if (
      board[sq1] ===  COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "computer";
    }
  }
  return null;
}

function getPlayAgainAnswer() {
  prompt("Play again? (y or n)");
  let answer = readline.question().toLowerCase();
  while ((answer[0] !== "n" && answer[0] !== "y") || answer.length !== 1) {
    prompt("Sorry, that's not a valid choice.");
    prompt("Play again? (y or n)");
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function isPlayAgain(answer) {
  return answer === "y";
}

function pressEnterToContinue() {
  prompt("Press enter to continue");
  let input = readline.question().toLowerCase();
  while (input !== "") {
    prompt("Press enter to continue");
    input = readline.question().toLowerCase();
  }
  return input;
}

function isMatchEnded(score) {
  return (score.player === ROUNDS_TO_WIN) ||
  (score.computer === ROUNDS_TO_WIN);
}

function displayGrandWinner(score) {
  if (score.player === ROUNDS_TO_WIN) {
    console.log("Player is the grand winner!");
  } else {
    console.log("Computer is the grand winner!");
  }
}

while (true) {
  let scores = {
    player: 0,
    computer: 0
  };

  while (!isMatchEnded(scores)) {
    let board = initalizeBoard();

    while (true) {
      displayBoard(board);
      displayScore(scores);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) {
        displayBoard(board);
        updateScore(scores, board);
        displayScore(scores);
        if (someoneWon(board)) {
          prompt(`${detectWinner(board)} won!`);
        } else {
          prompt("It's a tie!");
        }
        if (pressEnterToContinue().length === 0) break;
      }

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) {
        displayBoard(board);
        updateScore(scores, board);
        displayScore(scores);
        if (someoneWon(board)) {
          prompt(`${detectWinner(board)} won!`);
        } else {
          prompt("It's a tie!");
        }
        if (pressEnterToContinue().length === 0) break;
      }
    }
  }

  displayGrandWinner(scores);

  if (isPlayAgain(getPlayAgainAnswer())) {
    console.clear();
  } else {
    break;
  }
}

prompt("Thanks for playing Tic Tac Toe!");

