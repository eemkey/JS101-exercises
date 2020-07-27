//rules:
  //angles are integers
  //valid triangle: sum of angles must be exactly 180 degrees
    //every angle must be greater than 0
  //right triangle: 1 angle is exactly 90 degrees
  //acute: all 3 angles are less than 90 degrees
  //obtuse: 1 angle is greater than 90 degrees
  
  //input: 3 angles (numbers)
  //output: string (right, acute, obtuse, or invalid)

  //valid triangle:
    //(Math.min(a1, a2, a3) > 0) && (a1 + a2 + a3 === 180);
  
  //set variable angles to equal an array of the 3 angle arguments
  //valid triangle test -- if the smallest angle is greater than 0 and the sum of all 3 angle arguments is equal to 180, then proceed to checking which type of triangle the outcome is
    //if all angles are less than 90, return acute
    //if one angle is 90, return right
    //otherwise, return obtuse
  //else if not a valid triangle then return invalid


function triangle(a1, a2, a3) {
  let angles = [a1, a2, a3];
  if ((Math.min(...angles) > 0) && (angles.reduce((acc, curr) => acc + curr) === 180)) {
    if (angles.every(angle => angle < 90)) {
      return "acute";
    } else if (angles.some(angle => angle === 90)) {
      return "right"
    } else {
      return "obtuse";
    }
  } else {
    return "invalid"
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"