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
});