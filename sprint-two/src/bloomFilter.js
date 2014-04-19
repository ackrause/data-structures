var makeBloomFilter = function() {
  var filterLength = 100;
  var filter = [];
  var contents = {};
  for (var i = 0; i < filterLength; i++) {
    filter.push(0);
  }

  var hash1 = function(value) {
    return value.charAt(0) % filterLength;
  };

  var hash2 = function(value) {
    // copied from hashTableHelper.js
    var hash = 0;
    for (var i = 0; i < value.length; i++) {
      hash = (hash<<5) + hash + value.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % filterLength;
  };

  var hash3 = function(value) {
    return value.length % filterLength;
  };

  var hash4 = function(value) {
    return value.charAt(value.length-1);
  };

  var hash5 = function(value) {
    var eCount = 0;
    for (var i = 0; i < value.length; i++) {
      if (value.charAt(i).toLowerCase() === 'e') {
        eCount++;
      }
    }
    return eCount % filterLength;
  };

  var hashAll = function(value) {
    return [hash1(value), hash2(value), hash3(value), hash4(value), hash5(value)];
  };

  return {
    // put an object in the bloom filter
    insert : function(value) {
      var bitsToSet = hashAll(value);
      for (var i = 0; i < bitsToSet.length; i++) {
        filter[bitsToSet[i]] = 1;
      }
      contents[JSON.stringify(value)] = true;
    },

    // check if an object is in the bloom filter
    contains: function(value) {
      var bitsToCheck = hashAll(value);
      for (var i = 0; i < bitsToCheck.length; i++) {
        if (!filter[bitsToCheck[i]]) {
          return false;
        }
      }
      console.log('Bloom filter says it might be there...');
      return contents.hasOwnProperty(JSON.stringify(value)) ? true : false;
    },
  };

};
