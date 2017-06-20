var Queue = require('./queue');

function Stream () {
  var q = new Queue;

  this.receive = function(data) {
    q.push(data);
    return this.data;
  };

  this.data = function() {
    return q.toString();
  };
}

module.exports = Stream;