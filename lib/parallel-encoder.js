var events = require('events');
var Stream = require('./stream');
var _ = require('lodash');
var fs = require('fs');

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

  this.loadFile = function(filename) {
    var readable = fs.createReadStream(`./bin/${filename}`, {encoding: 'utf8', fd: null});
    var _this = this;
    readable.on('readable', function() {
      var chunk;
      while (null !== (chunk = readable.read(1))) {
        _this.emit(chunk);
      }
    });
  };

  this.allStreams = function() {
    return _.map(streams, function(stream) {
      return stream.count();
    });
  };
}

module.exports = ParallelEncoder;