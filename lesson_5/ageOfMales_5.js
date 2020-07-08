let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

//compute and display the total age of the male members of the family

console.log(Object.values(munsters).filter(person => person.gender === "male").reduce((acc, curr) => acc + curr.age, 0));
