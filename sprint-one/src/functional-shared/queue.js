var extend = function(patient, surgeon){
  for (var key in surgeon){
    patient[key] = surgeon[key];
  }
};


var queueMethods = {
  enqueue : function(value){
    this.storage[this.end] = value;
    this.end++;
  },

  dequeue : function(){
    var temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    if (this.start > this.end){this.start = this.end = 0;}
    return temp;
  },

  size : function(){
    return this.end - this.start;
  },

};

var makeQueue = function(){
  var instance = {};

  extend(instance, {storage: {}, start: 0, end: 0});
  extend(instance, queueMethods);

  return instance;
};
