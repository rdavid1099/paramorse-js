var fs = require('fs');

function FileDecoder () {
  var rawContents = '';

  this.loadFile = function(filename) {
    rawContents = fs.readFileSync(`./bin/.encoded/${filename}`, 'utf8', function(err, data) { if (err) throw err; });
    return true;
  };
}

module.exports = FileDecoder;