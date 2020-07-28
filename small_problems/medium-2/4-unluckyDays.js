//rules: year is greater than 1752
//calendar is not going to change in the future

//input: number (year)
//output: number (frequency of friday the 13ths in that year)

//in 1 year, there are 12 13'ths. So there are 12 possibilities of Friday the 13th's. 
//Need to iterate through each month and get the day that falls on the 13th.
//If Friday falls on 13th, add to total.


function fridayThe13ths(year) {
  let thirteenths = [];
  let count = 0;
  for (let month = 0; month < 12; month++) {
    thirteenths.push(new Date(year, month, 13));
  }
  for (let day in thirteenths) {
    if (thirteenths[day].getDay() === 5) {
      count += 1;
    } 
  }
  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2