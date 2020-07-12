const readline = require("readline-sync");
const SUITS = ["H", "S", "D", "C"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const TWENTY_ONE = 21;

function prompt(msg) {
  console.log(`=> ${msg}`);
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
  console.log("")
  console.log(`Player: ${calculateTotal(playerHand)}`);
  for (let playerCard of playerHand) {
    console.log(playerCard);
  }
  console.log("")
  if (showFull) {
    console.log(`Dealer: ${calculateTotal(dealerHand)}`);
    for (let dealerCard of dealerHand) {
      console.log(dealerCard);
    }
  } else {
    console.log(`Dealer: ${calculateTotal([dealerHand[0]])}`);
    console.log(dealerHand[0]);
  }
  console.log("")
}

function hit(hand, deck) {
  hand.push(deck.shift());
  return hand;
}

function bust(hand) {
  return calculateTotal(hand) > TWENTY_ONE;
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
    if (total > TWENTY_ONE) {
      total -= 10;
    }
  });
  return total;
}

function getWinner(dealerHand, playerHand) { 
  let winner;
  let dealerTotal = calculateTotal(dealerHand);
  let playerTotal = calculateTotal(playerHand);
  if (!bust(playerHand) && (playerTotal > dealerTotal || bust(dealerHand))) {
    winner  = "Player";
  } else if (!bust(dealerHand) && ( playerTotal < dealerTotal || bust(playerHand))) {
    winner = "Dealer";
  } else {
    winner = "tie";
  }
  return winner;
}

function displayWinner(outcome, playerHand, dealerHand) {
  if (bust(playerHand)) {
    console.log("Player busted!");
  } 
  if (bust(dealerHand)) {
    console.log("Dealer busted!");
  }
  if (outcome === "Player" || outcome === "Dealer") {
    console.log(`The winner is: ${outcome}`);
  } else {
    console.log(`It's a ${outcome}!`);
  }
}

function getPlayAgainAnswer() {
  prompt("Would you like to play again? (y/n)");
  let answer = readline.question().toLowerCase();
  while ((answer[0] !== "n" && answer[0] !== "y") || answer.length !== 1) {
    prompt("Sorry, invalid answer.");
    prompt("Would you like to play again? (y/n)");
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function isPlayAgain(answer) {
  return answer === "y";
}

function getHitOrStayAnswer() {
  prompt("Do you want to hit (h) or stay (s)?");
  let answer = readline.question().toLowerCase();
  while ((answer[0] !== "h" && answer[0] !== "s") || answer.length !== 1) {
    prompt("Invalid answer.");
    prompt("Do you want to hit (h) or stay (s)?");
    answer = readline.question().toLowerCase();
  }
  return answer;
}

while (true) {
  console.clear();
  prompt("Welcome to Twenty One!");
  let deck = makeNewShuffledDeck();
  let playerHand = makeHand(deck);
  let dealerHand = makeHand(deck);
  viewHand(playerHand, dealerHand);

  while (true) {
    let answer = getHitOrStayAnswer();
    if (answer === "h") {
      hit(playerHand, deck);
      console.clear();
      viewHand(playerHand, dealerHand);
    }
    if ((answer === "s") || bust(playerHand)) break;
  }

  while (calculateTotal(dealerHand) < 17) {
    if (bust(playerHand) || bust(dealerHand)) break;
    prompt("Dealer is playing...");
    hit(dealerHand, deck);
    console.clear();
    viewHand(playerHand, dealerHand);

  }

  console.clear();
  viewHand(playerHand, dealerHand, "fullHand");

  let outcome = getWinner(dealerHand, playerHand);
  displayWinner(outcome, playerHand, dealerHand);

  if (!isPlayAgain(getPlayAgainAnswer())) break;
}