var _ = require('lodash');
var dict = require('./dictionary').ENCODE_DICTIONARY;
var elements = Object.keys(dict);

function LetterEncoder() {
  this.encode = function(element) {
    if (_.includes(elements, element.toLowerCase())) {
      return dict[element.toLowerCase()];
    } else {
      return element;
    }
  };
}

module.exports = LetterEncoder;