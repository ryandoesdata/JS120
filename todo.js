class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addToDo(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError("can only add Todo objects");
    }

    this.todos.push(todo);
  }

  removeToDo(todo) {
    if (this.todos.includes(todo)) {
      this.todos.splice(this.todos[this.todos.indexOf(todo)], 1);
    } else {
      console.log("ToDo not found");
    }
  } 

  printList() {
    this.emptyList();
    this.todos.forEach(todo => console.log(todo.toString()));
  }

  forEach(callback) {
    for (let idx = 0; idx < this.size(); idx += 1) {
      callback(this.todos[idx]);
    }
  }

  filter(callback) {
    let obj = new TodoList(this.title);
    for (let idx = 0; idx < this.size(); idx += 1) {
      if (callback(this.todos[idx])) {
        obj[this.todos[idx].title] = this.todos[idx];
      }
    }
    return obj;
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  _validateIndex(index) { // _ in name suggests a "private" method
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  itemAt(idx) {
    if (!this.todos[idx]) {
      throw new ReferenceError(`invalid index: ${idx}`);
    } else {
    return this.todos[idx];
    }
  }

  markDoneAt(idx) {
    this.itemAt(idx).markDone();
  }

  markUndoneAt(idx) {
    this.itemAt(idx).markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.done === true);
  }

  emptyList() {
    if (this.todos.length === 0) {
      console.log("You have no more tasks")
      return undefined;
    }
  }

  shift() {
    this._validateIndex(0);
    this.todos.shift();
  }

  pop() {
    this._validateIndex(this.size() - 1);
    this.todos.pop();
  }

  removeAt(idx) {
    this._validateIndex(idx);
    let returnItem = this.todos[idx];
    this.todos.splice(idx, 1);
    return returnItem;
  }
}

let vacuum = new Todo("Vacuum House");
let waterPlants = new Todo("Water Plants")
let feedDog = new Todo("Feed Honey");
let workout = new Todo("Leg Day");


let houseList = new TodoList("House ToDos")

houseList.addToDo(vacuum);
houseList.addToDo(waterPlants);
houseList.addToDo(feedDog);
houseList.addToDo(workout);

vacuum.markDone();
feedDog.markDone();

let doneTodos = houseList.filter(todo => todo.isDone());

console.log(doneTodos);

console.log(houseList)