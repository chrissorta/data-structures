class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
    this.storage = {};
  }

  size() {
    return this.index;
  }

  push(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  pop () {
    var popped = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    if (this.index === 0) {
      this.index = 0;
    } else {
      this.index--;
    }
    return popped;
  }

}