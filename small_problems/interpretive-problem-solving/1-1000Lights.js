//input: number (total number of switches)
//output: array of lights that are on after count passes
//light numbers start with 1. count starts at 1. if num % count === 0, then that switch is toggled.
//loop that loops over num amount of times starting with count = 1 and populate obj with key as count, and value as true


function lightsOn(switches) {
  let obj = {};
  let lightsOn = [];
  for (let count = 1; count <= switches; count++) {
   obj[count] = true;
  }  
  
  for (let count = 2; count <=switches; count++) {
    for (let number in obj) {
      let num = Number(number);
      if ((num) % count === 0) {
        if (obj[num] === true) {
          obj[num] = false;
        } else {
          obj[num] = true;
        }
      }
    }
  }
  for (let light in obj) {
    if (obj[light] === true) {
      lightsOn.push(light);
    }
  }
  return lightsOn.map(num => Number(num));
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]