var _ = require('lodash');
var LetterEncoder = require('./letter-encoder');

function Encoder () {
  var le = new LetterEncoder;

  this.encode = function(data) {
    var split = data.split('');
    var result = _.map(split, this.encodeLetter);
    return result.join('');
  };

  this.encodeLetter = function(element, index, split) {
    if (element === ' ' || index === split.length - 1) {
      return le.encode(element);
    } else {
      return le.encode(element) + '000';
    }
  };

}

module.exports = Encoder;
