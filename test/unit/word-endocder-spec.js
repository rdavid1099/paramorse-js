var expect = require('../test-helper').expect;
var Encoder = require('../test-helper').encoder;

describe('Word Encoder', function() {
  beforeEach(function() {
    this.enc = new Encoder;
  });

  it('encodes a complete word', function() {
    var enc = this.enc;

    expect(enc.encode('Word')).to.equal('1011101110001110111011100010111010001110101');
  });

  it('encodes multiple words', function() {
    var enc = this.enc;

    expect(enc.encode('A word')).to.equal('1011100000001011101110001110111011100010111010001110101');
  });

  it('encodes complex sentences', function() {
    var enc = this.enc;
    var expected = '111000101010100010100010101000000010100010101000000010111000000010111010001000101110001011101010001011101010001110101110111000111011101010111011100000001011101000100010111000101110101000101110101000111010111011100000001110101110100011101110111000111011100010111011101000101110101000100011101010111000000010101000100011101000111000100011101000111010111010001000101110101110101110001011101011101011100010111010111010111';

    expect(enc.encode('This is a really, really complex sentence...')).to.equal(expected);
  });
});