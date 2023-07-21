const readline = require('readline-sync');

let humanWins = {
  rock: 5,
  paper: 0,
  scissors: 0,
};

let humanWinsArr = Object.entries(humanWins);
let winsGreaterThan3 = humanWinsArr.find(wins => wins[1] >= 3);

// let smartCompMove;

let smartChoices = {
  rock: ["rock", "paper"],
  paper: ["paper", "scissors"],
  scissors: ["scissors", "rock"],
};

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  score: [0, 0],


  displayWelcomeMessage() {
    console.log(`Welcome to Rock, Paper, Scissors! 
The score is: You ${this.score[0]} | Computer ${this.score[1]}`);
  },

  displayWinner() {

    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
       console.log('You win!');
       humanWins[humanMove] += 1;
       console.log(humanWins[humanMove]);
       this.score[0] += 1;
       console.log(`The score is: You ${this.score[0]} | Computer ${this.score[1]}`);
      } else if ((humanMove === 'rock' && computerMove === 'paper') ||
                 (humanMove === 'paper' && computerMove === 'scissors') ||
                 (humanMove === 'scissors' && computerMove === 'rock')) {
        this.score[1] += 1;
        humanWins[humanMove] -= 1;
        console.log(humanWins[humanMove]);
        console.log(`The score is: You ${this.score[0]} | Computer ${this.score[1]}`);
      } else {
        console.log("It's a tie");
      }
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (this.score[0] === 5) {
        console.log(`You win!`);
        this.score = [0, 0];
      }
      if (this.score[1] === 5) {
        console.log(`Computer wins!`);
        this.score = [0, 0];
      }
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  //console.log(humanWinsArr);
  //console.log(winsGreaterThan3);

  let computerObject = {

    choose() {
      let choices = ['rock', 'paper', 'scissors'];
      //console.log(smartChoice); 
      if (winsGreaterThan3) {
        let smartChoice = smartChoices[winsGreaterThan3[0]];
        this.move = smartChoice[Math.floor(Math.random() * smartChoice.length)];
      } else {
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while(true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) {
          this.move = choice;
          break;
        }
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

RPSGame.play();
