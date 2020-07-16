//function that generates age, log to console
//age is random number between 20 and 120, inclusive
//Need to use Math.random() and Math.floor()

function howOldIsTeddy(min, max) {
  let randomAge = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Teddy is ${randomAge} years old!`);
};

howOldIsTeddy(20, 120);