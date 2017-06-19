function Queue(queue) {
  this.queue = queue || [];
  this.push = function(data) {
    this.queue.push(data);
  };

}

module.exports = Queue;