class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.removeIndex = 0;
    this.latestIndex = 0;
  }


  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(value) {
    this.storage[this.latestIndex] = value;
    this.latestIndex++;
  }

  dequeue() {
    var dequeued = this.storage[this.removeIndex];
    delete this.storage[this.removeIndex];
    this.removeIndex++;
    return dequeued;

  }

}
