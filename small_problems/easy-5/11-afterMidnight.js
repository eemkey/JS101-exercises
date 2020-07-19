//input: integer, positive or negative
//output: a string representing the time in hh:mm

function timeOfDay(num) {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;
  if (num < 0) {
    num = (num % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    num = num % MINUTES_PER_DAY;
  }
  let hours = Math.floor(num / MINUTES_PER_HOUR);
  let minutes = num % MINUTES_PER_HOUR;

  return `${addZeroes(hours)}:${addZeroes(minutes)}`
}

function addZeroes(number) {
  if (String(number).length < 2) {
    return `0${number}`;
  } else {
    return number;
  }
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");