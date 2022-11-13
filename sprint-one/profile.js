//6x slow down

//Scripting ----

//Functional = 1421, 1471, 1416 ms

//Functional Shared = 1355, 1384, 1357 ms

//Prototypal = 2000, 2012, 1968 ms

//Pseudoclassical = 2113, 2083, 2026 ms

//Es6 = 2086, 1974, 2213 ms

if (Type() === 'Pseudoclassical' || Type() === 'Es6') {
  var queue = new Queue;
  var stack = new Stack;
} else {
  var queue = Queue();

  var stack = Stack();

}

for (var i = 0; i < 5000; i++) {
  queue.enqueue(i);
  stack.push(i);
}

for (var i = 0; i < 5000; i++) {
  queue.dequeue();
  stack.pop();
}

console.log('Called');
