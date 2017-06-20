var expect = require('chai').expect;
var Decoder = require('../lib/word-decoder');

describe('Word Decoder', function() {
  beforeEach(function() {
    this.dec = new Decoder;
  });

  it('decodes a word from morse to english', function() {
    var dec = this.dec;

    expect(dec.decode("1011101110001110111011100010111010001110101")).to.equal("word");
  });
});