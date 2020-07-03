//Output the string "The Flintstones Rock!" 10 times
//each line is indented 1 space to the right of the line above it
//for loop 10 times
//start at index 0, up until but not including 10
//add empty string, and with each increment, add a space to the empty string
//concatonate with the string


for (let space = 0; space < 10; space++) {
  console.log(" ".repeat(space) + "The Flintstones Rock!");
}