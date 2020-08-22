var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  //check if key is a propery then return its value, either true or false
  return !!this._storage[item];
};
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add method => O(1)
 * contains method => O(1)
 * remove method => O(1)
 *
 */
