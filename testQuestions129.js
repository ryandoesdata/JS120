class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof");
    this.breed = breed;
  }

  fetch() {
    console.log(`${this.name} is fetching.`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound();
myDog.fetch();

/*
Examine the provided code and answer the following questions:

Explain the concept of inheritance as demonstrated in the code.
Describe the purpose of the super keyword in the Dog class constructor.
Demonstrate an understanding of polymorphism in the code.
Identify and explain one advantage of using classes and inheritance in Object-Oriented Programming.



ANSWER:
Inheritance:
The code demonstrates the concept of inheritance through the use of classes. 
The Dog class extends the Animal class, inheriting its properties and methods. 
This allows the Dog class to reuse the code defined in the Animal class, 
promoting code reusability and maintaining a hierarchical relationship 
between the two classes.

super Keyword:
The super keyword is used in the Dog class constructor to call the constructor 
of the parent class (Animal). In this context, it initializes the name and 
sound properties of the Animal class, allowing the Dog class to set its 
specific property (breed) while leveraging the common functionality provided 
by the Animal class.

Polymorphism:
Polymorphism is demonstrated in the makeSound method. Although both Animal 
and Dog classes have a makeSound method, the specific implementation is 
polymorphic. When calling myDog.makeSound(), the method from the Dog class 
is executed, displaying "Buddy says Woof." This showcases polymorphism, 
where a method behaves differently based on the type of the object 
it belongs to.

Advantage of Classes and Inheritance:
One advantage of using classes and inheritance in Object-Oriented Programming 
is code organization and reusability. By creating a hierarchy of classes with 
shared properties and methods at higher levels, subclasses can inherit and 
extend functionality without duplicating code. This promotes a modular and 
maintainable code structure, making it easier to understand, modify, and scale 
the codebase.
*/

let cat = {
  color: "white",
  name: "bob",
  descibe() {
    console.log(`My name is ${this.name} and I have ${this.color} fur.`);
  },
};

let dog = {
  color: "golden",
  name: "frank",
};

dog.greet();

/* Explain why the last line throws an error, then change that line
so it produces the intended result. Explain why that change produced
the desired output. */

//Answer:
// jason.greet.call(jackie);






//5 points

let sandwich = Object.create(null);

sandwich.make = function() {
    return `makin' a sammy`;
  }

class Soup {
  constructor(name) {
    this.name = name
  }
  slurp() {
    return `slurpin' some ${this.name}`;
  }
}

class Bisque extends Soup {
  constructor() {
  super("bisque")
  }
}

let turkeyClub = Object.create(sandwich);
let lobsterBisque = new Bisque();

console.log(turkeyClub.make());
console.log(lobsterBisque.slurp());
console.log(lobsterBisque.hasOwnProperty("name"));

//Question
/* What are the prototype chains for turkeyClub and lobsterBisque? How do
they access their `make` and `slurp` methods? */


//answer: turkeyClub => sandwich => null
// lobsterBisque => Bisque => Soup => Object.prototype => null
// they are able to delegate their methods up the prototype chain.
// Bisque assigns the string "bisque" to its `name` property, enabling 
// new instances to use it with `slurp`




