function factors(number) {
  number = Math.abs(number);
  let factors = [];
  for (let divisor = number; divisor > 0; divisor--) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
  }
  return factors;
}