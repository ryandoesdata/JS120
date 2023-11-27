class CircularQueue {
  constructor(slots) {
    this.slots = slots;
    this.arr = new Array(slots).fill(null);
    this.currentSlot = 0;
    this.oldest = 0;
  }

  enqueue(num) {
    if (this.currentSlot === this.slots) {
      this.currentSlot = 0;
    }
    if (this.arr[this.currentSlot]) {
      this.oldest += 1;
      if (this.oldest === this.slots) {
        this.oldest = 0;
      }
    }
    this.arr[this.currentSlot] = num;
    this.currentSlot += 1;
  };

  dequeue() {
    if (this.oldest === this.slots) {
      this.oldest = 0;
    }
    let returnVal = this.arr[this.oldest];
    if (this.arr[this.oldest] === null) {
      return null;
    } else {
      this.arr[this.oldest] = null;
      this.oldest += 1;
    }
    
    return returnVal;
  };

}





let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
