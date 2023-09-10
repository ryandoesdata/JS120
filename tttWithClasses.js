/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
let readline = require("readline-sync");

let Square = {
  UNUSED_SQUARE:   " ",
  HUMAN_MARKER:    "X",
  COMPUTER_MARKER: "O",

  init(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
    return this;
  },

  toString() {
    return this.marker;
  },

  setMarker(marker) {
    this.marker = marker;
  },

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  },

  getMarker() {
    return this.marker;
  },
};

let Board = {
    init() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = Object.create(Square).init();
    }

    return this;
  },

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  },

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  },

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  },

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

}

const PlayerPrototype = {
  initialize(marker) {
    this.marker = marker;
    return this;
  },

  getMarker() {
    return this.marker;
  },
};

let Human = Object.create(PlayerPrototype);

Human.init = function() {
  return this.initialize(Square.HUMAN_MARKER);
};

let Computer = Object.create(PlayerPrototype);

Computer.init = function() {
  return this.initialize(Square.COMPUTER_MARKER);
};

let TTTGame = {

  HUMAN_CHOICES: [],

  joinOr(choices, separator = ', ', conjunction = 'or') {
    if (choices.length === 1) {
      return choices[0].toString();
    }  else if (choices.length === 2) {
      return `${choices[0]} ${conjunction} ${choices[1]}`;
    } else {
      let lastChoice = choices[choices.length - 1];
      let result = choices.slice(0, -1).join(separator);
      return `${result}${separator} ${conjunction} ${lastChoice}`;
    }
  },

  POSSIBLE_WINNING_ROWS: [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ],

  /*
input: an array
output: a string

rules: if the input array contains two of three strings in a nested array, output
the third string.



examples and test cases:

function compDefence(["1", "2", "4"]) {

}

nested array: [["1", "2", "3"], ["4", "5", "6"]]

output: "3"


Data structures: a function object with one parameter

algorithm:

iterate over the nested arrays

if two of the elements in the argument array are present in a nested array
return the third element.

      Problem:
      how to compare the argument array to the nested arrays.

      algorithm: make a copy of the nested arrays and
      use a nested loop to remove the common elements.

      if the length of a nested array is 1, return that element.
  */

  compDefence(humanMoves) {
    let winningRows = TTTGame[POSSIBLE_WINNING_ROWS].slice();

    for (let row = 0; row < winningRows.length; row++) {
      for (let move = 0; move < humanMoves.length; move++) {
      if (winningRows[row].includes(humanMoves[move])) {
        winningRows.splice(winningRows.indexOf(humanMoves[move], 1))
      }
      if (winningRows[row].length === 1) {
        return winningRow[row][0];
      }
    }
  }
},

  init() {
    this.board = Object.create(Board).init();
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
    return this;
  },

  play() {
    while (true) {
    console.clear();
    this.displayWelcomeMessage();
    while (true) {
      this.board.display();

      this.humanMoves();
      console.clear();
      console.log(" ");
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;
    }

    this.displayResults();
    while (true) {
    let validChoices = ["Y", "N"];
    const prompt = `Would you like to play again? Y or N: `;
    choice = readline.question(prompt);
    if (validChoices.includes(choice)) break;
    console.log("Sorry, that's not a valid choice.");
    console.log("");
    }
    if (choice === "N") break;
  }
    this.displayGoodbyeMessage();
  },

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  },

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) {
        TTTGame[HUMAN_CHOICES].push(choice);
        console.log(TTTGame[HUMAN_CHOICES]);
        break;
      }

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  },

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  },

  gameOver() {
    return this.boardIsFull() || this.someoneWon();
  },

  boardIsFull() {
    let unusedSquares = this.board.unusedSquares();
    return unusedSquares.length === 0;
  },

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  },

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  },

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  },

}

let game = Object.create(TTTGame).init();
console.log(game);
game.play();