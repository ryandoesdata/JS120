/*
Textual description:
A game where a player chooses between three options
A computer chooses between three options
An outcome is decided

nouns and verbs:
nouns: game, player, computer, human, choice, outcome, winner, loser, tie, 
verbs: play, choose, compare, win, lose, tie.

associate nouns and verbs:

game: play, compare, win, lose, tie
choice, outcome, winner, loser, tie


player: choose
human, computer

outcome: compare, win, lose, tie

write scaffolding and spike code:
*/

const readline = require("readline-sync");

function ooRPS (humanChoice, computerChoice, again) {
  return {
    humanChoice,
    computerChoice,
    validMoves: ["rock", "paper", "scissors"],
    yesOrNo: ["y", "n"],
    again,

    displayGame() { //logs an introduction to the game
      console.clear();
      console.log("Welcome to ooRPS!")
    },

    humanChoose() { //gives the player a choice
      while(true) {
        this.humanChoice = readline.question("Choose: rock, paper, scissors\n");
        console.clear();
        if  (!this.validMoves.includes(this.humanChoice)) {
            console.log("That is not a valid choice.")
          } else break;
      }
    },

    computerChoose() { //computer makes a choice
      this.computerChoice = this.validMoves[Math.floor(Math.random() * 3)]
      // console.log(`Computer chooses ${this.computerChoice}.`);
    },

    displayResults() {
      console.log(`You chose ${this.humanChoice}.`);
      console.log(`Computer chose ${this.computerChoice}.`);
    },

    compare() { //compares computer and human choices to determine the outcome
      if ((this.humanChoice === 'rock' && this.computerChoice === 'scissors') ||
      (this.humanChoice === 'paper' && this.computerChoice === 'rock') ||
      (this.humanChoice === 'scissors' && this.computerChoice === 'paper')) {
    console.log('You win!');
  } else if ((this.humanChoice === 'rock' && this.computerChoice === 'paper') ||
             (this.humanChoice === 'paper' && this.computerChoice === 'scissors') ||
             (this.humanChoice === 'scissors' && this.computerChoice === 'rock')) {
    console.log('Computer wins!');
  } else {
    console.log("It's a tie");
  }
    },

    playAgain() {
      while(true) {
      this.again = readline.question("Would you like to play this.again? Y or N\n");
        if  (!this.yesOrNo.includes(this.again.toLowerCase())) {
          console.clear();
          console.log("That is not a valid choice.")
        } else break; 
      }
        return this.again.toLowerCase() === "y";
    },

    displayGoodbyeMessage() {
      console.clear();
      console.log("Thanks for playing ooRPS! Goodbye");
    },

    play() { //initializes game
      while (true) {
        this.displayGame();
        this.humanChoose();
        this.computerChoose();
        this.displayResults();
        this.compare();
        if (!this.playAgain()) break;
      }
      this.displayGoodbyeMessage();
    }
  }
}

let newGame = ooRPS();
newGame.play();
