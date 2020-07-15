//function that takes in a short line of text and will appear in the console log inside a box 
//input: string
//output: string

//need length of string
//1 space before and after string
//amount of horizontal dashes/whitespace is relative to length of string
//amount of vertical lines and plus signs are fixed
//input of empty string takes up 2 horizontal dashes


function logInBox(str) {
  let dashes = "-".repeat(str.length + 2);
  let spaces = " ".repeat(str.length + 2);
  let lineOneAndFive = `+${dashes}+`
  let linesTwoAndFour = `|${spaces}|`
  console.log(`${lineOneAndFive}\n${linesTwoAndFour}\n${`| ${str} |`}\n${linesTwoAndFour}\n${lineOneAndFive}`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');