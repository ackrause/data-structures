var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(value){
  var newNode = {value: value, edges: {}};
  this.nodes[value] = newNode;
};

Graph.prototype.contains = function(node){
  return this.nodes.hasOwnProperty(node) ? true : false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};
