var expect = require('chai').expect;
var Encoder = require('../lib/word-encoder');

describe('Word Encoder', function() {
  beforeEach(function() {
    this.enc = new Encoder;
  });

  it('encodes a complete word', function() {
    var enc = this.enc;

    expect(enc.encode('Word')).to.equal('1011101110001110111011100010111010001110101');
  });
});