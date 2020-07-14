function getMiddleWord(str) {
  if (typeof str !== "string") {
    return "This is not a string!";
  }

  if (!str.match(/\S/)) {
    return "There are no words here!";
  }

  let whiteSpace = /\s+/;
  strArr = str.trim().split(whiteSpace);

  if (strArr.length > 1  && strArr.length % 2 !== 0) {
    let middleIdx = (strArr.length - 1) / 2;
    return strArr[middleIdx];
  } else {
    return "There is no middle word!";
  }
}

console.log(getMiddleWord("   "));
console.log(getMiddleWord(" Hello sdfds   fsdg    sdfds sdf       "));
console.log(getMiddleWord("hello World  hello Launch  School!!  "));
console.log(getMiddleWord("There is no middle word in this string"));
console.log(getMiddleWord(""));
console.log(getMiddleWord("['hello', 'cool', 'World']"));


