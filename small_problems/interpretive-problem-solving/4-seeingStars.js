/*
input: number (odd integer)
output: 8 pointed star string(s) printed to the console

rules: 
smallest star is when N is 7
N is always a positive odd integer
middle row always has N stars
row above and below middle row always has 3 stars each

when N=7:
1. * _ _ * _ _ * 
2. _ * _ * _ * _  
3. _ _ * * * _ _
4. * * * * * * *  
5. _ _ * * * _ _
6. _ * _ * _ * _  
7. * _ _ * _ _ *  

when N=9:
1. * _ _ _ * _ _ _ *
2. _ * _ _ * _ _ * _
3. _ _ * _ * _ * _ _ 
4. _ _ _ * * * _ _ _
5. * * * * * * * * *
6. _ _ _ * * * _ _ _
7. _ _ * _ * _ * _ _
8. _ * _ _ * _ _ * _
9. * _ _ _ * _ _ _ *

when N=11:
1.  * _ _ _ _ * _ _ _ _ *
2.  _ * _ _ _ * _ _ _ * _
3.  _ _ * _ _ * _ _ * _ _ 
4.  _ _ _ * _ * _ * _ _ _ 
5.  _ _ _ _ * * * _ _ _ _
6.  * * * * * * * * * * *
7.  _ _ _ _ * * * _ _ _ _
8.  _ _ _ * _ * _ * _ _ _
9.  _ _ * _ _ * _ _ * _ _
10. _ * _ _ _ * _ _ _ * _
11. * _ _ _ _ * _ _ _ _ *

(N - 3) / 2 = total number of spaces on each side
# of spaces in between:

0 2 2 0
1 1 1 1
2 0 0 2

0 3 3 0
1 2 2 1
2 1 1 2
3 0 0 3

0 4 4 0
1 3 3 1
2 2 2 2 
3 1 1 3
4 0 0 4
innerSpaces = N - 3 / 2, decrease by 1
outerSpaces = 0, increase by 1 
stop changing numbers when reach middle
reverse numbers after middle

algorithm:
function star that takes num as an argument
declare innerSpaces variable and set to num - 3 / 2
declare outerSpaces variable and set to 0
while idx is less than num / 2 rounded down,
  log to console: outerSpaces, *, innerSpaces, *, innerSpaces, *
  increase outerSpaces by 1, and decrease innerSpaces by 1.
if idx is equal to num / 2 rounded down, then log to console num number of *'s
while idx is greater than num / 2 rounded down,
  log to console outerSpaces, *, innerSpaces, *, innerSpaces, *
  decrease outerSpaces by 1, and increase innerSpaces by 1.
*/

// function star(num) {
//   let outerSpaces = 0;
//   let innerSpaces = (num - 3) / 2;
//   let idx = 0;
//   let middleIdx = Math.floor(num / 2);
//   while (idx < middleIdx) {
//     console.log(" ".repeat(outerSpaces) + "*" + " ".repeat(innerSpaces) + "*" + " ".repeat(innerSpaces) + "*")
//     outerSpaces += 1;
//     innerSpaces -= 1;
//     idx += 1;
//   }

//   if (idx === middleIdx) {
//     console.log("*".repeat(num));
//     outerSpaces -= 1;
//     innerSpaces += 1;
//     idx += 1;
//   }

//   while (idx > middleIdx && idx < num) {
//     console.log(" ".repeat(outerSpaces) + "*" + " ".repeat(innerSpaces) + "*" + " ".repeat(innerSpaces) + "*")
//     outerSpaces -= 1;
//     innerSpaces += 1;
//     idx += 1;
//   }
// }

//refactored: 
function star(num) {
  let spaces = (num - 3) / 2;
  let middleIdx = Math.floor(num / 2);
  for (let idx = 0; idx < middleIdx; idx++) {
    console.log(" ".repeat(idx) + "*" + " ".repeat(spaces - idx) + "*" + " ".repeat(spaces - idx) + "*")
  }

    console.log("*".repeat(num));

  for (let idx = 0; idx < middleIdx; idx++) {
    console.log(" ".repeat(spaces - idx) + "*" + " ".repeat(idx) + "*" + " ".repeat(idx) + "*")
  }
}

console.log(star(7));
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
console.log(star(9));
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *