var Queue = function() {
  var storage = Object.create(queueMethods);
  storage.length = 0;
  return storage;
};

var queueMethods = {
  size: function() { return this.length; },

  enqueue: function(value) {
    var previous = this[0];
    for (var i = 0; i <= this.length; i++) {
      var cur = this[i];
      this[i] = previous;
      previous = this[i];
    }
    this[0] = value;
    this.length++;
    return value;
  },

  dequeue: function() {
    if (this.length === 0) {
      return;
    }
    var removed = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return removed;
  }
};


