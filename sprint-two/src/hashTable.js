

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tuppleCount = 0;
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


  if (!wasPushed) {
    this._storage[index].push([k, v]);
    console.log('added to storage ', this._storage);
    this._tuppleCount++;
    console.log('tuppleCount ', this._tuppleCount, 'limit, ', this._limit);

    var tups = this._tuppleCount;
    var limit = this._limit;
    var limitHit = tups / limit;
    if (limitHit >= .75) {
      this.resize(this._limit * 2);
    }
  }



};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    var tupple = this._storage[index][i];
    if (tupple[0] === k) {

      return tupple[1];
    }
  }


};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index] === undefined){return;}
  for (var i = 0; i < this._storage[index].length; i++) {
    var tupple = this._storage[index][i];

    if (tupple[0] === k) {
      this._storage[index].splice(i, 1);
      this._tuppleCount--;
      console.log("storage after removal: ", this._storage);
    }
  }

  console.log('tupple count ', this._tuppleCount);
  var tups = this._tuppleCount;
  var limit = this._limit;
  var limitHit = tups / limit;
  if (limitHit <= .25) {

    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function(limit) {
  // create a new limited array
  //var newSorage = LimitedArray(limit);
  // set _limit = limit
  this._count = 0;
  console.log("old limit, ", limit);
  this._limit = limit;

  console.log('new limit: ', limit);
  console.log('storage, ', this._storage);

  // var oldData = this._storage;
  // this._storage = LimitedArray(this._limit);
  // itereate over storage array
  for (var i = 0; i < this._storage.length; i++) {
    var bucket = this._storage[i];
    for (var j = 0; j < bucket.length; j++) {
      var key = bucket[j][0];
      var value = bucket[j][1];
      this.insert(key, value);
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


