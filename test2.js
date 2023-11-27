const LogMixin = {
  log(message) {
    console.log(message);
  }
};

const Dog = {
  log: 'I am a dog!'
};

// Mixing LogMixin into Dog
Object.assign(Dog, LogMixin);

// Calling log can now result in unexpected behavior
Dog.log('Hello'); // What will happen?

let dogProps = Object.keys(Dog);
console.log(dogProps)