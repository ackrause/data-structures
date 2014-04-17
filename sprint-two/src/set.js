var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage = this._storage || {};
  this._storage[item] = true;
};

setPrototype.contains = function(item){
  if (this._storage[item]) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
};

// var mySet = makeSet();
// mySet.add('hi');
