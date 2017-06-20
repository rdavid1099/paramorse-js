var events = require('events');
var Stream = require('./stream');
var _ = require('lodash');
var fs = require('fs');

function ParallelEncoder () {
  var counter = 0;
  var streamNumber = 0;
  var streams = [];
  var emitter = new events.EventEmitter();

  this.encodeFromFile = function(toEncode, numOfStreams, decodeName) {
    var decodeFilename = decodeName.split('*')[0];
    if (!fs.existsSync('./bin/.encoded/')) fs.mkdirSync('./bin/.encoded/');
    if (!fs.existsSync(`./bin/.encoded/${decodeFilename}/`)) fs.mkdirSync(`./bin/.encoded/${decodeFilename}/`);
    this.setupStreams(numOfStreams);
    this.loadFile(toEncode);
    streams.forEach(function(stream, index) {
      emitter.emit(`save${index}`, stream.encode(), [decodeFilename, `${decodeFilename}${index}.txt`]);
    });
  };

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
      emitter.on(`save${i}`, function(data, status) {
        fs.writeFile(`./bin/.encoded/${status[0]}/${status[1]}`, data, 'utf8', function(err, data) { if (err) throw err; });
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
    return true;
  };

  this.allStreams = function() {
    return _.map(streams, function(stream) {
      return stream.count();
    });
  };
}

module.exports = ParallelEncoder;