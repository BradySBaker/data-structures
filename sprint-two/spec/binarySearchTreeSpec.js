describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should store value at the beginning', function() {
    expect(binarySearchTree.value).to.equal(5);
  });

  it('should work with decimals', function() {
    binarySearchTree.insert(5.5);
    binarySearchTree.insert(3.5);
    expect(binarySearchTree.right.value).to.equal(5.5);
    expect(binarySearchTree.left.value).to.equal(3.5);
  });

  it('should work with a large data set', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(5.5);
    binarySearchTree.insert(3.5);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1000);
    binarySearchTree.insert(10300);
    binarySearchTree.insert(300);
    expect(binarySearchTree.contains(10300)).to.equal(true);
    expect(binarySearchTree.contains(300)).to.equal(true);
    expect(binarySearchTree.contains(3.5)).to.equal(true);
    expect(binarySearchTree.contains(5.5)).to.equal(true);
  });
});
