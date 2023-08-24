/*

nouns:

Move
Players
Outcome

verbs:

choose
compare

associate:

the move is determined by how the players choose

the outcome is determined by comparing the moves

*/

const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
    score: 0
    }
  }

  function tallyScores() {
    return {
    rock: [0, 0],
    paper: [0, 0],
    scissors: [0, 0],
    spock: [0, 0],
    lizard: [0, 0],
  }
}

function createComputer(badChoice) {
  let playerObject = createPlayer();
  let scores = tallyScores();

  let computerObject = {

    choose() {
      let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      choices = choices.slice(choices.indexOf[badChoice], 1);
      console.log(choices);
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    }
  };
  return Object.assign(playerObject, computerObject, scores);
}

function createHuman() {
  let playerObject = createPlayer(); 
  let scores = tallyScores();

  let humanObject = {

    choose() {
      let choice;

      while(true) {
        console.log('Please choose rock, paper, scissors, spock, lizard:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'spock', 'lizard'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(humanObject, playerObject, scores);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors, Spock, Lizard!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Spock, Lizard. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);


    if ((humanMove === 'rock' && (computerMove === 'scissors' || computerMove === 'lizard')) ||
      (humanMove === 'paper' && (computerMove === 'rock' || computerMove === 'spock')) ||
      (humanMove === 'scissors' && (computerMove === 'paper' || computerMove === 'lizard')) ||
      (humanMove === 'lizard' && (computerMove === 'paper' || computerMove === 'spock')) ||
      (humanMove === 'spock' && (computerMove === 'scissors' || computerMove === 'rock'))) {
    console.log('You win!');
    this.human.score += 1;
    this.human[humanMove][0] += 1;
    this.computer[computerMove][1] += 1;
    console.log(`Human ${this.human.score}. Computer ${this.computer.score}.`)
    } else if ((humanMove === 'rock' && (computerMove === 'paper' || computerMove === 'spock')) ||
               (humanMove === 'paper' && (computerMove === 'scissors' || computerMove === 'lizard')) ||
               (humanMove === 'scissors' && (computerMove === 'rock' || computerMove === 'spock')) ||
               (humanMove === 'lizard' && (computerMove === 'rock' || computerMove === 'scissors')) ||
               (humanMove === 'spock' && (computerMove === 'paper' || computerMove === 'lizard'))) {
      console.log('Computer wins!');
      this.computer.score += 1;
      this.human[humanMove][1] += 1;
      this.computer[computerMove][0] += 1;
      console.log(`Human ${this.human.score}. Computer ${this.computer.score}.`)
    } else {
      console.log("It's a tie");
      console.log(`Human ${this.human.score}. Computer ${this.computer.score}.`) 
    }

    console.log(`You've won ${this.human[humanMove][0]} games with ${humanMove}, and lost ${this.human[humanMove][1]}.`);
    console.log(`The computer has won ${this.computer[computerMove][0]} games with ${computerMove}, and lost ${this.computer[computerMove][1]}.`);

  },

  playAgain() {
    console.log('Would you like to play again? Enter y for yes, n for no.');
    let answer = readline.question();
    return answer ? answer === 'y' : answer === 'n';
    },

  play() {
    this.displayWelcomeMessage();
    while(true) {
      this.human.choose();
      console.log(this.computer)
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
}

RPSGame.play();
