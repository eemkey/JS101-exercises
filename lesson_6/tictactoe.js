const readline  = require("readline-sync");
const MESSAGES = require("./tictactoe_messages.json");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const STARTING_PLAYERS = ["p", "player", "c", "computer"];
const COMPUTER_MARKER = "O";
const MIDDLE_SQUARE = "5";
const ROUNDS_TO_WIN = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function prompt(msg) {
  console.log(`=> ${MESSAGES[msg]}`);
}

function displayBoard(board) {
  console.clear();
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

function updateScore(scores, winner) {
  if (Object.keys(scores).includes(winner)) {
    scores[winner]++;
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

function chooseStartingPlayer() {
  prompt("chooseStarter");
  let starter = readline.question().toLowerCase();
  while (!STARTING_PLAYERS.includes(starter)) {
    prompt("invalid");
    prompt("chooseStarter");
    starter = readline.question().toLowerCase();
  }
  return starter[0];
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === "p") {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === "p" ? "c" : "p";
}

function playerChoosesSquare(board) {
  let square;
  while (true) {
    console.log(`Choose a square (${joinOr(emptySquares(board))}): `);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("invalid");
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;
  square = computerMove(board, COMPUTER_MARKER);

  if (!square) {
    square = computerMove(board, HUMAN_MARKER);
  }

  if (!square) {
    if (isMiddleSquareEmpty(board)) {
      square = MIDDLE_SQUARE;
    }
  }

  if (!square) {
    square = chooseRandomSquare(board);
  }
  board[square] = COMPUTER_MARKER;
}

function chooseRandomSquare(board) {
  let randomIdx = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIdx];
  return square;
}

function computerMove(board, marker) {
  let atRiskSquare;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    atRiskSquare = findAtRiskSquare(line, board, marker);
    if (atRiskSquare) break;
  }
  return atRiskSquare;
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

function isMiddleSquareEmpty(board) {
  return emptySquares(board).includes(MIDDLE_SQUARE);
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
  prompt("playAgain");
  let answer = readline.question().toLowerCase();
  
  while ((answer[0] !== "n" && answer[0] !== "y") || answer.length !== 1) {
    prompt("invalid");
    prompt("playAgain");
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function isPlayAgain(answer) {
  return answer === "y";
}

function isMatchEnded(scores) {
  return (scores.player === ROUNDS_TO_WIN) ||
  (scores.computer === ROUNDS_TO_WIN);
}

function displayGrandWinner(scores) {
  if (scores.player === ROUNDS_TO_WIN) {
    console.log(`${MESSAGES["grandWinner"]}`, "player");
  } else {
    console.log(`${MESSAGES["grandWinner"]}`, "computer");
  }
}

function displayWinnerOfRound(board) {
  if (someoneWon(board)) {
    console.log(`=> ${detectWinner(board)} wins!`);
  } else {
    prompt("tie");
  }
  prompt("star");
  console.log("");
}

while (true) {
  console.clear();

  let scores = { player: 0, computer: 0 };

  prompt("welcome");
  console.log(`${MESSAGES["roundsToWin"]}`, ROUNDS_TO_WIN);

  while (!isMatchEnded(scores)) {
    let board = initalizeBoard();
    let currentPlayer = chooseStartingPlayer();

    while (true) {
      displayBoard(board);
      displayScore(scores);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);

      if (someoneWon(board) || boardFull(board)) {
        displayBoard(board);
        updateScore(scores, detectWinner(board));
        displayScore(scores);
        displayWinnerOfRound(board);
        break;
      }
    }
  }

  displayGrandWinner(scores);

  if (!isPlayAgain(getPlayAgainAnswer())) break;
}

prompt("bye");