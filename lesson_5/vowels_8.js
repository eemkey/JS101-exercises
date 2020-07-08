let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let wordsArr = Object.values(obj);
wordsArr.forEach(arr => {
  arr.forEach(word => {
    word.split("").forEach(letter => {
      if ("aeiou".includes(letter)) {
        console.log(letter);
      }
    });
  });
});



