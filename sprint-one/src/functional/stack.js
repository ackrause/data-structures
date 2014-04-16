var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size =0;

  // Implement the methods below
  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    if(size !== 0){
      size--;
    }
    var temp = storage[size];
    delete storage[size];
    return temp;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
