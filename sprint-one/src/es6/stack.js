class Stack {
  constructor() {
    this.length = 0;
  }

  size() {
    return this.length;
  }

  push(value) {
    this[this.length] = value;
    this.length++;
    return value;
  }

  pop() {
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