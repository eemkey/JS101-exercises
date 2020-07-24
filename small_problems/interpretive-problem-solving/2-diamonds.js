/*
input: number (odd integer n)
output: string logged onto the console
rules: 
  n x n grid
  input is always odd integer
  number of rows of stars is = to n
  middle row has n number of stars
  # of stars:
    for n=1: 1
    for n=3: 1,3,1
    for n=9: 1,3,5,7,9,7,5,3,1
  # of spaces: 
    for n=1, 0
    for n=3, 1,0,1
    for n=9 4,3,2,1,0,1,2,3,4
    so starting spaces is n / 2 rounded down
  don't need to worry about input of 0 because that is not odd

data structure: string

algorithm:
run a loop with starting value idx as 0 until it has iterated num times 
  set value of variable spaces (which is a number):
    initial value will be num / 2 rounded down - idx. This will decrease by one each time. Since it will go negative past 0 once the halfway point is reached, will need to get the absolute value of this to get a positive amount of spaces.
  set value of variable stars (which is a number):
    initial value is 1, and increments by 2 until it has reached num. 
    once reached num, then will decrease by 2 until reaching intial value again. (need if statement)
  print the number of spaces + number of stars to the console.
*/

// function diamond(num) {
//   let stars;
//   let spaces;

//   for (let idx = 0; idx < num; idx++) {
//     spaces = Math.abs(Math.floor(num / 2) - idx);
  
//     if (idx <= Math.floor(num / 2)) {
//       stars = (2 * idx) + 1;
//     } else {
//       stars -= 2;
//     }

//     console.log(" ".repeat(spaces) + "*".repeat(stars));
//   }
// }

// console.log(diamond(1));
// // logs
// // *
// console.log(diamond(3));
// // logs
// //  *
// // ***
// //  *
// console.log(diamond(9));
// // logs
// //     *
// //    ***
// //   *****
// //  *******
// // *********
// //  *******
// //   *****
// //    ***
// //     *
// console.log(diamond(5));


/*
HOLLOW DIAMOND
input: number (odd integer n)
output: string logged onto the console
rules: 
  n x n grid
  input is always odd integer
  number of rows of stars is = to n

  first spaces (same # of spaces from solid diamond problem):
  n=3:
  1,0,1
  n=9:
  4,3,2,1,0,1,2,3,4

  second spaces
  n=3:
  0,1,0
  n=9:
  0,1,3,5,7,5,3,1,0

  stars:
  n=3:
  1,2,1
  n=9:
  first star is 1, second star is 1.
  for first and last rows, only have first star and not second star.

  data structure: string

  algorithm:
  run a loop with starting value idx as 1 until it is has iterated n times.
  determine the number of before spaces:
    initial value will be num / 2 rounded down - idx. This will decrease by one each time. Since it will go negative past 0 once the halfway point is reached, will need to get the absolute value of this to get a positive amount of spaces.
  determine the number of first stars: 1 star. need 2 stars if idx is not 0 or n-1.
  log to console 
*/

///NEED TO REFACTOR/REDO!!!
function hollowDiamond(num) {
  let firstSpaces;
  let secondSpaces = -1;
  let star = 1;
  
  for (let idx = 0; idx < num; idx++) {
    firstSpaces = Math.abs(Math.floor(num / 2) - idx);
    if (idx <= Math.floor(num / 2)) {
      if ((idx === 0 || idx === num - 1)) {
        secondSpaces = -1;
      } else {
        secondSpaces += 2;
      }
    } else {
      secondSpaces -= 2;
    }

    if (idx === 0 || idx === num - 1) {
      console.log(" ".repeat(firstSpaces) + "*".repeat(star));
    } else {
      console.log(" ".repeat(firstSpaces) + "*".repeat(star) + " ".repeat(secondSpaces) + "*".repeat(star));
    }
  }
}



console.log(hollowDiamond(1));
// logs
// *
console.log(hollowDiamond(3));
// logs
//  *
// * *
//  *
console.log(hollowDiamond(9));
// logs
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
console.log(hollowDiamond(5));