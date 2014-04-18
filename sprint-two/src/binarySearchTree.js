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

  contains : function(){},
  depthFirstLog : function(){},
};
