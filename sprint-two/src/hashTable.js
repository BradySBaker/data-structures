
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = [];
  if (!this['_storage'].get(index)) {
    this['_storage'].set(index, array);
  }
  var thisObj = this;
  _.each(this['_storage'].get(index), function(cur) {
    if (cur[0] === k) {
      thisObj.remove(k);
    }
  });
  this['_storage'].get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valAtK;
  if (this['_storage'].get(index)) {
    _.each(this['_storage'].get(index), function(cur) {
      if (cur[0] === k) {
        valAtK = cur[1];
      }
    });
  }
  return valAtK;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageObj = this['_storage'];
  _.each(this['_storage'].get(index), function(cur, i) {
    if (cur[0] === k) {
      storageObj.get(index).splice(0, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
----Constant/Could be slightly Linear----
 */

