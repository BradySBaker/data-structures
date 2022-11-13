var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var storageLength = 0;

  someInstance.enqueue = function(value) {

    if (storageLength !== 0) {
      var previousVal = storage[0];

      for (var i = 0; i <= storageLength + 1; i++) {
        var curVal = storage[i];
        storage[i] = previousVal;
        previousVal = curVal;
      }

    }

    storage[0] = value;
    storageLength++;
  };

  someInstance.dequeue = function() {
    if (storageLength === 0) {
      return 0;
    }
    var removed = storage[storageLength - 1];
    delete storage[storageLength - 1];
    storageLength--;
    return removed;
  };

  someInstance.size = function() {
    return storageLength;
  };

  return someInstance;
};
