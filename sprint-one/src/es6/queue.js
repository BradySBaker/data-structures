class Queue {
  constructor() {
    this.length = 0;
  }

  size() {
    return this.length;
  }

  enqueue(value) {
    var previous = this[0];
    for (var i = 0; i <= this.length; i++) {
      var cur = this[i];
      this[i] = previous;
      previous = cur;
    }
    this[0] = value;
    this.length++;
    return value;
  }

  dequeue() {
    if (this.length === 0) {
      return;
    }
    var lastIdx = this.length - 1;
    var removed = this[lastIdx];
    delete this[lastIdx];
    this.length--;
    return removed;
  }

}
