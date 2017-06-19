function Queue(queue) {
  this.queue = queue || [];

  this.push = function(data) {
    this.queue.push(data);
  };

  this.count = function() {
    return this.queue.length;
  };

  this.tail = function() {
    return this.queue.reverse()[0];
  };

}

module.exports = Queue;