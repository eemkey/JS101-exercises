function xor(first, second) {
  return (first || second) && !(first && second);
}

console.log(xor(5, 0)); // true
console.log(xor(false, true)); // true
console.log(xor(1, 1)); // false
console.log(xor(true, true)); // false
