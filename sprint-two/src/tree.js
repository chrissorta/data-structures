var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;
};

treeMethods.forEach = function(cb) {
  cb(this.value);

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].forEach(cb);

  }

};





/*
 * Complexity: What is the time complexity of the above functions?
 * addChild time complexity = O(1)
 * contains time complexity = O(n)
 */
