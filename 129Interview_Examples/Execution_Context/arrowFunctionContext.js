// Successful arrow function context from surrounding function:

// let dog = {
//   name: 'honey',
//   species: 'husky',
//   speak: function() {
//     let greet = () => {
//       console.log(`Hi! I'm a ${this.species} named ${this.name}`);
//     }
    
//     greet();
//   }
// };

// dog.speak();

// Hi! I'm a husky named honey






// Using bind to explicitly set execution context

let dog = {
  name: 'honey',
  species: 'husky',
  speak: function() {
    let greet = function() {
      console.log(`Hi! I'm a ${this.species} named ${this.name}`);
    }.bind(this); // Bind to the 'this' value of the outer function

    greet();
  }
};

dog.speak();

