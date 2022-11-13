var Stack = function() {
  var storage = {};
  storage.length = 0;
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {
  size: function() { return this.length; },

  push: function(value) { this[this.length] = value; this.length++; return value; },

  pop: function() {
    if (this.length === 0) {
      return;
    }
    var removed = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return removed;
  }

};


