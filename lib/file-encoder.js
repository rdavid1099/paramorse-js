var fs = require('fs');
var Encoder = require('./word-encoder');

function FileEncoder () {
  var rawContents = '';
  var enc = new Encoder;

  this.encode = function(toEncode, encodedName) {
    this.loadFile(toEncode);
    var encoded = enc.encode(rawContents);
    if (!fs.existsSync('./bin/.encoded/')) fs.mkdirSync('./bin/.encoded/')
    fs.writeFileSync(`./bin/.encoded/${encodedName}`, encoded, 'utf8', function(err, data) { if (err) throw err; });

  };

  this.loadFile = function(filename) {
    rawContents = fs.readFileSync(`./bin/${filename}`, 'utf8', function(err, data) { if (err) throw err; });
    return true;
  };

  this.fileContents = function() {
    return rawContents;
  };
}

module.exports = FileEncoder;