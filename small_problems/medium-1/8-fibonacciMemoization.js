let cache = {};
function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else if (cache[num]) {
     return cache[num];
  } else {
    cache[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return cache[num];
  }
}

console.log(fibonacci(50));