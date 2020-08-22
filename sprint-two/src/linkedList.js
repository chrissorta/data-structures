var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    // create return variable
    var currentValue = list.head.value;
    // point list.head to list.head.next
    list.head = list.head.next;
    // return  variable
    return currentValue;
  };

  list.contains = function(target) {
    //create false boolean
    var isContained = false;
    //create next variable
    var currentNode = list.head;
    //while next.next is not null
    while (currentNode.next !== null && !isContained) {
      if (currentNode.value === target || currentNode.next.value === target) {
        isContained = true;
      }
      currentNode = currentNode.next;
    }
    return isContained;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail time complexity = O(1)
 * removeHead time complexity = O(1)
 * contains time complexity = O(n)
 */
