//rules: equilateral: all 3 sides are of equal length
  //isosceles: 2 sides are of equal length, while the 3rd is different
  //scalene: all 3 sides are different legnths
  //valid triangle: sum of the lengths of the 2 shorter sides must be greater than the length of the longest side
  //every side must have a length greater than 0

//input: 3 lengths (numbers)
//output: returns string ("equilateral", "isosceles", "scalene", or "invalid")

//check if all arguments are greater than 0. if not, return invalid
//check for valid triangle, if not, return invalid
  //valid triangle function:
    //s1 + s2 > s3 || s1 + s3 > s2 || s2 + s3 > s1
//check for equilatera: s1 === s2 === s3
//check for scalene: s1 !== s2 !== s3
//check for isosceles: s1 === s2 && s1 !== s3 || s1 === s3 && s1 !== s2 || s2 === s3 && s2 !== s1

function triangle(s1, s2, s3) {
  if ((s1 <= 0 || s2 <= 0 || s3 <= 0) ||
    (s1 + s2 < s3 || s1 + s3 < s2 || s2 + s3 < s1)) {
    return false;
  } else {
    if (s1 === s2 && s2 === s3) {
      return "equilateral";
    } else if (s1 !== s2 && s2!== s3) {
      return "scalene";
    } else {
      return "isosceles";
    }
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"