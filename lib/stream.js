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

  this.data = function() {
    return q.toString();
  };

  this.decode = function() {
    return dec.decode(this.data());
  };
}

module.exports = Stream;