//input: floating point number representing an angle between 0 and 360
//output: string that represents the angle in degrees, minutes, seconds
//˚ degree ' minutes "" seconds
//60 minutes in a degree, 60 seconds in a minute

function dms(num) {
  const MINUTES = 60;
  const SECONDS = 60;

  let degrees = Math.floor(num);
  let minutesFloat = (num - degrees) * MINUTES;
  let minutes = Math.floor(minutesFloat);
  let seconds = Math.floor((minutesFloat - minutes) * SECONDS)

  
  return `${addZero(degrees)}°${addZero(minutes)}'${addZero(seconds)}"`
}

function addZero(num) {
  let numString = String(num);
  if (numString.length < 2) {
    return `0${numString}`
  }
  else {
    return num;
  }
}


console.log(dms(30));           // 30°00'00"
console.log(dms(-76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // -1°00'00"
console.log(dms(400));  // 400°00'00"
console.log(dms(-40));  // -40°00'00"
console.log(dms(-420)); // 420°00'00"