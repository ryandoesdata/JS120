// assigning `this` to a new variable from the outer function
// preserves its execution context. 

let dog = {
  name: 'honey',
  species: 'husky',
  speak: function() {
    let that = this;
    let greet = function() {
      console.log(`Hi! I'm a ${that.species} named ${that.name}`);
    };

    greet();
  }
};

dog.speak();

// Hi! I'm a husky named honey