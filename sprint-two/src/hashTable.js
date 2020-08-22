

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index] === undefined) {

    this._storage[index] = [];
  }

  var wasPushed = false;
  for (var i = 0; i < this._storage[index].length; i++) {
    var tupple = this._storage[index][i];
    if (tupple[0] === k) {
      tupple[1] = v;
      wasPushed = true;
    }
  }


  if(!wasPushed) {
    this._storage[index].push([k,v]);
    console.log('bucket, ', this._storage[index]);
  }



};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    var tupple = this._storage[index][i];
    console.log('bucket value', tupple);
    if (tupple[0] === k) {

      return tupple[1];
    }
  }


};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.insert(k, undefined);

  for (var i = 0; i < this._storage[index].length; i++) {
    var tupple = this._storage[index][i];

    if (tupple[0] === k) {
      this._storage[index].splice(i, 1);
    }
  }



};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * Insert => O(1) average, O(n) worst case
 * Remove => O(1) average, O(n) worst case
 * Retrieve =>  O(1) average, O(n) worst case
 */


