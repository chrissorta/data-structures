var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.removeIndex = 0;
  someInstance.latestIndex = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },

  enqueue: function(value) {
    this.storage[this.latestIndex] = value;
    this.latestIndex++;
  },

  dequeue: function() {
    var dequeued = this.storage[this.removeIndex];
    delete this.storage[this.removeIndex];
    this.removeIndex++;
    return dequeued;

  }
};


