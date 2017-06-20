var Queue = require('./queue');
var Decoder = require('./word-decoder');
var Encoder = require('./word-encoder')

function Stream () {
  var q = new Queue;
  var enc = new Encoder;
  var dec = new Decoder;

  this.receive = function(data) {
    q.push(data);
    return this.data;
  };

  this.decode = function() {
    var currentData = this.data();
    q.clear();
    return dec.decode(currentData);
  };

  this.encode = function() {
    var currentData = this.data();
    q.clear();
    return enc.encode(currentData);
  };

  this.empty = function() {
    return q.count() === 0;
  };

  this.data = function() {
    return q.toString();
  };
}

module.exports = Stream;