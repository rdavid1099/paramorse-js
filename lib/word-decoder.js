var LetterDecoder = require('./letter-decoder');
var _ = require('lodash');

function Decoder () {
  var ld = new LetterDecoder;

  this.decode = function(data) {
    if (data === '0000000') {
      return ' ';
    } else if (data.includes('0000000')) {
      return this.decodeWords(data.split('0000000'));
    } else {
      var split = data.split('000');
      var result = _.map(split, function(element) {
        return ld.decode(element);
      });
      return result.join('');
    }
  };

  this.decodeWords = function(data) {
    var withoutSpace = this.splitWhitespace(data);
    return _.map(withoutSpace, this.decode).join('');
  };

  this.splitWhitespace = function(data) {
    var injected = _.map(data, function(element, index) {
      if (index === data.length - 1){
        return element;
      } else {
      return [element, '0000000'];
      }
    });
    return _.flattenDeep(injected);
  };
}

module.exports = Decoder;