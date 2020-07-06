let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

//add up all the ages

let agesArr = Object.values(ages);
console.log(agesArr.reduce((total, age) => total + age, 0));