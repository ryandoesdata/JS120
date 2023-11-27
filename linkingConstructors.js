function Feline() {} 

Feline.prototype.myName = function() {  return this.name; }; 

Feline.prototype.myAge = function() {  return this.age; }; 

function Cat() {} 

Cat.prototype = Object.create(Feline.prototype); 

Cat.prototype.constructor = Cat; 

let garfield = new Cat();

garfield.name = 'Garfield'; 
garfield.age = '14';

console.log(garfield.myName());

console.log(garfield.constructor);