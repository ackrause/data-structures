var extend = function(objToExtend, extension){
  for(var key in extension){
    objToExtend[key] = extension[key];
  }
};


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
  var instance = {};

  instance.storage = {};
  instance._size = 0;

  extend(instance, stackMethods);

  return instance;
};

