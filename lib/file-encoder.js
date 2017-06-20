var fs = require('fs');

function FileEncoder () {
  var rawContents = '';

  this.loadFile = function(filename) {
    rawContents = fs.readFileSync(`./bin/${filename}`, 'utf8', function(err, data) { if (err) throw err; });
    return true;
  };

  this.fileContents = function() {
    return rawContents;
  };
}

module.exports = FileEncoder;