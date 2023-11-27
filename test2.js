const readline = require('readline-sync');
prompt("How much time is left?");
let timeLeft = readline.question();
prompt("How many questions are left?");
let questionsLeft = readline.question();

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function timePerQuestion(timeLeft, questionsLeft) {
  if (timeLeft > 299) {
    timeLeft -= 120;
  } else if (timeLeft > 199) {
    timeLeft -= 80;
  } else if (timeLeft > 99) {
    timeLeft -= 40;
  }
  console.log(timeLeft / questionsLeft);
}

timePerQuestion(timeLeft, questionsLeft);
