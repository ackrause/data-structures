var makeBinarySearchTree = function(value){
  var instance = Object.create(binarySearchTreeMethods);
  instance.left = null;
  instance.right = null;
  instance.value = value;
  return instance;
};

var binarySearchTreeMethods = {
  _getMaxDepth : function() {
    if (!this.left && !this.right) {
      return 1;
    } else {
      var leftDepth = this.left ? this.left._getMaxDepth() : 0;
      var rightDepth = this.right? this.right._getMaxDepth() : 0;
      return Math.max(leftDepth+1, rightDepth+1);
    }
  },

  _getMinDepth : function() {
    if (!this.left && !this.right) {
      return 1;
    } else {
      var leftDepth = this.left ? this.left._getMinDepth() : 0;
      var rightDepth = this.right ? this.right._getMinDepth() : 0;
      return Math.min(leftDepth+1, rightDepth+1);
    }
  },

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
