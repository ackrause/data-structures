var Stack = function() {
  this.storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value){
  this.storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function(){
  if(this._size !== 0){
    this._size--;
  }
  var temp = this.storage[this._size];
  delete this.storage[this._size];
  return temp;
};

Stack.prototype.size = function(){
  return this._size;
};
