var extend = function(objToExtend, extension) {
  for (var key in extension) {
    objToExtend[key] = extension[key];
  }
};

var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = undefined;
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
  if (this.children === undefined) {
    this.children = [];
  }
  this.children.push(child);
};

treeMethods.contains = function(target){

  var found = (this.value === target);
  if(!found && this.children){
    for (var i=0; i<this.children.length; i++){
      found = found || this.children[i].contains(target);
    }
  }
  return found;
};

treeMethods.removeFromParent = function() {
  if (this.parent) {
    var i = this.parent.children.indexOf(this);
    if (i > -1) {
      this.parent.children.splice(i,1);
    }
  }
  this.parent = undefined;
  return this;
};
