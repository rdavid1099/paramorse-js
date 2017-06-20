var events = require('events');
var Stream = require('./stream');
var _ = require('lodash');

function ParallelEncoder () {
  var counter = 0;
  var streamNumber = 0;
  var streams = [];
  var emitter = new events.EventEmitter();

  this.emit = function(data) {
    if (counter === streamNumber) counter = 0;
    emitter.emit(`stream${counter}`, data, counter);
    counter += 1;
  };

  this.setupStreams = function(number) {
    streamNumber = number;
    for(var i=0; i < number; i++) {
      streams.push(new Stream);
      emitter.on(`stream${i}`, function(data, status) {
        streams[status].receive(data);
      });
    }
  };

  this.allStreams = function() {
    return _.map(streams, function(stream) {
      return stream.count();
    });
  };
}

module.exports = ParallelEncoder;