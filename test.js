let prototypeObject = {
  propOne: 1,
  propTwo: 2,
  addProps() {
    console.log(this.propOne + this.propTwo);
  }
}

let instanceObject = Object.create(prototypeObject);

console.log(Object.getPrototypeOf(instanceObject));

function makeObject(propOne, propTwo) {
  this.propOne = propOne;
  this.propTwo = propTwo;
}

makeObject.prototype.addProps = function() {
  console.log(this.propOne + this.propTwo);
}

let instanceObject = new makeObject(1, 2);

console.log(Object.getPrototypeOf(instanceObject))