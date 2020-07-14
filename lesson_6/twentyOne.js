const readline = require("readline-sync");
const MESSAGES = require("./twentyOne_messages.json");
const SUITS = ["H", "S", "D", "C"];
const VALUES = ["2", "3", "4", "5", "6", "7",
  "8", "9", "10", "J", "Q", "K", "A"];

const GAME_NUM = 21;
const DEALER_NUM = 17;
const ROUNDS_TO_WIN = 5;
const OPTIONS = ["hit", "h", "stay", "s"];
const PLAYER = "Player";
const DEALER = "Dealer";

function prompt(msg) {
  console.log(`=> ${MESSAGES[msg]}`);
}

function makeNewShuffledDeck() {
  let deck = [];
  let card;
  for (let suit of SUITS) {
    for (let value of VALUES) {
      card = [suit, value];
      deck.push(card);
    }
  }
  shuffle(deck);
  return deck;
}

function shuffle(arr) {
  for (let idx = arr.length - 1; idx > 0; idx--) {
    let otherIdx = Math.floor(Math.random() * (idx + 1));
    [arr[idx], arr[otherIdx]] = [arr[otherIdx], arr[idx]];
  }
}

function makeHand(deck) {
  let hand = [];
  for (let num = 0; num < 2; num++) {
    hand.push(deck.shift());
  }
  return hand;
}

function viewHand(playerHand, dealerHand, showFull = null) {
  console.log("");
  console.log(`${PLAYER}: ${calculateTotal(playerHand)}`);
  for (let playerCard of playerHand) {
    console.log(playerCard);
  }
  console.log("");
  if (showFull) {
    console.log(`${DEALER}: ${calculateTotal(dealerHand)}`);
    for (let dealerCard of dealerHand) {
      console.log(dealerCard);
    }
  } else {
    console.log(`${DEALER}: ${dealerHand[0].includes("A") ? "1 or 11" : calculateTotal([dealerHand[0]])}`);
    console.log(dealerHand[0]);
    console.log("[ '?', '?' ]");
  }
  console.log("");
}

function hit(hand, deck) {
  hand.push(deck.shift());
  return hand;
}

function bust(hand) {
  return hand > GAME_NUM;
}

function calculateTotal(cards) {
  let values = cards.map(card => card[1]);
  let total = values.reduce((total, currVal) => {
    if (currVal === "A") {
      total += 11;
    } else if (["J", "Q", "K"].includes(currVal)) {
      total += 10;
    } else {
      total += Number(currVal);
    }
    return total;
  }, 0);
  values.filter(value => value === "A").forEach(() => {
    if (total > GAME_NUM) {
      total -= 10;
    }
  });
  return total;
}

function getWinner(dealerTotal, playerTotal) {
  let winner;
  if (!bust(playerTotal) && (playerTotal > dealerTotal || bust(dealerTotal))) {
    winner = PLAYER;
  } else if (!bust(dealerTotal) &&
    (playerTotal < dealerTotal || bust(playerTotal))) {
    winner = DEALER;
  } else {
    winner = "tie";
  }
  return winner;
}

function displayWinner(outcome, playerTotal, dealerTotal) {
  if (bust(playerTotal)) {
    console.log(`${MESSAGES["busted"]}`, PLAYER);
  }
  if (bust(dealerTotal)) {
    console.log(`${MESSAGES["busted"]}`, DEALER);
  }
  if (outcome === PLAYER || outcome === DEALER) {
    console.log(`${MESSAGES["winner"]}`, outcome);
  } else {
    console.log(`${MESSAGES["tie"]}`, outcome);
  }
}

function getPlayAgainAnswer() {
  console.log("");
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

function getHitOrStayAnswer() {
  prompt("hitOrStay");
  let answer = readline.question().toLowerCase();
  while (!OPTIONS.includes(answer)) {
    prompt("invalid");
    prompt("hitOrStay");
    answer = readline.question().toLowerCase();
  }
  return answer[0];
}

function updateScores(scores, winner) {
  if (Object.keys(scores).includes(winner)) {
    scores[winner]++;
  }
}

function isMatchEnded(scores) {
  return (scores.Player === ROUNDS_TO_WIN) ||
  (scores.Dealer === ROUNDS_TO_WIN);
}

function displayGrandWinner(scores) {
  if (scores.Player === ROUNDS_TO_WIN) {
    console.log(`${MESSAGES["grandWinner"]}`, PLAYER);
  } else {
    console.log(`${MESSAGES["grandWinner"]}`, DEALER);
  }
}

function displayScores(scores) {
  console.log(`${PLAYER}: ${scores.Player} | ${DEALER}: ${scores.Dealer}`);
  console.log("");
}

function pressToContinue() {
  console.log("");
  prompt("continue");
  readline.question();
}

while (true) {
  console.clear();
  prompt("welcome");
  console.log(`${MESSAGES["roundsToWin"]}`, ROUNDS_TO_WIN);
  const scores = { Player: 0, Dealer: 0 };

  while (!isMatchEnded(scores)) {
    let deck = makeNewShuffledDeck();
    let playerHand = makeHand(deck);
    let dealerHand = makeHand(deck);
    let dealerTotal = calculateTotal(dealerHand);
    let playerTotal = calculateTotal(playerHand);
    viewHand(playerHand, dealerHand);
    displayScores(scores);

    while (playerTotal !== GAME_NUM) {
      let answer = getHitOrStayAnswer();
      if (answer === "h") {
        hit(playerHand, deck);
        playerTotal = calculateTotal(playerHand);
        console.clear();
        viewHand(playerHand, dealerHand);
        displayScores(scores);
      }
      if ((answer === "s") || bust(playerTotal)) break;
    }

    while (dealerTotal < DEALER_NUM) {
      if (bust(playerTotal) || bust(dealerTotal)) break;
      hit(dealerHand, deck);
      dealerTotal = calculateTotal(dealerHand);
      console.clear();
      viewHand(playerHand, dealerHand);
    }

    console.clear();
    viewHand(playerHand, dealerHand, "fullHand");

    let outcome = getWinner(dealerTotal, playerTotal);
    updateScores(scores, outcome);
    displayScores(scores);
    displayWinner(outcome, playerTotal, dealerTotal);
    pressToContinue();
    console.clear();
  }
  displayScores(scores);
  displayGrandWinner(scores);
  if (!isPlayAgain(getPlayAgainAnswer())) break;
}

prompt("bye");