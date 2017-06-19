var _ = require('lodash');

function Queue(queue) {
  this.queue = queue || [];

  this.push = function(data) {
    this.queue.push(data);
  };

  this.count = function() {
    return this.queue.length;
  };

  this.tail = function(amount) {
    amount = amount || 1;
    return getDataSet(amount, this.queue, 'queue.slice().reverse()');
  };

  this.peek = function(amount) {
    amount = amount || 1;
    return getDataSet(amount, this.queue, 'queue');
  };

  this.pop = function(amount) {
    amount = amount || 1;
    var popData = getDataSet(amount, this.queue, 'queue');
    if (popData !== false) {
      this.queue.splice(0, amount);
      return popData;
    } else {
      return amount;
    }
  };
}

var getDataSet = function(amount, queue, evaluation) {
  var data = [];
  if (amount === 1) {
    data = eval(`${evaluation}[0]`);
  } else if (amount <= queue.length) {
    for (var i = 0; i < amount; i++) {
    	data.push(eval(`${evaluation}[i]`));
    }
  } else {
    data = false;
  }
  return data;
};

module.exports = Queue;