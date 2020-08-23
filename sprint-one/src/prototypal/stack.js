var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.index = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {

  push: function(value) {
    this.storage[this.index] = value;
    this.index++;

  },

  pop: function() {
    var popped = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    if (this.index > 0) {
      this.index--;
    }

    return popped;

  },

  size: function() {
    return Object.keys(this.storage).length;
  }

};


