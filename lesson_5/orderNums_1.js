let arr = ['10', '11', '9', '7', '8'];

console.log(arr.map(num => Number(num)).sort((a, b) => b - a));