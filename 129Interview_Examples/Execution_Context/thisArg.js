//Passing the optional thisArg argument into array methods such as 
// forEach can preserve the execution context.

let chocolateCount = {
  num: 1,
  chocolates: new Array(5).fill("chocolate"),

  countChocolates: function() {
    this.chocolates.forEach(function(chocolate) {
      if (this.num > 1) {
          console.log(`I have a ${this.num} ${chocolate}s!`);
      } else {
          console.log(`I have a ${this.num} ${chocolate}!`);
      }
      this.num += 1;
    }, this);
  },
};

chocolateCount.countChocolates();

//with thisArg

// I have a 1 chocolate!
// I have a 2 chocolates!
// I have a 3 chocolates!
// I have a 4 chocolates!
// I have a 5 chocolates!

// without thisArg

// I have a undefined chocolate!
// I have a NaN chocolate!
// I have a NaN chocolate!
// I have a NaN chocolate!
// I have a NaN chocolate!