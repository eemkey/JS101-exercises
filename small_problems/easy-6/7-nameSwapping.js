//input: string of: first name, space, last name
//output: string of: last name, comma, space, first name

// function swapName(name) {
// nameArr = name.split(" ");
// let [first, last] = nameArr;
// return `${last}, ${first}`;
// }

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

function swapName(name) {
  namesArr = name.split(" ");
  return `${namesArr.slice(-1)}, ${namesArr.slice(0, -1).join(" ")}`;
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"

