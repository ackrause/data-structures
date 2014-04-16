var Queue = function(){
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function(){
  var temp = this.storage[this.start];
  delete this.storage[this.start];
  this.start++;
  if (this.start > this.end){this.start = this.end = 0;}
  return temp;
};

Queue.prototype.size = function(){
  return this.end - this.start;
};
