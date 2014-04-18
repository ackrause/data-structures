var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(fromNode, toNode){
  var newNode = {value: fromNode, edges: {}};
  if (toNode) {
    newNode["edges"][toNode] = true;
  }
  this.nodes[fromNode] = newNode;

  // check if this is the second node inserted
  var nodes = Object.keys(this.nodes);
  if (nodes.length === 2) {
    this.addEdge.apply(this, nodes);
  }
};

Graph.prototype.contains = function(node){
  return this.nodes.hasOwnProperty(node) ? true : false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    return this.nodes[fromNode]["edges"][toNode] ? true : false;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    this.nodes[fromNode]["edges"][toNode] = true;
    this.nodes[toNode]["edges"][fromNode] = true;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};
