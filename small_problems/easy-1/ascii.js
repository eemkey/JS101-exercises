function asciiValue(str) {
  return str.split("").reduce((acc, cur) => acc + cur.charCodeAt(), 0);
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0