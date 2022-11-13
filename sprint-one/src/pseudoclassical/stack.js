var Stack = function() {
  this.length = 0;
};

Stack.prototype.size = function() {
  return this.length;
};

Stack.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
  return value;
};

Stack.prototype.pop = function() {
  if (this.length === 0) {
    return;
  }
  var lastIdx = this.length - 1;
  var removed = this[lastIdx];
  delete this[lastIdx];
  this.length--;
  return removed;
};