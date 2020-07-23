//input: string
//output: string with every other alphabetic character uppercased and the others lowercased
//initialize variable called needUpper and assign to it a value of true;
//split string, loop through. change all characters to lowercase. Change first alphabetic character to uppercase (if needUpper is set to true) and then change needUpper to false. once encounter next alphabetic character, change needUpper to true

function staggeredCase(str) {
  let needUpper = true;
  return str.split("").map(char => {
    char = char.toLowerCase();
    if (char >= "a" && char <= "z") {
      if (needUpper) {
        needUpper = false;
        return char.toUpperCase();
      } else if (!needUpper) {
        needUpper = true;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join("");
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);