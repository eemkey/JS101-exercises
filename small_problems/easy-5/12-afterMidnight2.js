//input: string
//output: integer
//split input with ":" as delimiter
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function afterMidnight(time) {
  let [hours, minutes] = time.split(":").map(num => Number(num));
  return ((hours * MINUTES_IN_HOUR) + minutes) % MINUTES_IN_DAY;
}

// function beforeMidnight(time) {
//   let minutes = MINUTES_IN_DAY - afterMidnight(time);
//   if (minutes === MINUTES_IN_DAY) {
//     minutes = 0;
//   }
//   return minutes;
// }

function beforeMidnight(str) {
  return (MINS_PER_DAY - afterMidnight(str)) % MINS_PER_DAY;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
console.log(beforeMidnight("23:25") === 35);
console.log(afterMidnight("23:25") === 1405);