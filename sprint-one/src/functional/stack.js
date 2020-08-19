var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};




  var index = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    var popped = storage[index - 1];
    delete storage[index - 1];
    if (index === 0) {
      index = 0;
    } else {
      index--;
    }
    return popped;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
