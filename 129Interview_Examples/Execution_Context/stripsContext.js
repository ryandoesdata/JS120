// Using a function within a function strips the execution context.

let dog = {
  name: 'honey',
  species: 'husky',
  speak: function() {
    let greet = function() {
      console.log(`Hi! I'm a ${this.species} named ${this.name}!`);
    }

    greet()
    
    // greet.call(this);
  }
};

dog.speak();
// Hi! I'm a undefined named undefined!
// Hi! I'm a husky named honey!