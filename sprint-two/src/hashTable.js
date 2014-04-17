var HashTable = function(){
  this._limit = 8;
  this._keys = {};
  this._numOccupied = 0;
  this._fitForChange = false;
  this._storage = makeLimitedArray(this._limit); // this._storage = [];
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, v);
  this._keys[i] = k;
  this._numOccupied++;

  if (this._numOccupied / this._limit > 0.25){
    this._fitForChange = true;
  }

  if (this._numOccupied / this._limit >= 0.75) {
    this._resize(2*this._limit);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
  delete this._keys[i];
  this._numOccupied--;

  if (this._fitForChange && this._numOccupied / this._limit <= 0.25) {
    this._resize(Math.floor(0.5 * this._limit));
    this._fitForChange = false;
  }
};

HashTable.prototype._resize = function(newSize) {
  var newStorage = makeLimitedArray(newSize);
  var ctx = this;

  this._storage.each(function(value, i) {
    if (ctx._keys.hasOwnProperty(i)) {
      var key = ctx._keys[i];
      var newIndex = getIndexBelowMaxForKey(key, newSize);
      newStorage.set(newIndex, value);
    }
  });

  this._limit = newSize;
  this._storage = newStorage;
};

// var myHash = new HashTable(); (empty)
// myHash.insert('hola');
// ...
// myHash.insert('hello'); (now full so:)
// newStorage = [] )brand new empty table
//
