var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.latestIndex = 0;
  this.removeIndex = 0;
  this.storage = {};
};



Queue.prototype.enqueue = function(value) {
  this.storage[this.latestIndex] = value;
  this.latestIndex++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[this.removeIndex];
  delete this.storage[this.removeIndex];
  this.removeIndex++;
  return dequeued;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


