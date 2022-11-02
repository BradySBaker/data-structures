var Queue = function() {
  this.length = 0;
};

Queue.prototype.size = function() { return this.length; };

Queue.prototype.enqueue = function(value) {
  var previous = this[0];
  for (var i = 0; i <= this.length; i++) {
    var cur = this[i];
    this[i] = previous;
    previous = cur;
  }
  this[0] = value;
  this.length++;
  return value;
};

Queue.prototype.dequeue = function() {
  if (this.length === 0) {
    return;
  }
  var lastIdx = this.length - 1;
  var removed = this[lastIdx];
  delete this[lastIdx];
  this.length--;
  return removed;
};

