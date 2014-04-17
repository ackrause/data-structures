var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (list.tail){
      list.tail.next = node;
      list.tail = node;
    }else{
      list.tail = node;
      list.head = node;
    }
  };

  list.removeHead = function(){
    if (!list.head){return undefined;}
    var result = list.head.value;
    if(list.head.next){
      list.head = list.head.next;
    }else{
      list.head = list.tail = null;
    }
    return result;
  };

  list.contains = function(target, node){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
