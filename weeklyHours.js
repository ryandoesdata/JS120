let remainingHours = 25;
let totalDays = 7;
const averageHours = remainingHours / totalDays;
let totalHours = 0;

function minutesToDecimal(timeWithMinutes) {
  let hours = Math.floor(timeWithMinutes)
  let minutes = timeWithMinutes - hours;
  let minuteDecimal = minutes / .6;
  let timeWithDecimal = hours + minuteDecimal;
  return timeWithDecimal; 

}

function decimalToMinutes(timeWithDecimal) {
  let hours = Math.floor(timeWithDecimal);
  let minuteDecimal = timeWithDecimal - hours;
  let minutes = minuteDecimal * 60;
  let hoursLeft = hours.toString();
  let minutesLeft = minutes.toFixed().toString();

  return `${hoursLeft} hours and ${minutesLeft} minutes`;
}

function weeklyHours(daysHours) {
  console.clear();
  totalHours += minutesToDecimal(daysHours);
  console.log(totalHours);
  daysHours = minutesToDecimal(daysHours);
  remainingHours -= daysHours;
  totalDays -= 1;
  let hoursPerDayDecimal = remainingHours / totalDays;
  
  if (hoursPerDayDecimal <= 0) {
    console.log(`You've done ${decimalToMinutes(totalHours)}.`)
    console.log("Your week is done! Congrats!");
  } else if (hoursPerDayDecimal <= averageHours) {
    console.log(`Go you! You're ahead of schedule. Do at least
    ${decimalToMinutes(timeWithDecimal)} per day.`)
  } else {
    console.log("You're behind schedule! You now must do at least " 
    + hoursLeft + " hours and " + minutesLeft + " minutes per day.")
  }
}

weeklyHours(2)
weeklyHours(3.11)
weeklyHours(0)
weeklyHours(0)
weeklyHours(2.10)