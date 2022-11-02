var Stack = function() {
  var storage = Object.create(stackMethods);
  storage.length = 0;
  return storage;
};

var stackMethods = {
  size: function() { return this.length; },

  push: function(value) { this[this.length] = value; this.length++; return value; },

  pop: function(value) {
    if (this.length === 0) {
      return;
    }
    var removed = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return removed;
  }
};


