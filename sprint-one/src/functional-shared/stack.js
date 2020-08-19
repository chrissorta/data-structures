var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.index = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {

  push: function(value) {
    this.storage[this.index] = value;
    this.index++;

  },

  pop: function() {
    var popped = this.storage[this.index - 1];



    return popped;

  },

  size: function() {
    return this.index;
  }


};


