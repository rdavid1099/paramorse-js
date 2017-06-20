var LetterDecoder = require('./letter-decoder');
var _ = require('lodash');

function Decoder () {
  var ld = new LetterDecoder;

  this.decode = function(data) {
    var split = data.split('000');
    var result = _.map(split, this.decodeLetter);
    return result.join('');
  };

  this.decodeLetter = function(element) {
    return ld.decode(element);
  };
}

module.exports = Decoder;