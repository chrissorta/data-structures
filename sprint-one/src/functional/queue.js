var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var removeIndex = 0;
  var latestIndex = 0;
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[latestIndex] = value;
    latestIndex++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[removeIndex];
    delete storage[removeIndex];
    removeIndex++;
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;

  };

  return someInstance;
};
