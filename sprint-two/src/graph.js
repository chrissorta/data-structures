

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage[node].length; i++) {
    this.removeEdge(node, this.storage[node][i]);
  }

  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check if fromNode's value includes toNode
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // push both nodes into edge arrays
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //find index number of edge and if not -1, splice it from array
  //repeat in second node
  var index;
  index = this.storage[fromNode].indexOf(toNode);
  this.storage[fromNode].splice(index, 1);

  index = this.storage[toNode].indexOf(fromNode);
  this.storage[toNode].splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through each key in this.storage
  for (var key in this.storage) {
    cb(key);
  }
  //   call cb on each key


};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addNode => O(1)
 * contains => O(1)
 * removeNode => O(n^2)
 * hasEdge => O(n)
 * addEdge => O(1)
 * removeEdge => O(n)
 * forEachNode => O(n)
 */


