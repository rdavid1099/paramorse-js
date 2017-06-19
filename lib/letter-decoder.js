var _ = require('lodash');
var dict = require('./dictionary').DECODE_DICTIONARY;
var elements = Object.keys(dict);

function LetterDecoder() {
  this.decode = function(element) {
    if (_.includes(elements, element)) {
      return dict[element];
    } else {
      return element;
    }
  };
}

module.exports = LetterDecoder;