//function takes in a positive integer n and logs a right triangle whose sides each have n stars. 
//first line, n-1 spaces, 1 star
//last line: num of stars = n, 0 spaces

//input: positive integer, n
//output: strings that are logged onto the console

//data structure: string

//create function called triangle that has a parameter named n.
//create and set variable idx to 1
//create a loop that loops n times
//inside loop, print n-idx spaces and idx stars.increment idx by 1;

function triangle(n) {
    let star = "*";
    let idx = 1;
    let space = " ";
    
    while (idx <= n) {
      console.log(space.repeat(n-idx) + star.repeat(idx));
      idx++;
    }
}


triangle(5);
//     *
//    **
//   ***
//  ****
// *****

triangle(9);
//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********