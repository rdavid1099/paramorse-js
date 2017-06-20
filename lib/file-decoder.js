var fs = require('fs');
var Decoder = require('./word-decoder');

function FileDecoder () {
  var rawContents = '';
  var dec = new Decoder;

  this.decode = function(toDecode, decodedName) {
    this.loadFile(toDecode);
    var decoded = dec.decode(rawContents);
    fs.writeFileSync(`./bin/${decodedName}`, decoded, 'utf8', function(err, data) { if (err) throw err; });
    return decoded.length;
  };

  this.loadFile = function(filename) {
    rawContents = fs.readFileSync(`./bin/.encoded/${filename}`, 'utf8', function(err, data) { if (err) throw err; });
    return true;
  };

  this.fileContents = function() {
    return rawContents;
  };
}

module.exports = FileDecoder;