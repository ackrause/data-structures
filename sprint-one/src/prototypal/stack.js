var stackMethods = {
  push : function(value){
    this.storage[this._size] = value;
    this._size++;
  },

  pop : function(){
    if(this._size !== 0){
      this._size--;
    }
    var temp = this.storage[this._size];
    delete this.storage[this._size];
    return temp;
  },

  size : function(){
    return this._size;
  }
};

var makeStack = function() {
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance._size = 0;

  return instance;
};
