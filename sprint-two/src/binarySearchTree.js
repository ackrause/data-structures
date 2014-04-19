var makeBinarySearchTree = function(value){
  var instance = Object.create(binarySearchTreeMethods);
  instance.left = null;
  instance.right = null;
  instance.value = value;
  return instance;
};

var binarySearchTreeMethods = {
  insert : function(value){
    if (value < this.value) {
      if (!this.left) {
        this.left = makeBinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = makeBinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },

  contains : function(target){
    var wasFound = this.value === target;

    if (!wasFound) {
      if (target > this.value && this.right) {
        wasFound = this.right.contains(target);
      } else if (this.left){
        wasFound = this.left.contains(target);
      }
    }

    return wasFound;
  },

  depthFirstLog : function(callback){
    // process current value
    callback(this.value);

    // process left branch
    if (this.left) {
      this.left.depthFirstLog(callback);
    }

    // process right branch
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  },
};
