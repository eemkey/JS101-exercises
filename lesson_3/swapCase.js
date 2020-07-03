let munstersDescription = "The Munsters are creepy and spooky.";

//output: `tHE mUNSTERS ARE CREEPY AND SPOOKY.`


console.log(munstersDescription.split("").map(letter => {
  if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
    return letter.toLowerCase();
  } else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
    return letter.toUpperCase();
  } else {
    return letter;
  }
}).join(""));


