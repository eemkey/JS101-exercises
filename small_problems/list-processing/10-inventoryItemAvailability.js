//input: item (number), list of transactions (array)
//output: boolean. true if the sum of the quantity values of the item's transactions is greater than 0
//movement property -- value of out will decrease the item's quantity
//in --> increase quantity. out --> decrease quantity
//example: 101
  //{ id: 101, movement: 'in',  quantity:  5 }
  //{ id: 101, movement: 'in',  quantity: 12 }
  //{ id: 101, movement: 'out', quantity: 18 }
    //+5 +12 -18 = -1 --> false
//example: 103
  //{ id: 103, movement: 'out', quantity: 20 }
  //{ id: 103, movement: 'out', quantity: 15 }
    // -20 -15 = -25 --> false
//example: 105
  //{ id: 105, movement: 'in',  quantity: 10 }
  //{ id: 105, movement: 'in',  quantity: 25 }
    //+10 +25 = 35 --> true

//use transactionsFor function to select only the objects that are associated with the relevant id (item) and assign the result to a new variable filteredTransactions.
//loop through filteredTransactions array and check the value of movement. if "in", then add the value in the quantity property. If "out", the decrease the value. Return boolean that is determined by whether filteredTransactions is greater than 0 or not.

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(item => inventoryItem === item.id);
}

function isItemAvailable(item, transactions) {
  let filteredTransactions  = transactionsFor(item, transactions).reduce((acc, curr) => {
    if (curr.movement === "in") {
      return acc + curr.quantity;
    } else {
      return acc - curr.quantity;
    }
  }, 0)
  return filteredTransactions > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true