// this example shows explicitly setting the execution context of `sayHi`
// using the `call` method. We also use this to see how the `this` keyword
// works by changing it to `cat`. Doing so will not allow for the execution context
// to be changed.

let cat = {
  furColor: "orange",
  type: "tabby",
  sayHi() {
    console.log(`Hi I'm a ${this.type} with ${this.furColor} fur!`)
  }
}

let dog = {
  type: "dog",
  furColor: "brown"
}

let tiger = Object.create(cat);
// initializes a new empty object with cat as its prototype.

tiger.furColor = "striped";
tiger.type = "siberian tiger";

cat.sayHi(); 
// Hi I'm a tabby with orange fur!

tiger.sayHi(); 
// Hi I'm a siberian tiger with striped fur!
// tiger can delegate sayHi to cat

cat.sayHi.call(dog); 
// Hi I'm a dog with brown fur!
// call method sets the execution context to dog