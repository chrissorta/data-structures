var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {

  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      return this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      return this.right.insert(value);
    }
  }

};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else {
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (value > this.value) {
        if (this.right === null) {
          return false;
        } else {
          return this.right.contains(value);
        }
      }
    }

  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

  cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 *  insert => O(log(n))
 *  contains => O(log(n))
 *  depthFirstLog => O(log(n))
 */
