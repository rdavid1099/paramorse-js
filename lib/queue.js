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
    var tail = [];
    if (amount === 1) {
      tail = this.queue.slice().reverse()[0];
    } else if (amount <= this.queue.length) {
      for (var i = 0; i < amount; i++) {
      	tail.push(this.queue.slice().reverse()[i]);
      }
    } else {
      tail = false;
    }
    return tail;
  };
}

module.exports = Queue;