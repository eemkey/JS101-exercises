let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};
  for (let i = 0; i < produceKeys.length; i++) {
    let currentKey = produceKeys[i];
    let currentValue = produceList[currentKey];
    if (currentValue === "Fruit") {
      selectedFruits[currentKey] = currentValue;
    }
  }
  return selectedFruits;
}

console.log(selectFruit(produce));