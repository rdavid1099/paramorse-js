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
});