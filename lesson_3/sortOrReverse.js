let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.slice().reverse();
console.log(newNumbers);
console.log(numbers);

let newNumbersWithSort = numbers.slice().sort((num1, num2) => num2 - num1);
console.log(newNumbersWithSort);
console.log(numbers);

let newArr = [];
numbers.forEach((num) => newArr.unshift(num));
console.log(newArr);
console.log(numbers);

let newArrWithReduce = numbers.reduce((arr, num) => ([num, ...arr]), []);

console.log(newArrWithReduce);
console.log(numbers);