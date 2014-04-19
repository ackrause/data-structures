var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {

  };

  list.addToTail = function(value){
    var node = makeNode(value);
    if (list.tail) {
      node.previous = list.tail;
      list.tail.next = node;
      list.tail = node;
    } else {
      list.tail = node;
      list.head = node;
    }
  };

  list.removeHead = function(){
    if (!list.head){return undefined;}
    var result = list.head.value;
    if(list.head.next){
      list.head = list.head.next;
      list.head.previous = null;
    }else{
      list.head = list.tail = null;
    }
    return result;
  };

  list.removeTail = function() {
    if (!list.tail){
      return undefined;
    }else{
      var result = list.tail.value;
      if(list.tail.previous){
        var previousNode = list.tail.previous;
        previousNode.next = null;
      }else{
        list.head = list.tail = null;
      }
      return result;
    }

  };

  list.contains = function(target, node){
    var node = list.head;

    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};
