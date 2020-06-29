const readline = require("readline-sync");
const SQMETERS_TO_SQFEET = 10.7639;
const MESSAGES = {
  type: "Please enter input type: (meters/feet)",
  length: "Please enter the length of the room.",
  width: "Please enter the width of the room.",
  invalid: "Invalid input, please try again."
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidUnit(unit) {
  const matches = ["m", "meter", "meters", "f", "ft", "foot", "feet"];
  return unit.trimStart() === "" || matches.indexOf(unit) === -1;
}

function invalidNum(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num)) || Number(num) <= 0;
}

function getInputAndCheck(message, numValidityTest) {
  prompt(MESSAGES[message]);
  let response = (message === "type") ? readline.question().toLowerCase() : readline.question();
  while (numValidityTest(response)) {
    prompt(MESSAGES["invalid"]);
    prompt(MESSAGES[message]);
    response = readline.question();
  }
  return response;
}

function calcRoomArea(length, width) {
  return length * width;
}

let unitInput = getInputAndCheck("type", invalidUnit);
let lengthInput = getInputAndCheck("length", invalidNum);
let widthInput = getInputAndCheck("width", invalidNum);
let area = calcRoomArea(lengthInput, widthInput);
let areaInMeters;
let areaInFeet;
let unitInMeters;
let unitInFeet;

if (unitInput[0] === "m") {
  areaInMeters = area;
  areaInFeet = area * SQMETERS_TO_SQFEET;
  unitInMeters = unitInput;
  unitInFeet = "feet";
  console.log(`The area of the room is ${areaInMeters.toFixed(2)} sq ${unitInMeters} (${areaInFeet.toFixed(2)} sq ${unitInFeet}).`);
} else {
  areaInFeet = area;
  areaInMeters = area / SQMETERS_TO_SQFEET;
  unitInFeet = unitInput;
  unitInMeters = meters;
  console.log(`The area of the room is ${areaInFeet.toFixed(2)} sq ${unitInFeet} (${areaInMeters.toFixed(2)} sq ${unitInMeters}).`);
}

  

  

