function nextToLast(str) {
  let strArr = str.split(" ");
  return strArr[strArr.length - 2];
}

console.log(nextToLast("Launch School is great!"));