var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage = this._storage || {};
  this._storage[JSON.stringify(item)] = true;
};

setPrototype.contains = function(item){
  if (this._storage[JSON.stringify(item)]) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
  delete this._storage[JSON.stringify(item)];
};

// var mySet = makeSet();
// mySet.add('hi');
