var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[end] = value;
    end++;
  };

  instance.dequeue = function(){
    var temp = storage[start];
    delete storage[start];
    start++;
    if (start > end){start = end = 0;}
    return temp;
  };

  instance.size = function(){
    return end-start;
  };

  return instance;
};
