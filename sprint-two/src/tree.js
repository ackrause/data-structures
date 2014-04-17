var extend = function(objToExtend, extension) {
  for (var key in extension) {
    objToExtend[key] = extension[key];
  }
};

var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  if (this.children === undefined) {
    this.children = [];
  }
  this.children.push(child);
};

treeMethods.contains = function(target){

};

